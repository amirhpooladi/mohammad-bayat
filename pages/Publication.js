import React, { useEffect } from "react";
import { Typography } from "@mui/material";

import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Publication() {
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
    <section id="Publications" className=" bg-slate-700  leading-relaxed h-max  ">
      <div data-aos="fade-down">
        <Typography
          className=" leading-relaxed pt"
          color="white"
          variant="h5"
          py={3}
          px={3}
        >
          publication
        </Typography>

        <Typography
          className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}
        >
          • M. Bayat, M. M. Koushki, A. A. Ghadimi, M. Tostado-Véliz, and F.
          Jurado, “Comprehensive enhanced Newton Raphson approach for power flow
          analysis in droop-controlled islanded AC microgrids”, International
          Journal of Electrical Power & Energy Systems, vol. 143, pp. 108493,
          2022.{" "}
        </Typography>
        <Typography
          className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}
        >
          • P. Sheikhzadehbaboli, A. Samimi, M. Ebadi, M. Bayat, and A.
          Pirayesh, “Frequency control in standalone renewable based-microgrids
          using steady state load shedding considering droop characteristic”,
          International Journal of Electrical Power & Energy Systems, vol. 142,
          pp. 108351, 2022.
        </Typography>
        <Typography
          className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}
        >
          • M. Tostado-Véliz, A. A. Ghadimi, M. R. Miveh, M. Bayat, and F.
          Jurado, “Uncertainty-aware energy management strategies for
          PV-assisted refuelling stations with onsite hydrogen generation”,
          Journal of Cleaner Production, vol. 365, pp. 132869, 2022.{" "}
        </Typography>
        <Typography
          className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}
        >
          {" "}
          • S. A. A. Matin, S. A. Mansouri, M. Bayat, A. R. Jordehi, and P.
          Radmehr, “A multi-objective bi-level optimization framework for
          dynamic maintenance planning of active distribution networks in the
          presence of energy
        </Typography>
        <Typography
          className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}
        >
          storage systems”, Journal of Energy Storage vol. 52, pp. 104762, 2022.
          • A. A. Ghadimi, M. Amani, M. Bayat, S. Ahmadi, M. R. Miveh, and F.
          Jurado, “Stochastic transmission expansion planning in the presence of
          wind farms considering reliability and N-1 contingency using grey wolf
          optimization technique”, Electrical Engineering, vol. 104, no. 2, pp.
          727-740, 2022.
        </Typography>
        <Typography
          className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}
        >
          {" "}
          • M. Tostado‐Véliz, M. Bayat, A. A. Ghadimi, and F. Jurado, “A novel
          Newton‐like method with high convergence rate for efficient power‐flow
          solution in isolated microgrids”, IET Generation, Transmission &
          Distribution, 2022.
        </Typography>
        <Typography
          className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}
        >
          {" "}
          • M. Bayat, K. Ghaseminezhad, and A. A. Ghadimi, “An efficient
          iterative approach for power flow solution of droop-controlled
          islanded AC microgrids through conventional methods”, International
          Journal of Electrical Power & Energy Systems, vol. 130, pp. 106962,
          2021.
        </Typography>
        <Typography
          className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}
        >
          {" "}
          • M. Tostado-Véliz, M. Bayat, A. A. Ghadimi, and F. Jurado, “Home
          energy management in off-grid dwellings: Exploiting flexibility of
          thermostatically controlled appliances”, Journal of Cleaner
          Production, vol. 310, pp. 127507, 2021.
        </Typography>
        <Typography
          className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}
        >
          {" "}
          • A. Mahdavian, A. A. Ghadimi, and M. Bayat, “Microgrid small‐signal
          stability analysis considering dynamic load model”, IET Renewable
          Power Generation, vol. 15, no. 13, pp. 2799-2813, 2021.
        </Typography>
        <Typography
          className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}
        >
          {" "}
          • M. Ebadi, M. Bayat, and H. Asadi, “Evaluating maximum permissible
          feeder current in capacitive compensated harmonic polluted networks
          introducing Apparent RMS Current Ratio Index (ACRI)”, Electric Power
          Systems Research, vol. 187, pp. 106511, 2020.
        </Typography>
        <Typography
          className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}
        >
          {" "}
          • K. Sheshyekani, I. Jendoubi, M. Teymuri, M. Hamzeh, H. Karimi, and
          M. Bayat, “Participation of distributed resources and responsive loads
          to voltage unbalance compensation in islanded microgrids”, IET
          Generation, Transmission & Distribution, vol. 13, no. 6, pp. 858- 867,
          2019.
        </Typography>
        <Typography
          className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}
        >
          • M. Bayat, K. Sheshyekani, M. Hamzeh, and A. Rezazadeh, “Coordination
          of Distributed Energy Resources and Demand Response for Voltage and
          Frequency Support of MV Microgrids”, IEEE Transactions on Power
          Systems, vol. 31, no. 2, pp. 1506- 1516, March 2016.
        </Typography>
        <Typography
          className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}
        >
          • M. Bayat, K. Sheshyekani, and A. Rezazadeh, “A unified framework for
          participation of responsive end-user devices in voltage and frequency
          control of the smart grid”, IEEE Transactions on Power Systems, vol.
          30, no. 3, pp. 1369-1379, May 2015.
        </Typography>
        <Typography
          className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}
        >
          {" "}
          • A. Rezazadeh, M. Sedighizadeh, and M. Bayat, “Neural Inverse Control
          of Wind Energy Conversion Systems”, International Review of Electrical
          Engineering (IREE), vol. 6, no. 3, pp. 1491-1502, 2011
        </Typography>
        <Typography
          className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}
        >
          {" "}
          • M. Bayat, M. Sedighizadeh, and A. Rezazadeh,“ Wind energy conversion
          systems control using inverse neural model algorithm”, International
          Journal of Engineering and Applied Science (IJEAS), vol. 2, no. 3, pp.
          40-46, 2010. CONFERENCESS
        </Typography>
        <Typography
          className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}
        >
          • A. Farahani, A. H. Abolmasoumi, and M. Bayat, “Fusion Estimation of
          Local Bus Frequency for Robust Wide Area Power System Stabilizer”, 7th
          International Conference on Control, Instrumentation and Automation
          (ICCIA), Tabriz, Iran, 2021.
        </Typography>
        <Typography
          className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}
        >
          {" "}
          • A. Farahani, A. H. Abolmasoumi, and M. Bayat, L. Mili, “A Fast
          Outlier-robust Fusion Estimator for Local Bus Frequency Estimation in
          Power Systems”, 10th Smart Grid Conference (SGC), Kashan, Iran, 2020.
        </Typography>
        <Typography
          className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}
        >
          • M. Bayat, A. A. Ghadimi, and M. Goudarzi, “Determining the share of
          exchange points from the power losses in Bakhtar Regional Power Grid”,
          26th Iranian Conference on Electrical Engineering (ICEE), Sadjad
          University of Technology, Mashhad, Iran, 2018 (in Persian).
        </Typography>
        <Typography
          className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}
        >
          {" "}
          • A. A. Ghadimi, M. Bayat, and A. Mahdavian, “Microgrid small‐signal
          stability analysis considering dynamic load model”, 4th international
          conference of knowledge and technology of mechanical and electrical
          engineering of Iran, Tehran, Iran, 2021 (in Persian).
        </Typography>
        <Typography
          className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}
        >
          {" "}
          • E. Nayyeri, M. Bayat, “Analysis of IPFC impacts on voltage profile
          improvement of power system”, 1st national conference on sustainable
          development in science, engineering and Iranian culture, Tehran, Iran,
          2018 (in Persian).
        </Typography>
        <Typography
          className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}
        >
          {" "}
          • E. Nayyeri, M. Bayat, “Optimal UPFC placement for voltage profile
          improvement using Harmony Search algorithm”, 1st national conference
          on sustainable development in science, engineering and Iranian
          culture, Tehran, Iran, 2018 (in Persian).
        </Typography>
        <Typography
          className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}
        >
          {" "}
          • M. Bayat, H. K. Karegar, “Predictive control of wind energy
          conversion system,” 1st International Conference on the Developments
          in Renewable Energy Technology (ICDRET), Dehaka, Bangladesh, 2009.
        </Typography>
        <Typography
          className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}
        >
          {" "}
          • M. Bayat, H. K. Karegar, and M. Sedighizadeh,“ Impacts of wind
          energy conversion systems based on doubly fed induction generator on
          power quality,” International Universities’ Power Engineering
          Conference (UPEC), Glasgow, Scotland, 2009.
        </Typography>
      </div>
    </section>
  );
}
