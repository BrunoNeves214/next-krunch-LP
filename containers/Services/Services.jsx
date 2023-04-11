"use client";
import { Service } from "@/components";
import { Title } from "@/components";
import { TfiAndroid } from "react-icons/tfi";
import { BsCameraFill, BsCodeSlash } from "react-icons/bs";
import { MdOutlineDesktopMac } from "react-icons/md";
import { FaMagic } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

const Services = () => {
  return (
    <div id="services" className="flex flex-col items-center gap-7 px-7 mb-32">
      {/* title */}
      <Title
        title={"service"}
        phrase={"Scope of our featured premium services"}
      />

      {/* services cases */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1280px]">
        <Service
          icon={<MdOutlineDesktopMac size={30} className="text-blue-500" />}
          title={"web design"}
          phrase={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim eros elementum tristique. Duis cursus, viverra ornare, eros dolor interdum nulla, commodo diam libero vitae."
          }
        />
        <Service
          icon={<BsCodeSlash size={30} className="text-blue-500" />}
          title={"web development"}
          phrase={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim eros elementum tristique. Duis cursus, viverra ornare, eros dolor interdum nulla, commodo diam libero vitae."
          }
        />
        <Service
          icon={<TfiAndroid size={30} className="text-blue-500" />}
          title={"apps design"}
          phrase={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim eros elementum tristique. Duis cursus, viverra ornare, eros dolor interdum nulla, commodo diam libero vitae."
          }
        />
        <Service
          icon={<BsCameraFill size={30} className="text-blue-500" />}
          title={"photography"}
          phrase={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim eros elementum tristique. Duis cursus, viverra ornare, eros dolor interdum nulla, commodo diam libero vitae."
          }
        />
        <Service
          icon={<FaMagic size={30} className="text-blue-500" />}
          title={"branding"}
          phrase={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim eros elementum tristique. Duis cursus, viverra ornare, eros dolor interdum nulla, commodo diam libero vitae."
          }
        />
        <Service
          icon={<BiWorld size={30} className="text-blue-500" />}
          title={"hosting"}
          phrase={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim eros elementum tristique. Duis cursus, viverra ornare, eros dolor interdum nulla, commodo diam libero vitae."
          }
        />
      </div>
    </div>
  );
};

export default Services;
