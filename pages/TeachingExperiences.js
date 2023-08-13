import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TeachingExperience() {
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
      id="TeachingExperiences"
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
          Teaching Experiences
        </Typography>

        <Typography
          className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          variant="h6"
          py={2}
          px={2}
        >
          Undergraduate level courses
        </Typography>
        <Typography
          className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}
        >
          • Electric Machinery (I)
        </Typography>
        <Typography
          className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}
        >
          {" "}
          • Power System Analysis (I & II){" "}
        </Typography>
        <Typography
          className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}
        >
          • Substation Design{" "}
        </Typography>
        <Typography
          className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}
        >
          • Linear Control System Laboratory
        </Typography>

        <Typography
          className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          variant="h6"
          py={2}
          px={2}
        >
          {" "}
          Graduate level courses
        </Typography>

        <Typography
          className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}
        >
          • Power System Operation{" "}
        </Typography>
        <Typography
          className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}
        >
          • Power System Reliability
        </Typography>
        <Typography
          className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}
        >
          • Power Systems Dynamic{" "}
        </Typography>
        <Typography
          className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}
        >
          • Reactive Power Control
        </Typography>
      </div>
    </section>
  );
}
