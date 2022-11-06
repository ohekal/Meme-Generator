import React from "react";
import memesData from "../memesData.js";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImage, setAllMemeImage] = React.useState(memesData);

  function getImage() {
    const memesArray = allMemeImage.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => {
      return { ...prevMeme, randomImage: url };
    });
  }
  return (
    <div className="meme">
      <input type="text" placeholder="Shut up"></input>
      <input type="text" placeholder="and take my money"></input>
      <button onClick={getImage}>Get a new meme image 🖼</button>
      <img src={meme.randomImage} width="100%" alt="memeImage" />
    </div>
  );
}
