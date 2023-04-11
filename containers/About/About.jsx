"use client";
import { Title } from "@/components";

const About = () => {
  return (
    <div id="about" className="flex flex-col items-center mb-32 mx-10 gap-5">
      {/* title */}
      <Title
        title={"about us"}
        phrase={"Setibulum rutrum quam vitae fringilla tincidunt"}
      />

      {/* about us */}
      <div className="flex flex-col justify-center items-center lg:flex-row gap-10 max-w-[1280px]">
        <div className="flex-1 flex flex-col gap-5 lg:gap-7">
          <p>
            Lorem ipsum dolor sitamet, consectetur adipisicing elit, seddo
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quisus nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p>
            Excepteur sint occaecat cupidatat none proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum voluptate dolor.
          </p>
        </div>

        <img src="/home-about.jpg" alt="" />
      </div>
    </div>
  );
};

export default About;
