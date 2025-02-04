import React from "react";

const LatestProducts = () => {
  const categories = ["New Arrival", "Best Seller", "Featured", "Special Offer"];
  const products = [
    {
      name: "Comfort Handy Craft",
      price: 42.0,
      originalPrice: 65.0,
      sale: true, 
      image: "/latestproduct/lpimg1.png", 
    },
    {
      name: "Ergonomic Chair",
      price: 55.0,
      originalPrice: 75.0,
      sale: false,
      image: "/latestproduct/lpimg2.png",
    },
    {
      name: "Wooden Stool",
      price: 30.0,
      originalPrice: 50.0,
      sale: true,
      image: "/latestproduct/lpimg3.png",
    },
    {
      name: "Modern Sofa",
      price: 120.0,
      originalPrice: 150.0,
      sale: false,
      image: "/latestproduct/lpimg4.png",
    },
    {
      name: "Recliner Chair",
      price: 85.0,
      originalPrice: 100.0,
      sale: true,
      image: "/latestproduct/lpimg5.png",
    },
    {
      name: "Minimalist Desk",
      price: 70.0,
      originalPrice: 90.0,
      sale: false,
      image: "/latestproduct/lpimg6.png",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-8">
          Latest Products
        </h2>

        {/* Categories */}
        <div className="flex flex-wrap justify-center space-x-4 md:space-x-6 mb-10">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`text-sm font-medium ${
                index === 0
                  ? "text-pink-500 border-b-2 border-pink-500"
                  : "text-gray-500"
              } hover:text-pink-500`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg rounded-lg p-4 text-center border border-gray-200 hover:bg-blue-100 hover:shadow-xl transition-shadow"
            >
              {/* Product Image */}
              <div className="w-full h-60 bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-fit-content flex-shrink-0 h-25 w-30"
                />
              </div>

              {/* Product Info */}
              <h3 className="text-gray-800 font-semibold mb-2">
                {product.name}
              </h3>
              <div className="text-gray-500">
                <span className="text-red-500 line-through mr-2">
                  ${product.originalPrice.toFixed(2)}
                </span>
                <span>${product.price.toFixed(2)}</span>
              </div>

              {/* Sale Badge */}
              {product.sale && (
                <div className="absolute top-4 right-4 bg-pink-500 text-white text-xs px-2 py-1 rounded">
                  Sale
                </div>
              )}

              {/* Hover Icons */}
              <div className="flex justify-center space-x-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-gray-100 p-2 rounded-full hover:bg-pink-100">
                  ❤
                </button>
                <button className="bg-gray-100 p-2 rounded-full hover:bg-pink-100">
                  🛒
                </button>
                <button className="bg-gray-100 p-2 rounded-full hover:bg-pink-100">
                  🔍
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;