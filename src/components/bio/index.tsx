export const Bio: React.FunctionComponent = () => {
  return (
    <div className="flex flex-col text-center lg:text-start items-center justify-center mx-auto w-full gap-5">
      <p className="text-2xl lg:text-start font-bold text-[#6eafe7] w-full">
        About Me
      </p>
      <p className="text-[1.1rem] text-[#fff]">
        Hey there! I'm <span className="font-bold text-[#fff]">Samir</span>
        , also known as{" "}
        <span className="font-bold text-[#fff]">SuperCoolNinja</span>, a{" "}
        <span className="font-bold text-[#fff]">FullStack Developer</span>
        😎
      </p>
      <p className="text-[1.1rem] text-[#fff]">
        I'm passionate about{" "}
        <span className="font-bold text-[#fff]">game development</span>,{" "}
        <span className="font-bold text-[#fff]">web development</span>, and
        creating <span className="font-bold text-[#fff]">game mods</span>{" "}
        for the <span className="font-bold text-[#fff]">GTA Series</span>
        .🎮
      </p>
    </div>
  );
};
