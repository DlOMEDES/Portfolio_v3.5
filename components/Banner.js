import styles from "@/styles/banner.module.scss";
import Header from "@/components/Header";

export default function Banner() {
  return (
    <section className={styles.banner}>
      <Header />
      <div className={styles.content}>
        <p className={styles.content_hello}>Hello</p>
        <h1 className={styles.content_title}>
          <span> I'm Diomedes Lajara,</span> <br /> a Web Developer specializing
          Frontend User Interfaces using WordPress and ReactJS.
        </h1>
      </div>
    </section>
  );
}
