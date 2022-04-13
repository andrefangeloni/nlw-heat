import logo from '../../assets/logo.svg';

import styles from './styles.module.scss';

export const MessageList = () => (
  <div className={styles.messageListWrapper}>
    <img src={logo} alt="DoWhile 2021" />

    <ul className={styles.messageList}>
      <li className={styles.message}>
        <p className={styles.messageContent}>
          Não vejo a hora de começar esse evento, com certeza vai ser o melhor
          de todos os tempos.
        </p>
        <div className={styles.messageUser}>
          <div className={styles.userImage}>
            <img
              src="https://github.com/andrefangeloni.png"
              alt="André Angeloni"
            />
          </div>
          <span>André Angeloni</span>
        </div>
      </li>

      <li className={styles.message}>
        <p className={styles.messageContent}>
          Não vejo a hora de começar esse evento, com certeza vai ser o melhor
          de todos os tempos.
        </p>
        <div className={styles.messageUser}>
          <div className={styles.userImage}>
            <img
              src="https://github.com/andrefangeloni.png"
              alt="André Angeloni"
            />
          </div>
          <span>André Angeloni</span>
        </div>
      </li>

      <li className={styles.message}>
        <p className={styles.messageContent}>
          Não vejo a hora de começar esse evento, com certeza vai ser o melhor
          de todos os tempos.
        </p>
        <div className={styles.messageUser}>
          <div className={styles.userImage}>
            <img
              src="https://github.com/andrefangeloni.png"
              alt="André Angeloni"
            />
          </div>
          <span>André Angeloni</span>
        </div>
      </li>
    </ul>
  </div>
);
