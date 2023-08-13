import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Education() {
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
      id="Education"
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
          Education
        </Typography>

        <Typography
          className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}
        >
          {" "}
          2010-2015
        </Typography>
        <Typography
          className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}
        >
          Ph.D. in Electrical Engineering (Power Systems), Shahid Beheshti
          University (Iran) Thesis title: “A Central Control Framework for
          Frequency and Voltage of the Smart Grid using Resources and Loads at
          Distribution Level” (Grade: 20/20) Thesis supervisor: Professor Keyhan
          Sheshyekani/Professor Alireza Rezazadeh
        </Typography>
        <Typography
          className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}
        >
          {" "}
          2007-2009
        </Typography>
        <Typography
          className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}
        >
          M.Sc. in Electrical Engineering (Power Systems), Shahid Beheshti
          University (Iran) Thesis title: “Maximum Power Point Tracking of
          Variable Speed Wind Turbines though Neural Network-based Adaptive
          Control” (Grade: 19/20)
        </Typography>
        <Typography
          className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}
        >
          2002-2007
        </Typography>
        <Typography
          className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}
        >
          B.Sc. in Biomedical Engineering, Amirkabir University of
          Technology-Tehran Polytechnic (Iran) Thesis title: “Movement Intention
          Recognition from EEG Signals using Neural Networks” (Grade: 19/20)
        </Typography>
      </div>
    </section>
  );
}
