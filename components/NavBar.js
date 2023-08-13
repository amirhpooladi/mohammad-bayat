import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Link from "next/link";
import { Button, ButtonGroup, List, ListItemButton } from "@mui/material";
import "animate.css";

export default function NavBar() {
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
    <>
      <div data-aos="zoom-in">
        <List className="  flex  text-white rounded-lg justify-around lg:flex lg:flex-row   bg-slate-800  px-10    bg-opacity-30 ">
          <ButtonGroup variant="text">
            <div>
              <Link href="/#aboutMe">
                <ListItemButton
                  selected={false}
                  size="small"
                  className=" text-green-600 rounded-lg transition  ease-in-out delay-150 hover:scale-125 duration-200 hover:text-green-600"
                >
                  Home
                </ListItemButton>
              </Link>
              <Link href="/Education/#Education">
                <ListItemButton
                  size="small"
                  className=" rounded-lg transition  ease-in-out delay-150 hover:scale-125 duration-200 hover:text-green-600 "
                >
                  Education
                </ListItemButton>
              </Link>
              <Link href="/ProfessionalAppointments/#ProfessionalAppointments">
                <ListItemButton
                  size="small"
                  className=" rounded-lg transition  ease-in-out delay-150 hover:scale-125 duration-200 hover:text-green-600 "
                >
                  Professional appointments
                </ListItemButton>
              </Link>
              <Link href="/Publication/#Publications">
                <ListItemButton
                  selected={false}
                  size="small"
                  className="  rounded-lg transition  ease-in-out delay-150 hover:scale-125 duration-200 hover:text-green-600"
                >
                  Publication
                </ListItemButton>
              </Link>
              <Link href="/Conferences/#Conferences">
                <ListItemButton
                  selected={false}
                  size="small"
                  className="  rounded-lg transition  ease-in-out delay-150 hover:scale-125 duration-200 hover:text-green-600"
                >
                  Conferences
                </ListItemButton>
              </Link>
              <Link href="/TeachingExperiences/#TeachingExperiences">
                <ListItemButton
                  selected={false}
                  size="small"
                  className="  rounded-lg transition  ease-in-out delay-150 hover:scale-125 duration-200 hover:text-green-600"
                >
                  Teaching experiences
                </ListItemButton>
              </Link>
            </div>
            <div>
              <Link href="/ResearchExperiences/#ResearchExperiences">
                <ListItemButton
                  size="small"
                  className="  rounded-lg transition  ease-in-out delay-150 hover:scale-125 duration-200 hover:text-green-600  "
                >
                  Research experience
                </ListItemButton>
              </Link>
              <Link href="/AdditionalActivities/#AdditionalActivities">
                <ListItemButton
                  selected={false}
                  size="small"
                  className="  rounded-lg transition  ease-in-out delay-150 hover:scale-125 duration-200 hover:text-green-600"
                >
                  Additional Activities
                </ListItemButton>
              </Link>
              <Link href="/Skills/#Skills">
                <ListItemButton
                  selected={false}
                  size="small"
                  className="  rounded-lg transition  ease-in-out delay-150 hover:scale-125 duration-200 hover:text-green-600"
                >
                  Skills
                </ListItemButton>
              </Link>
              <Link href="/Languages/#Languages">
                <ListItemButton
                  selected={false}
                  size="small"
                  className="  rounded-lg transition  ease-in-out delay-150 hover:scale-125 duration-200 hover:text-green-600"
                >
                  Languages
                </ListItemButton>
              </Link>
              <Link href="/Mobility/#Mobility">
                <ListItemButton
                  selected={false}
                  size="small"
                  className=" rounded-lg transition  ease-in-out delay-150 hover:scale-125 duration-200 hover:text-green-600"
                >
                  Mobility
                </ListItemButton>
              </Link>
              <Link href="/Images/#Images">
                <ListItemButton
                  selected={false}
                  size="small"
                  className="  rounded-lg transition  ease-in-out delay-150 hover:scale-125 duration-200 hover:text-green-600"
                >
                  Images
                </ListItemButton>
              </Link>
            </div>
          </ButtonGroup>
        </List>
      </div>
    </>
  );
}
