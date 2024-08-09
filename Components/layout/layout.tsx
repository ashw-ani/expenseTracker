import React from "react";
import MainNavigation from "./MainNavigation";
import styles from "./Layout.module.css"; // Assuming CSS Modules

type LayoutProps = React.PropsWithChildren<{}>;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <MainNavigation />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
