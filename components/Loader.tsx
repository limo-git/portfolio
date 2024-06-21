import styles from './Loader.module.css';

const Loader = () => {
  return (
    <>
    <div className={styles.loaderWrapper}>
      <div className={styles.loaderInner}>
        <div className={styles.loader}>
          <span className={styles.letter}>H</span>
          <span className={styles.letter}>E</span>
          <span className={styles.letter}>L</span>
          <span className={styles.letter}>L</span>
          <div className={styles.letterO}></div>
        </div>
        <div className={styles.welcome}>Bonjour</div>
        <div className={styles.welcome}>Guten Tag</div>
        <div className={styles.welcome}>こんにちは</div>
        <div className={styles.welcome}>Bonjour</div>
        <div className={styles.welcome}>Guten Tag</div>
        <div className={styles.welcome}>こんにちは</div>
      </div>
    </div>
    </>
  );
};

export default Loader;  