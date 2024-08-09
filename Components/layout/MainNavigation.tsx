import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./MainNavigation.module.css";
import { FaGear } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

const MainNavigation: React.FC = () => {
  const router = useRouter();
  const currentPath: string = router.pathname;

  return (
    <div className={styles.mainnav}>
      <span>Expense Tracker</span>

      {currentPath === "/" && (
        <Link href={"/settings"}>
          <FaGear className={styles.icons} size={25} color="white" />
        </Link>
      )}

      {currentPath === "/settings" && (
        <Link href={"/"}>
          <FaHome className={styles.icons} size={25} color="white" />
        </Link>
      )}
    </div>
  );
};
export default MainNavigation;
