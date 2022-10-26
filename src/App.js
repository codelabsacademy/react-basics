import { useState } from "react";
import "./App.css";
import AddProduct from "./components/AddProduct";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Product",
      description: "Description",
      image: "https://placeimg.com/400/225/arch",
      price: 14.99,
    },
    {
      id: 2,
      title: "Product",
      description: "Description",
      image: "https://placeimg.com/400/225/arch",
      price: 14.99,
    },
  ]);

  const [cart, setCart] = useState([
    {
      id: 1,
      productId: 1,
      total: 14.99,
    },
    {
      id: 2,
      productId: 1,
      total: 14.99,
    }
  ]);
  return (
    <>
      <Navbar cart={cart} />
      <div className="flex justify-center mb-6">
        <AddProduct setProducts={setProducts} products={products} />
      </div>
      <div className="flex gap-6 mx-4 flex-wrap justify-center">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} cart={cart} setCart={setCart} />;
        })}
      </div>
    </>
  );
}

export default App;
