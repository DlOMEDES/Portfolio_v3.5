import styles from "@/styles/banner.module.scss";

export default function Banner() {
  return (
    <section className={styles.banner}>
      <p className={styles.banner_hello}>Hello</p>
      <h1 className={styles.banner_title}>
        <span> I'm Diomedes Lajara,</span> <br /> a Web Developer specializing
        Frontend User Interfaces using WordPress and ReactJS.
      </h1>
    </section>
  );
}
