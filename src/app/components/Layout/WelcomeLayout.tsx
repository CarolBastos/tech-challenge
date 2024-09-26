import React from "react";
import WelcomeHeader from "../header/welcome-header";
import WelcomeFooter from "../footer/welcome-footer";

const WelcomeLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div>
    <WelcomeHeader />
    <main className="welcome-layout-main">{children}</main>
    <WelcomeFooter />
  </div>
);

export default WelcomeLayout;
