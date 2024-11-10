import React from "react";
import Card from "./Card";
import '../style/Main.css';
function HomePage() {
  return (
    <>
      {/* Espresso Lovers Section */}
      <div className="homepage-container">
        <h1 className="homepage-heading">
          Explore Our Coffees
        </h1>
        <h1 className="homepage-subheading">
          For Espresso Lovers!
        </h1>
        <div className="cards-container">
          <Card
            title={["Espresso Shot", "A bold and intense classic, a pure shot."]}
            description="Our signature espresso is crafted from ethically-sourced, finely roasted beans, delivering a rich and concentrated flavor. Perfect for a quick burst of energy, this shot packs a punch with its deep aroma and smooth finish. Sip, savor, and feel the buzz."
            imageUrl="/images/Hot-CoffeeEspresso-Shot.jpg"
          />
          <Card
            title={["Americano", "Smooth and rich, a perfect balance."]}
            description="Our Americano combines a robust espresso shot with hot water, creating a full-bodied flavor that’s less intense but equally satisfying. Enjoy the bold essence of espresso with a lighter, smooth finish—ideal for those who love a longer coffee experience."
            imageUrl="/images/360_F_858026405_uT17kRFEVYwLtjhPEZVFElWhUigWOT4A.jpg"
          />
          <Card
            title={["Cappuccino", "Creamy frothy perfection, every time"]}
            description="Our cappuccino is a classic blend of rich espresso, steamed milk, and a generous layer of frothy foam. Whether you enjoy it plain or with a sprinkle of cocoa, it’s the ultimate indulgence for coffee lovers. Treat yourself to a velvety-smooth experience."
            imageUrl="/images/cappuccino-1933959_1280.jpg"
          />
        </div>
      </div>
    </>
  );
}

export default HomePage;

