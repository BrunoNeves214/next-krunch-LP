"use client";

import { Title } from "@/components";
import { Member } from "@/components";

const Team = () => {
  return (
    <div id="team" className="flex flex-col gap-10 items-center mb-32 px-7">
      {/* title */}
      <Title
        title={"awesome team"}
        phrase={"Setibulum rutrum quam vitae fringilla tincidunt"}
      />

      {/* team galery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-[1280px]">
        <Member
          src={"/team-1.jpg"}
          alt={"team"}
          member={"michael thomas"}
          job={"creative director"}
        />
        <Member
          src={"/team-2.jpg"}
          alt={"team"}
          member={"alexa meyer"}
          job={"graphic designer"}
        />
        <Member
          src={"/team-3.jpg"}
          alt={"team"}
          member={"jeffrey steward"}
          job={"web developer"}
        />
        <Member
          src={"/team-4.jpg"}
          alt={"team"}
          member={"bruce moore"}
          job={"web designer"}
        />
      </div>
    </div>
  );
};

export default Team;
