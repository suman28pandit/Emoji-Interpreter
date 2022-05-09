import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑":
    "annoyance" /** add some more to show how the app now expands when there's new data */
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setmeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    console.log(meaning);

    if (meaning === "undefined") {
      meaning = "We don't have this in our database";
    }
    setmeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1> Emoji Interpreter </h1>
      <input onChange={emojiInputHandler}></input>
      <h2> {meaning}</h2>
      <h3> Emojis We Know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "larger",
              padding: "0.5 rem 1 rem",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
