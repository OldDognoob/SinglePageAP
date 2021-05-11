import React from "react";

const Layout = (props) => (
  <div className="bg-pink-500 border border-black m-5">
    <nav>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
    {props.children}
  </div>
);

export { Layout };
