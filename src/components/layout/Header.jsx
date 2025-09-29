function Header() {
  return (
    <header className="bg-gray-100 p-4 shadow fixed w-full top-0 z-50">
      <nav className="flex gap-6 text-gray-700 font-medium justify-center">
        <a href="#hero">Home</a>
        <a href="#about">About Me</a>
        <a href="#skill">Skill</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
      </nav>
    </header>
  );
}

export default Header;

