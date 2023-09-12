import React from "react";

interface TitleProp {
  title: string;
}

export const Title: React.FunctionComponent<TitleProp> = ({ title }) => {
  return (
    <div className="flex justify-center">
      <h3 className="text-4xl font-bold text-start m-20 relative inline-block group text-[#fff]">
        <span className="bg-white px-2">{title}</span>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 h-[0.2rem] bg-[#5297ff] my-[-0.5rem] rounded-t-lg transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0 group-hover:-translate-x-0"></div>
      </h3>
    </div>
  );
};
