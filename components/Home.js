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

          <Typography  className=" leading-relaxed pt"
          color="white"
          variant="h6"
          py={3}
          px={3}>Name : Mohammad Bayat</Typography>
          <Typography  className=" leading-relaxed pt"
          color="white"
          variant="h6"
          py={3}
          px={3}>Current position : Assistant Professor</Typography>
          <Typography  className=" leading-relaxed pt"
          color="white"
          variant="h6"
          py={3}
          px={3}>Date of Birth : Dec 29th , 1984</Typography>
          <Typography  className=" leading-relaxed pt"
          color="white"
          variant="h6"
          py={3}
          px={3}>Language : English , Persian</Typography>
          <Typography  className=" leading-relaxed pt"
          color="white"
          variant="h6"
          py={3}
          px={3}>
            <a href="mailto:m-baiat@araku.ac.ir">
              <EmailSharp /> m-baiat@araku.ac.ir
            </a>
          </Typography>
          <Typography  className=" leading-relaxed pt"
          color="white"
          variant="h6"
          py={3}
          px={3}>
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
    </section>
  );
}
