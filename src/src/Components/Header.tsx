import { useNavigate } from "react-router-dom";
import {
  BRAND_NAME,
  kAboutUs,
  kProducts,
  kServices,
  pProducts,
  pService,
} from "../Utils/constants";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.mainContainer}>
      <p className={styles.itemsText}>{BRAND_NAME}</p>
      <div className=" flex flex-row justify-between gap-x-16">
        <p className={styles.itemsText}>{kProducts}</p>

        <p className={styles.itemsText} onClick={() => navigate(pService)}>
          {kServices}
        </p>

        <p className={styles.itemsText}>{kAboutUs}</p>
      </div>
    </div>
  );
};

const styles = {
  mainContainer:
    "flex flex-row justify-around bg-black w-screen h-[50px] items-center",
  itemsText: "text-2xl text-white cursor-pointer hover:text-red-800",
};
