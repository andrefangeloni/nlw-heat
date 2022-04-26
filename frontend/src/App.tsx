import { LoginBox } from './components/LoginBox';
import { MessageList } from './components/MessageList';

import { useAuth } from './hooks/useAuth';

import styles from './App.module.scss';
import { SendMessageForm } from './components/SendMessageForm';

export const App = () => {
  const { user } = useAuth();

  return (
    <div
      className={`${styles.contentWrapper} ${
        !!user ? styles.contentSigned : ''
      }`}
    >
      <MessageList />
      {!!user ? <SendMessageForm /> : <LoginBox />}
    </div>
  );
};
