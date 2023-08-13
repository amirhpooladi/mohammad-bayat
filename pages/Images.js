import Ract, { useEffect } from "react";

import Image from "next/image";
import { Typography } from "@mui/material";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Images = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-out",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const image = [
    {
      id: 1,
      src: "1.jpg",
      description: "Substation Design Class - Arak University 2023",
    },
    { id: 2, src: "2.jpg" },
    { id: 3, src: "3.jpg" },
  ];
  return (
    <>
      <section id="Images">
        <Typography
          className=" leading-relaxed pt"
          color="white"
          variant="h5"
          py={3}
          px={3}
        >
          Images
        </Typography>

        {image.map((item) => (
          <div data-aos="fade-down" key={item.id}>
            <Typography
              className=" leading-relaxed pt"
              color="white"
              variant="body1"
              py={3}
              px={3}
            >
              {" "}
              {item.description}{" "}
            </Typography>
            <Image
              id="images"
              className=" flex flex-row py-3 w-auto"
              alt="pic"
              src={item.src}
              width={200}
              height={100}
            />
          </div>
        ))}
      </section>
    </>
  );
};

export default Images;
