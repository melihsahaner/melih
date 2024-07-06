import * as React from "react";
import melih from "../images/resim.png";

export default function Blog() {
  return (
    <div className="flex flex-col justify-end items-center px-16 pt-20 pb-4 text-black bg-neutral-100 max-md:px-5">
      <div className="flex flex-col items-center mt-9 w-full max-w-[1046px] max-md:max-w-full">
        <div className="blog-title text-2xl font-medium text-center">
          UX/UI Case Study — Improving Ryanair’s Online Flight Booking Experience
        </div>
        <div className="blog-subtitle mt-6 text-lg max-md:max-w-full text-center">
          Turning my first take-home assignment into a case study.
        </div>
        <div className="flex items-center mt-9">
          <img 
            loading="lazy"
            srcSet={melih}
            className="rounded-full"
            style={{ width: "74px", height: "74px", marginRight: "10px" }}
          />
          <div>
            <div className="author-name text-2xl font-medium">Melih Şahaner</div>
            <div className="author-title mt-1 text-lg">UI/UX Designer</div>
          </div>
        </div>

        <hr className="mt-10 border-t-2 border-gray-300 w-full" />

        <div className="spoiler-alert mt-10 text-2xl font-medium text-center max-md:max-w-full">
          Spoiler alert: I didn’t get the job.
        </div>

        <div className="shrink-0 mt-10 max-w-full rounded-2xl bg-white bg-opacity-80 h-[421px] w-[972px]">
          <img 
            loading="lazy"
            srcSet={melih}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="blog-content mt-10 text-lg max-md:max-w-full text-center">
          After completing my UX/UI Design Bootcamp at Ironhack, I’ve been fully
          immersed in job hunting (and moving apartments, yay! 🙃), while also
          wanting to apply my design skills to new projects.
          <br />
          A couple of months ago, I interviewed for a UX/UI designer role,
          going through an initial chat with HR, a follow-up with the Head of
          UX, and a final take-home assignment.
        </div>

        <div className="shrink-0 mt-10 max-w-full rounded-2xl bg-white bg-opacity-80 h-[421px] w-[972px]">
          <img 
            loading="lazy"
            srcSet={melih}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="blog-content mt-10 text-lg max-md:max-w-full text-center">
          Following the initial interview, I was excited to take on the challenge
          of a take-home assignment. The task required redesigning a crucial part
          of the flight booking process, focusing on user experience and interface
          improvements.
          <br />
          Throughout the assignment, I applied various UX/UI principles I had learned
          during my bootcamp. I conducted user research, created wireframes, and
          developed high-fidelity prototypes to showcase my design solutions.
        </div>

        <div className="shrink-0 mt-10 max-w-full rounded-2xl bg-white bg-opacity-80 h-[421px] w-[972px]">
          <img 
            loading="lazy"
            srcSet={melih}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="blog-content mt-10 text-lg max-md:max-w-full text-center">
          Despite my efforts, I didn't secure the position. However, the experience
          was incredibly valuable. It helped me refine my design process, improve
          my skills, and better understand what companies are looking for in a UX/UI
          designer.
          <br />
          I'm continuing my job search with renewed confidence and a portfolio that
          reflects my growth and capabilities. Each interview and assignment brings
          me closer to my goal of landing a UX/UI designer role where I can make a
          significant impact.
        </div>
      </div>
    </div>
  );
}
