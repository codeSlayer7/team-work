import React from "react";
import Sea from "./../../../images/sea.png";
import styles from "./index.module.css";
import Cross from "./../../../images/cross.png";

function Hero() {
  return (
    <div class={styles.intro}>
      <img className={styles.image} src={Sea} alt="" />
      <h1 className={styles.intro_text1}>
        Making brands stand out is our obsession
      </h1>
      <div className={styles.line}></div>
      <h2 className={styles.intro_text2}>Let us help your brand stand out.</h2>
      <div className={styles.intro_inner}>
        <div className={styles.intro_inner__text}>
          <div className={styles.intro_inner__images}>
            <img src={Cross} alt="" />
          </div>
          <h3>
            Minimalist is a full-service digital creative agency located in
            Ontorio Canada. We focus on design, consulting, technology, and
            photography. We’ve been building unique digital products, platforms,
            and experiences for the past 6 years. Let us help your company grow.
          </h3>
          <div className={styles.button}>Get in Touch</div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
