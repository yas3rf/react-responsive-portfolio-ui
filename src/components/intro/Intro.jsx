import "./intro.scss";
import {init} from "ityped";
import { useEffect, useRef} from "react";
export default function Intro() {

  const textRef = useRef();

  useEffect (() => {

    init(textRef.current,{
      showCursor: false,
      backDelay:1500,
      backSpeed:50,
      strings:["Developer", "Designer", "Entertainer"]
    })

  }, []);

  return (
    <div className="intro" id="intro">
       <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
       </div>
       <div className="right">
        <div className="wrapper">
          <h2>Hi Dear, I'm</h2>
          <h1>Yaser Faqiri</h1>
          <h3>Freelance <span ref={textRef}></span></h3>
        </div>
        <a href="#protfolio">
          <img src="assets/down.png" alt="" />
        </a>
       </div>
    </div>
  )
}

