import React from "react";
import styles from "./index.module.css";
import Set_target from "./../../../images/set_target.svg";
import Design_solution from "./../../../images/design_solution.svg";
import Track_the__progress from "./../../../images/track_the__progress.svg";

function Brands() {
  return (
    //   <section class="section">
    <div class={styles.container}>
      <div class="section__header">
        <h3 className={styles.title}>How we make brands thrive</h3>
      </div>

      <div class="section__about">
        <div class={styles.section__about_item}>
          <img className={styles.image} src={Set_target} alt="" />
          <div class="section__about_card">
            <div class="about__card">
              <h2 class="about__card_title">SET a target</h2>
              <p class="about__card_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </div>
        </div>
        <div class="section__about_item">
          <img className={styles.image} src={Design_solution} alt="" />
          <div>
            <div class="about__card">
              <h2 class="about__card_title">design a solution</h2>
              <p class="about__card_text">
                Duis cursus, mi quis viverra ornare, eros dolor interdum nulla,
                ut commodo diam libero vitae erat.
              </p>
            </div>
          </div>
        </div>
        <div class="section__about_item">
          <img className={styles.image} src={Track_the__progress} alt="" />
          <div>
            <div class="about__card">
              <h2 class="about__card_title">track the progress</h2>
              <p class="about__card_text">
                Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
                Nunc ut sem vitae risus tristique posuere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    /* </section> */
  );
}

export default Brands;
