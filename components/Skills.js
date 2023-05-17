import SectionIntro from "@/components/SectionIntro.js";
import { SiJavascript } from "react-icons/si";
import {
  FaHtml5,
  FaReact,
  FaWordpressSimple,
  FaShopify,
  FaCss3Alt,
} from "react-icons/fa";

export default function Skills() {
  return (
    <section className="skills secmargin">
      <SectionIntro
        title="Skills"
        subtitle="I am a creative problem solver. I build effective and user friendly
      websites. Below are my key technical skills that I can bring to your
      project."
      />

      <div className="techIcons">
        <li className="techIcons_list">
          <p>HTML</p>
          <span>
            <FaHtml5 size="5rem" />
          </span>
        </li>
        <li className="techIcons_list">
          <p>CSS</p>
          <span>
            <FaCss3Alt size="5rem" />
          </span>
        </li>
        <li className="techIcons_list">
          <p>JavaScript</p>
          <span>
            <SiJavascript size="5rem" />
          </span>
        </li>
        <li className="techIcons_list">
          <p>React</p>
          <span>
            <FaReact size="5rem" />
          </span>
        </li>
        <li className="techIcons_list">
          <p>WordPress</p>
          <span>
            <FaWordpressSimple size="5rem" />
          </span>
        </li>
        <li className="techIcons_list">
          <p>Shopify</p>
          <span>
            <FaShopify size="5rem" />
          </span>
        </li>
      </div>

      <ul className="tech">
        <li className="tech_item">
          <b>Responsive Web Design</b>
          <p>
            I use programs like Figma and Adobe to create mock-ups of what the
            product will look like in mobile devices and desktops. I also keep a
            sketch book to brainstorm quick wireframes iterations.
          </p>
        </li>
        <li className="tech_item">
          <b>HTML / CSS / Sass</b>
          <p>
            I'm passionate about these technologies to power shapes, structure
            and colors when developing a pixel perfect web design.
          </p>
        </li>
        <li className="tech_item">
          <b>JavaScript / React / jQuery</b>
          <p>
            Using JS is facinating, it is flexible and can be used to change
            every part of a website. Great for creating solutions that are
            tailored to specific requirements. My favorite way of using it is to
            manipulate DOM elements of web pages to give users an interactive
            experience.
          </p>
        </li>
        <li className="tech_item">
          <b>WordPress</b>
          <p>
            WP is a great option to help manage content. I enjoy building themes
            from the ground up using PHP for the best performance. This allows
            users to make updates on the fly.
          </p>
        </li>

        <li className="tech_item">
          <b>Shopify</b>
          <p>A great option to setup a store front fast</p>
        </li>
      </ul>
    </section>
  );
}
