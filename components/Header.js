// import styles from "@/styles/header.module.scss";
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
      ? 'menuBtn_line'
      : 'menuBtn_line menuBtn_line--open';

  return (
    <header className='header'>
      <img src="/logo-dark.svg" alt="" className='header_logo' />
      <div
        className='menuBtn'
        onClick={handleClick}
      >
        <span className={ternaryShowBtnLines}></span>
        <span className={ternaryShowBtnLines}></span>
        <span
          className={
            ShowNav === false
              ? 'menuBtn_line'
              : 'menuBtn_line menuBtn_line--open'
          }
        ></span>
      </div>

      <nav
        className={
          ShowNav === false
            ? 'mainNav'
            : 'mainNav mainNav_Open'
        }
      >
        <ul className='mainNav_menu'>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li>
            <Link href="/post">Post page</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
