import { kAboutUs } from "../../Utils/constants";

export const About = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <p className="text-2xl text-red-600">{kAboutUs}</p>
    </div>
  );
};
