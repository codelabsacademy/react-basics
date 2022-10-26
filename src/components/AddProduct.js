// title (string)
// description (string)
// price (string/number)
// image (string)

import React, { useState } from "react";

export default function AddProduct({ setProducts, products }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handelClick = () => {
    const product = {
      id: products.length + 1,
      title,
      description,
      price: parseFloat(price),
      image,
    };

    console.log(product);

    setProducts(prevState => [...prevState, product])

  };


  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">Title</span>
      </label>
      <input
        type="text"
        value={title}
        placeholder="Type Title here"
        className="input input-bordered w-full max-w-xs"
        onChange={(e) => setTitle(e.target.value)}
      />

      <label className="label">
        <span className="label-text">Description</span>
      </label>
      <input
        type="text"
        placeholder="Type Description here"
        className="input input-bordered w-full max-w-xs"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label className="label">
        <span className="label-text">Price</span>
      </label>
      <input
        type="number"
        placeholder="Type Price here"
        className="input input-bordered w-full max-w-xs"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <label className="label">
        <span className="label-text">Image</span>
      </label>
      <input
        type="text"
        placeholder="Type Image Link here"
        className="input input-bordered w-full max-w-xs"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <button className="btn mt-4" onClick={handelClick}>
        Submit
      </button>
    </div>
  );
}
