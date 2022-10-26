import React from "react";

export default function ProductCard({ product, setCart, cart }) {
  const handleAddingToCart = () => {
    console.log("clicked");

    const newCart = {
      id: cart.length + 1,
      productId: product.id,
      total: product.price,
    };
    console.log(newCart);
    setCart(prevState => [...prevState, newCart])
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={product.image} alt={product.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <div className="card-actions justify-end">
          <button onClick={handleAddingToCart} className="btn btn-primary">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
