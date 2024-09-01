import React from "react";

export default function About({ url }) {
  return (
    <div>
      <aside>
        <img src={url} alt="blog logo"></img>
        <p>Personal blog by Dan Abramov</p>
        <p>I explain with words and code</p>
      </aside>
    </div>
  );
}
