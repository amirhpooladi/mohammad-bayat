import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import "../styles/globals.css";
import Layout from "../components/Layout";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { Button } from "@mui/material";
import Header from "../components/Header";
import { Link } from "react-scroll";
import "aos/dist/aos.css";
import "animate.css";
import AOS from "aos";
import { LinkedIn } from "@mui/icons-material";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-out",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  const [scrollToTop, setScrollToTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      window.pageYOffset > 300 ? setScrollToTop(true) : setScrollToTop(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <Layout>
        <div className="  top-0 bg-slate-800 bg-opacity-90 rounded-3xl">
          <Header />
        </div>
        <Component {...pageProps} />

        {scrollToTop ? (
          <Link
            className=" hover:text-3xl"
            to="header"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
          >
            <Button onClick={handleScrollToTop}>
              <ArrowCircleUpIcon
                fontSize="large"
                className=" fixed bottom-10 font-extrabold  text-green-600"
              />
            </Button>
          </Link>
        ) : (
          ""
        )}
      </Layout>
      <a
        href="https://www.linkedin.com/in/amirhossein-pooladi-6b4679277/"
        target="_blank"
      >
        <Typography
          className=" flex justify-center bg-black rounded-lg py-3  "
          color="white"
          variant="body1"
          fontFamily={"arial"}
        >
          Developed By AmirHossein Pooladi <LinkedIn />
        </Typography>
      </a>
    </>
  );
}

export default MyApp;
