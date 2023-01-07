import { Header } from "../../Components/Header";
import { kHome } from "../../Utils/constants";

export const Home = () => {
  return (
    <div className="flex flex-col w-screen h-screen ">
      <Header />
      <p className="text-2xl text-red-600">{kHome}</p>
    </div>
  );
};
