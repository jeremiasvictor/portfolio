import React from "react";
import styles from "./Home.module.css";
import { MdArrowDropDown, MdBrightness2, MdBrightness5 } from "react-icons/md";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <>
      <div className={styles.headerTextGroup}>
        <p>jeremias marinho | 2026</p>
        <p>hope you enjoy it</p>
      </div>
      <h1 className={styles.title}>portfólio.</h1>

      <div className={styles.tagGroup}>
        <p className={styles.tag}>UI design</p>
        <p className={styles.tag}>design gráfico</p>
        <p className={styles.tag}>social media</p>
        <p className={styles.tag}>identidades visuais</p>
      </div>

      <div className={styles.sliderContainer}>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>

      <div className={styles.homeButtonsGroup}>
        <div className={styles.homeButton}>
          idioma <MdArrowDropDown />
        </div>
        <div className={styles.homeButton}>
          <MdBrightness5 />
        </div>
      </div>
    </>
  );
}

export default Home;
