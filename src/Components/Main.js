import React from "react";
import '../App.css';

export default function Main(props) {
  return (
    <main className={props.darkMode ? "dark" : ""}>
        <h1>Fun Facts About React</h1>
        <ul>
            <li>Was First Released in 2013.</li>
            <li>Was Orginally created By Gordan walke</li>
            <li>Has Well over 100K on Github</li>
            <li>Is Maintained by Facebok</li>
            <li>Powers thausands of enterprise</li>
        </ul>
    </main>
  )
}
