import React from 'react';

import { VscGithubInverted, VscSignOut } from 'react-icons/vsc';

import { useAuth } from '../../hooks/useAuth';

import { api } from '../../services/api';

import styles from './styles.module.scss';

export const SendMessageForm = () => {
  const { user, signOut } = useAuth();

  const [message, setMessage] = React.useState('');

  const onSendMessage = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!message.trim()) {
      return;
    }

    await api.post('/messages', { text: message });
  };

  return (
    <div className={styles.sendMessageFormWrapper}>
      <button className={styles.signOutButton} onClick={() => signOut()}>
        <VscSignOut size={32} />
      </button>

      <header className={styles.userInformation}>
        <div className={styles.userImage}>
          <img src={user?.avatar_url} alt={user?.name} />
        </div>
        <strong className={styles.userName}>{user?.name}</strong>
        <span className={styles.userGithub}>
          <VscGithubInverted size={16} />
          {user?.login}
        </span>
      </header>

      <form
        className={styles.sendMessageForm}
        onSubmit={(event) => onSendMessage(event)}
      >
        <label htmlFor="message">Mensagem</label>
        <textarea
          id="message"
          name="message"
          value={message}
          placeholder="Qual sua expectativa para o evento?"
          onChange={(event) => setMessage(event.target.value)}
        />

        <button type="submit">Enviar mensagem</button>
      </form>
    </div>
  );
};
