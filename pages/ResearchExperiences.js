import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ResearchExperiences() {
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
      id="ResearchExperiences"
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
          Research Experiences
        </Typography>

        <Typography
          className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}
        >
          • Loss allocation of in a typical distribution feeder of Arak
          distribution network. (2018-2019), in associated with Arak
          Distribution Company
        </Typography>
        <Typography
          className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}
        >
          • Determining the share of exchange points from the power losses in
          Bakhtar Regional Power Grid (BRPG) through power tracing studies.
          (2016-2018), in associated with Bakhtar Regional Power Grid Company.
        </Typography>
        <Typography
          className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}
        >
          • Reviewer of the project entitled “Optimal allocation of power
          quality meters in order to determine the source and share of power
          quality pollutions”, (2020), in associated with Bakhtar Regional Power
          Grid Company.
        </Typography>
      </div>
    </section>
  );
}
