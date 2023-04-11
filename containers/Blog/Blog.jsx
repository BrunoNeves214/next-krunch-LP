"use client";

import { News, Title } from "@/components";

const Blog = () => {
  return (
    <div
      id="blog"
      className="flex flex-col gap-10 justify-center items-center px-7 mb-32"
    >
      {/* title */}
      <Title
        title={"latest news"}
        phrase={"Check out our latestnews and activities"}
      />

      {/* news */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1280px]">
        <News
          src={"/news01.jpeg"}
          alt={"news"}
          title={"Tempor incidunt labore dolor"}
          date={"August 24, 2016"}
          phrase={
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
          read={"read more"}
        />
        <News
          src={"/news02.jpeg"}
          alt={"news"}
          title={"Eiusmod tempor labore aliqua"}
          date={"August 24, 2016"}
          phrase={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
          read={"read more"}
        />
        <News
          src={"/news03.jpeg"}
          alt={"news"}
          title={"Conseqntur distinctio ipsum"}
          date={"August 24, 2016"}
          phrase={
            "Aenean commodo ligula eget dolor sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
          }
          read={"read more"}
        />
      </div>

      {/* blog btn */}
      <div className="flex justify-center mt-10">
        <button className="border-blue-500 hover:bg-blue-500 hover:text-white">
          read our blog
        </button>
      </div>
    </div>
  );
};

export default Blog;
