import styles from './index.module.css';
import Image from 'next/image'; 

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <Image src="/heart.svg" height={200} width={200} />
    </div>
  );
}

export default Index;
