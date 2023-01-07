import { BRAND_NAME, kAboutUs, kProducts, kServices } from "../Utils/constants";

export const Header = () => {
  return (
    <div className="flex flex-row justify-aouund w-[50px] h-[50px]">
      <p>{BRAND_NAME}</p>
      <div className=" flex flex-row justify-between">
        <p>{kProducts}</p>
        <p>{kServices}</p>
        <p>{kAboutUs}</p>
      </div>
    </div>
  );
};
