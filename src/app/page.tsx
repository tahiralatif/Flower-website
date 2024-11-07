import React from "react";
import Navbar from "../app/components/Navbar";
import Baner from "../app/components/banner";
import Carsoul from "../app/components/caurosel";
import Progressor from "../app/components/progressor";
import Card from "../app/components/card";
import Product from "../app/components/product";
import Offers from "../app/components/offers";
import Flower from "../app/components/flower";
import Logo from "../app/components/logo";
import Menu from "../app/components/menuitem";
import Protwo from "../app/components/progessortwo";
import Decoration from "../app/components/decoration";
import Reservation from "../app/components/reservation";
import Footer from "../app/components/footer";

export default function HomePage() {
  return (
    <>
      <div className="">
        <div className="rounded-sm mx-auto px-2">
          <Logo />
          
          <Baner />

          <Progressor />
          <Flower />
          <Menu />
          <Decoration />
          <Protwo />

          <Offers />
          <Card />
          <Reservation />
         
        </div>
      </div>
    </>
  );
}
