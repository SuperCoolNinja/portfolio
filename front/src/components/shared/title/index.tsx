type TitleProp = {
  title: string;
};

export const Title: React.FunctionComponent<TitleProp> = ({ title }) => {
  return <h3 className="text-4xl font-bold text-center m-20 text-[#000000c5]">{title}</h3>;
};
