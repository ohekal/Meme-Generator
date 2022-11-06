export default function Header() {
  return (
    <div className="header">
      <img src={process.env.PUBLIC_URL + "Troll Face.png"} alt="headerimg" />
      <h2>Meme Generator</h2>
      <p>React Course - Project 3</p>
    </div>
  );
}
