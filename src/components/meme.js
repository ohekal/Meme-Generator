import React, { useState, useEffect } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImage, setAllMemeImage] = useState([]);

  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemeImage(data.data.memes);
    }
    getMemes();
  }, []);

  function getImage() {
    const randomNumber = Math.floor(Math.random() * allMemeImage.length);
    const url = allMemeImage[randomNumber].url;
    setMeme((prevMeme) => {
      return { ...prevMeme, randomImage: url };
    });
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }
  return (
    <div className="form">
      <input
        type="text"
        placeholder="Shut up"
        name="topText"
        value={meme.topText}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        placeholder="and take my money"
        name="bottomText"
        value={meme.bottomText}
        onChange={handleChange}
      ></input>
      <button onClick={getImage}>Get a new meme image 🖼</button>
      <div className="meme">
        <img src={meme.randomImage} width="100%" alt="memeImage" />
        <h2>{meme.topText}</h2>
        <h2>{meme.bottomText}</h2>
      </div>
    </div>
  );
}
