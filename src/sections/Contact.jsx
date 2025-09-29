function Contact() {
  return (
    <div className="space-y-2 text-sm">
      <h2 className="text-lg font-semibold mb-2">Contact</h2>
      <div className="rounded border border-white/10 bg-[#1f1f23] p-4">
        <ul className="space-y-2">
          <li>
            <span className="text-gray-400">GitHub:</span>{" "}
            <a className="text-[#8cc8ff] hover:underline" href="https://github.com/jeongchani" target="_blank" rel="noreferrer">
              github.com/jeongchani
            </a>
          </li>
          <li>
            <span className="text-gray-400">Portfolio:</span>{" "}
            <a className="text-[#8cc8ff] hover:underline" href="https://jeongchani.github.io/" target="_blank" rel="noreferrer">
              jeongchani.github.io
            </a>
          </li>
          <li>
            <span className="text-gray-400">Email:</span>{" "}
            <a className="text-[#8cc8ff] hover:underline" href="mailto:example@email.com">
              idgachan@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
