import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Mobility() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-out",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <section
      id="Mobility"
      className=" bg-slate-700  leading-relaxed h-max py-16"
    >
      <div data-aos="fade-down">
        <Typography
          className=" leading-relaxed pt"
          color="white"
          variant="h5"
          py={3}
          px={3}
        >
          Mobility
        </Typography>

        <Typography
          className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}
        >
          Having 4-year residence card
        </Typography>
      </div>
    </section>
  );
}
