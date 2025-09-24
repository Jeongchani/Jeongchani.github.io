import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-100 p-4 shadow">
      <nav className="flex gap-6 text-gray-700 font-medium">
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/career">Career</Link>
        <Link to="/experience">Experience</Link>
      </nav>
    </header>
  );
}

export default Header;
