import React from 'react';
import Card from "./Card";
import '../style/Cold.css';

function Cold() {
  return (
    <div className="cold-container">
      {/* Cold Brew Lovers Section */}
      <h1 className="cold-title">
        For Cold Brew Lovers!
      </h1>
      <div className="card-container">
        <Card
          title={["Traditional Cold Brew", "Bold, smooth, and effortlessly cool."]}
          description="Our traditional cold brew is steeped to perfection, delivering a rich, robust flavor with a smooth finish and lower acidity. Served over ice, it is the ultimate refreshing coffee experience, ideal for those who appreciate a pure and straightforward coffee."
          imageUrl="/images/istockphoto-1209718260-612x612.jpg"
        />
        <Card
          title={["Cold Brew Lemonade", "A bold twist on refreshment."]}
          description="Experience the unexpected blend of bold cold brew coffee and zesty lemonade. This unique combination delivers a refreshing, tangy kick with the smooth richness of coffee, perfect for those looking to try something adventurous and energizing."
          imageUrl="/images/lemon-juice-iced-coffee-600nw-2032018268.webp"
        />
        <Card
          title={["Cold Brew with Milk", "Smooth, refreshing, and chilled."]}
          description="Our cold brew is steeped for hours to unlock deep, bold flavors and low acidity. When blended with creamy milk, it creates a smooth, mellow coffee that is both refreshing and rich. Served over ice, it is the perfect pick-me-up for warm days."
          imageUrl="/images/istockphoto-1366850534-612x612.jpg"
        />
      </div>
      {/* Button Container */}
      <div className="button-container">
        {/* First Button */}
        <button className="button">
          Get A Coffee
        </button>
      </div>
    </div>
  );
}

export default Cold;
