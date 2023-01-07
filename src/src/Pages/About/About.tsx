import { kAboutUs } from "../../Utils/constants";

export const About = () => {
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center">
      <p>{kAboutUs}</p>
    </div>
  );
};
