import React from "react";
import WelcomeHeader from "../header/welcome-header";

const WelcomeLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div>
    <WelcomeHeader />
    <main className="welcome-layout-main">{children}</main>
  </div>
);

export default WelcomeLayout;
