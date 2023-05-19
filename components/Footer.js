import { FaMapMarkedAlt } from "react-icons/fa";
import {
  AiOutlineMail,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillCodepenCircle,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footNotes">
        <FaMapMarkedAlt />
        <p>Fort Lauderdale, Florida</p>
        <AiOutlineMail />
        <a href="mailto:webmaster@example.com">diomedes.lajara@gmail.com</a>
      </div>

      <div className="footSocial">
        <a href="https://github.com/DlOMEDES">
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/diomedeslajara/">
          <AiFillLinkedin />
        </a>
        <a href="https://twitter.com/dl_ajara">
          <AiFillTwitterCircle />
        </a>
        <a href="https://codepen.io/DlOMEDES">
          <AiFillCodepenCircle />
        </a>
      </div>

      <small>
        Copyright © {2023} Diomedes Lajara, all rights reserved. Designed and
        Developed by Diomedes{" "}
      </small>
    </footer>
  );
}
