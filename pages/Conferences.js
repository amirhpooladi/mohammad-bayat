import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Conferences() {
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
    <section id="Conferences" className=" bg-slate-700  leading-relaxed h-max  ">
      <div data-aos="fade-down">
        <Typography
          className=" leading-relaxed pt"
          color="white"
          variant="h5"
          py={3}
          px={3}
        >
          Conferences
        </Typography>

        
         
        
          <Typography  className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2} >
            • A. Farahani, A. H. Abolmasoumi, and M. Bayat, “Fusion Estimation
            of Local Bus Frequency for Robust Wide Area Power System
            Stabilizer”, 7th International Conference on Control,
            Instrumentation and Automation (ICCIA), Tabriz, Iran, 2021.
          </Typography>
          <Typography  className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2} >
            {" "}
            • A. Farahani, A. H. Abolmasoumi, and M. Bayat, L. Mili, “A Fast
            Outlier-robust Fusion Estimator for Local Bus Frequency Estimation
            in Power Systems”, 10th Smart Grid Conference (SGC), Kashan, Iran,
            2020.
          </Typography>
          <Typography  className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2} >
            {" "}
            • M. Bayat, A. A. Ghadimi, and M. Goudarzi, “Determining the share
            of exchange points from the power losses in Bakhtar Regional Power
            Grid”, 26th Iranian Conference on Electrical Engineering (ICEE),
            Sadjad University of Technology, Mashhad, Iran, 2018 (in Persian).
          </Typography>
          <Typography  className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}>
            {" "}
            • A. A. Ghadimi, M. Bayat, and A. Mahdavian, “Microgrid small‐signal
            stability analysis considering dynamic load model”, 4th
            international conference of knowledge and technology of mechanical
            and electrical engineering of Iran, Tehran, Iran, 2021 (in Persian).
          </Typography>
          <Typography  className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}>
            {" "}
            • E. Nayyeri, M. Bayat, “Analysis of IPFC impacts on voltage profile
            improvement of power system”, 1st national conference on sustainable
            development in science, engineering and Iranian culture, Tehran,
            Iran, 2018 (in Persian).
          </Typography>
          <Typography  className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}>
            {" "}
            • E. Nayyeri, M. Bayat, “Optimal UPFC placement for voltage profile
            improvement using Harmony Search algorithm”, 1st national conference
            on sustainable development in science, engineering and Iranian
            culture, Tehran, Iran, 2018 (in Persian).
          </Typography>
          <Typography  className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2} >
            {" "}
            • M. Bayat, H. K. Karegar, “Predictive control of wind energy
            conversion system,” 1st International Conference on the Developments
            in Renewable Energy Technology (ICDRET), Dehaka, Bangladesh, 2009.
          </Typography>
          <Typography  className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2} >
            • M. Bayat, H. K. Karegar, and M. Sedighizadeh,“ Impacts of wind
            energy conversion systems based on doubly fed induction generator on
            power quality,” International Universities’ Power Engineering
            Conference (UPEC), Glasgow, Scotland, 2009.
          </Typography>
       
      </div>
    </section>
  );
}
