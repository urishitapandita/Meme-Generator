import React from "react";
import icon from "../../src/icon.png";
import "../../src/style.css";

export default function Header() {
  return (
    <header className="header">
      <img src={icon} className="header--image" />
      <h2 className="header--title">Meme Generator</h2>

    </header>
  );
}
