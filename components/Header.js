import styles from "@/styles/header.module.scss";
// import MainNav from "../components/MainNav";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [ShowNav, SetNav] = useState(false);
  const handleClick = () => {
    SetNav(ShowNav === false);
    const button = document.querySelector("styles.MenuBtn");
    console.log(button);
  };

  // Used a variable for duplicate ternary operation on menu btn lines with ShowNav state
  let ternaryShowBtnLines =
    ShowNav === false
      ? `${styles.MenuBtn_Line}`
      : `${styles.MenuBtn_Line} ${styles.MenuBtn_Open_Line}`;

  return (
    <header className={styles.Header}>
      <div className={styles.logo}>
        <h1>imgLogo</h1>
      </div>
      <div
        className={
          ShowNav === false
            ? `${styles.MenuBtn}`
            : `${styles.MenuBtn} ${styles.MenuBtn_Open}`
        }
        onClick={handleClick}
      >
        <span className={ternaryShowBtnLines}></span>
        <span className={ternaryShowBtnLines}></span>
        <span
          className={
            ShowNav === false
              ? `${styles.MenuBtn_Line}`
              : `${styles.MenuBtn_Line} ${styles.MenuBtn_Open_Line}`
          }
        ></span>
      </div>

      <nav
        className={
          ShowNav === false
            ? `${styles.MainNav}`
            : `${styles.MainNav} ${styles.MainNav_Open}`
        }
      >
        <ul className={styles.MainNav_Menu}>
          <div className={styles.MainNav_MenuLeft}>
            <li className={styles.MainNav_MenuLinks}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.MainNav_MenuLinks}>
              <Link href="/blogs">Blogs</Link>
            </li>
          </div>
          <div className={styles.MainNav_MenuRight}>
            <li className={styles.MainNav_MenuLinks}>
              <Link href="/post">Post page</Link>
            </li>
            <li className={styles.MainNav_MenuLinks}>
              <Link href="/">About</Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
