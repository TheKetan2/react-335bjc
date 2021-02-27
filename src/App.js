import React, { useState } from "react";
import "./style.css";
const article = {
  title: "Read More Read Less Button",
  disc:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta."
};

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>{article.title}</h1>
      <p>{show ? article.disc : article.disc.substr(0, 100) + "..."}</p>
      <button onClick={() => setShow(!show)}>
        {!show ? "Read More" : "Read Less"}
      </button>
    </div>
  );
}
