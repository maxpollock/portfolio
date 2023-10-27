import github from "../assets/images/github-icon.png";
import linkedin from "../assets/images/linkedin-icon.png";
import menu from "../assets/images/menu-icon.png";

export default function Header() {
  return (
    <header>
      <h1>maxpollock.dev</h1>

      <div className="icons">
        <img src={github} alt="Github Icon" />
        <img src={linkedin} alt="LinkedIn Icon" />
        <img src={menu} alt="LinkedIn Icon" />
      </div>
    </header>
  );
}
