import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProfessionalAppointments() {
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
    <section id="ProfessionalAppointments" className=" bg-slate-700  leading-relaxed h-max  ">
      <div data-aos="fade-down">
        <Typography
          className=" leading-relaxed pt"
          color="white"
          variant="h5"
          py={3}
          px={3}
        >
          PROFESSIONAL APPOINTMENTS
        </Typography>

        <Typography
          className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}
        >
          2016-present
        </Typography>
        <Typography
          className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}
        >
          Assistant Professor of Department of Electrical Engineering Arak
          University · Full-time Taught a total of 40+ undergraduate and 20+
          postgraduate courses. Supervised/advised 15 and 14 B.Sc. and M.Sc.
          theses, respectively.
        </Typography>
        <Typography
          className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}
        >
          {" "}
          2010-2012{" "}
        </Typography>
        <Typography
          className=" leading-8  space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}
        >
          Electrical Engineer MTS Group · Full-time Mainly focused on substation
          design, and distribution systems.
        </Typography>
      </div>
    </section>
  );
}
