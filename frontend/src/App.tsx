import { LoginBox } from './components/LoginBox';
import { MessageList } from './components/MessageList';

import styles from './App.module.scss';

export const App = () => (
  <div className={styles.contentWrapper}>
    <MessageList />
    <LoginBox />
  </div>
);
