import React from "react";

export default function Footer() {
  return (
    <div className="flex border-2 border-black p-4">
      <div className="border-2 border-black w-1/2">
        <h1>PubQuiz.si</h1>
        <p>pubqiuz s.p.</p>
        <p>Juretov naslov 16</p>
        <p>5800 Ajdovscina</p>
        <p>Slovenija</p>
      </div>
      <div className="border-2 border-black w-1/2">
        <h1>Bliznjice</h1>
        <p>POGOJI POSLOVANJA</p>
        <p>VARSTVO OSEBNIH PODATKOV</p>
      </div>
    </div>
  );
}
