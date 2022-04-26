import React from 'react';

import io from 'socket.io-client';

import logo from '../../assets/logo.svg';
import { api } from '../../services/api';

import styles from './styles.module.scss';

type Message = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  };
};

const messagesQueue: Message[] = [];

const socket = io('http://localhost:3333');

socket.on('new_message', (newMessage: Message) => {
  messagesQueue.push(newMessage);
});

export const MessageList = () => {
  const [messages, setMessages] = React.useState<Message[]>([]);

  React.useEffect(() => {
    setInterval(() => {
      if (messagesQueue.length) {
        setMessages((prevState) =>
          [messagesQueue[0], prevState[0], prevState[1]].filter(Boolean),
        );

        messagesQueue.shift();
      }
    }, 3000);
  }, []);

  React.useEffect(() => {
    const getMessages = async () => {
      const { data } = await api.get<Message[]>('/messages/last3');
      setMessages(data);
    };

    getMessages();
  }, []);

  return (
    <div className={styles.messageListWrapper}>
      <img src={logo} alt="DoWhile 2021" />

      <ul className={styles.messageList}>
        {messages.map((message) => (
          <li key={message.id} className={styles.message}>
            <p className={styles.messageContent}>{message.text}</p>
            <div className={styles.messageUser}>
              <div className={styles.userImage}>
                <img src={message.user.avatar_url} alt={message.user.name} />
              </div>
              <span>{message.user.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
