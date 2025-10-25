import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "./../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "./../components/Navbar";
import LeftAside from "../components/homeLayout/LeftAside";
import RightAside from "../components/homeLayout/RightAside";
import Loader from "../pages/Loader";

const HomeLayouts = () => {
  const navigation = useNavigation();

  return (
    <div>
      <header>
        <Header />
        <section className="w-11/12 mx-auto">
          <LatestNews />
        </section>
        <nav className="w-11/12 mx-auto">
          <Navbar />
        </nav>
      </header>

      <main className="w-11/12 mx-auto my-4 grid grid-cols-12 gap-5">
        <aside className="col-span-3 top-0 h-fit sticky">
          <LeftAside />
        </aside>

        <section className="main col-span-6">
          {navigation.state === "loading" ? <Loader /> : <Outlet />}
        </section>

        <aside className="col-span-3 top-0 h-fit sticky">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayouts;
