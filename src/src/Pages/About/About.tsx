import { Header } from "../../Components/Header";
import { kAboutUs } from "../../Utils/constants";

export const About = () => {
  return (
    <div className="flex flex-col w-screen h-screen items-center bg-red-200">
      <Header />
      <p className="text-2xl text-red-600">{kAboutUs}</p>
    </div>
  );
};
