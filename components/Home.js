import React, { useEffect } from "react";
import { Typography, Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { EmailSharp, Phone } from "@mui/icons-material";

import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
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
    <section id="aboutMe" className=" bg-slate-700  leading-relaxed h-max  ">
      <div data-aos="fade-down">
        <Typography
          className=" leading-relaxed pt"
          color="white"
          variant="h5"
          py={3}
          px={3}
        >
          About <span className=" text-green-600"> Me</span>{" "}
        </Typography>

        <Typography
          className=" leading-relaxed pt"
          color="white"
          variant="h6"
          py={3}
          px={3}
        >
          Name : Mohammad Bayat
        </Typography>
        <Typography
          className=" leading-relaxed pt"
          color="white"
          variant="h6"
          py={3}
          px={3}
        >
          Current position : Assistant Professor
        </Typography>
        <Typography
          className=" leading-relaxed pt"
          color="white"
          variant="h6"
          py={3}
          px={3}
        >
          Date of Birth : Dec 29th , 1984
        </Typography>
        <Typography
          className=" leading-relaxed pt"
          color="white"
          variant="h6"
          py={3}
          px={3}
        >
          Language : English , Persian
        </Typography>
        <Typography
          className=" leading-relaxed pt"
          color="white"
          variant="h6"
          py={3}
          px={3}
        >
          <a href="mailto:m-baiat@araku.ac.ir">
            <EmailSharp /> m-baiat@araku.ac.ir
          </a>
        </Typography>
        <Typography
          className=" leading-relaxed pt"
          color="white"
          variant="h6"
          py={3}
          px={3}
        >
          <a href="tel:(+33) 06 35 26 23 51r">
            <Phone /> (+33) 06 35 26 23 51
          </a>
        </Typography>

        <a href="BAYAT_Mohammad-CV-final.docx" download>
          <Button className=" hover: bg-slate-700 ">
            <FileDownloadIcon
              color=" text-green-600"
              className=" text-3xl m-3 animate__animated animate__bounce animate__infinite animate__slow "
            />

            <span className=" text-green-600">resume</span>
          </Button>
        </a>
      </div>
      <Typography
        className=" leading-relaxed pt bg-black"
        color="white"
       variant="h5"
        py={3}
        px={3}
      >
      A Summary About Me
      </Typography>

      <Typography
        className=" leading-relaxed pt"
        color="white"
       
        py={3}
        px={3}
      >
        Lecturer and researcher with 7+ years of experience teaching courses in
        both undergraduate and postgraduate levels. Supervised/Advised 15 B.Sc.
        theses, and 14 M.Sc. theses. Published over 15 articles in peer-reviewed
        journals. In 2016, Mohammad joined the Department of Electrical
        Engineering, Arak University, Arak, Iran, where he is currently an
        Assistant Professor. His main areas of interest include the power system
        modeling and simulation, operation, planning, and management of smart
        micro-grids, integration of renewable energy resources, and numerical
        methods for electrical systems.
      </Typography>
      <Typography
        className=" leading-relaxed pt"
        color="white"
       
        py={3}
        px={3}
      >
        Mohammad is keen to join in academic position that will challenge him
        problem-solving skills and allow her to continue to develop her
        knowledge and potential.
      </Typography>
    </section>
  );
}
