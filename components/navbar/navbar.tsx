import { Suspense } from "react";
import DarkMode from "./dark-mode";
import LinksDropdown from "./links-dropdown";
import Logo from "./logo";
import NavSearch from "./nav-search";

const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="flex flex-col sm:flex-row sm:justify-around sm:items-center flex-wrap gap-4 py-8">
        <Logo />
        <Suspense>
          <NavSearch />
        </Suspense>
        <div className="flex gap-4 items-center">
          <DarkMode />
          <LinksDropdown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
