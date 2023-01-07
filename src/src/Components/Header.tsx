import { Link } from "react-router-dom";
import {
  BRAND_NAME,
  kAboutUs,
  kProducts,
  kServices,
  pAboutUs,
  pHome,
} from "../Utils/constants";

export const Header = () => {
  return (
    <div className={styles.mainContainer}>
      <Link className={styles.itemsText} to={pHome}>
        {BRAND_NAME}
      </Link>
      <div className={styles.itemsContainer}>
        <p className={styles.itemsText}>{kProducts}</p>
        <p className={styles.itemsText}>{kServices}</p>
        <Link className={styles.itemsText} to={pAboutUs}>
          {kAboutUs}
        </Link>
      </div>
    </div>
  );
};

const styles = {
  mainContainer:
    "flex flex-row justify-around bg-black w-full h-[50px] items-center",
  itemsContainer: "flex flex-row justify-between gap-x-16",
  itemsText: "text-2xl text-white cursor-pointer hover:text-red-800",
};
