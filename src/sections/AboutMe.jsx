function AboutMe() {
  return (
    <div className="text-sm leading-relaxed">
      <pre className="bg-[#1b1b1f] p-4 rounded border border-black/20 overflow-x-auto">
{`const name = "Jeong Chan"; 
const role = "Frontend Developer";
const interests = ["Interactive UI", "Portfolio polish", "Flutter toys"];

function AboutMe() {
  return (
    <>
      <h1>Hello, I'm {name} 👋</h1>
      <p>I build playful UIs and practical tools.</p>
      <p>Focused on React + Tailwind; exploring Flutter for mobile.</p>
    </>
  )
}`}
      </pre>
    </div>
  );
}

export default AboutMe;
