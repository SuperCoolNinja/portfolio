export const Bio: React.FunctionComponent = () => {
  return (
    <div className="flex flex-col text-center lg:text-start items-center justify-center mx-auto w-full gap-5">
      <p className="text-2xl lg:text-start font-bold text-[#000] w-full">
        About Me
      </p>
      <p className="text-[1.1rem] text-[#000]">
        Hey there! I'm <span className="font-bold text-[#000]">Samir</span>,
        also known as{" "}
        <span className="font-bold text-[#000]">SuperCoolNinja</span>, a{" "}
        <span className="font-bold text-[#000]">FullStack Developer</span>
        😎
      </p>
      <p className="text-[1.1rem] text-[#000]">
        I'm passionate about{" "}
        <span className="font-bold text-[#000]">game development</span>,{" "}
        <span className="font-bold text-[#000]">web development</span>, and
        creating <span className="font-bold text-[#000]">game mods</span> for
        the <span className="font-bold text-[#000]">GTA Series</span>
        .🎮
      </p>
    </div>
  );
};
