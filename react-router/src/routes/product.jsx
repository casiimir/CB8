import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

export default function Product() {
  const { productId } = useParams();

  const [product, setProduct] = useState({})

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [])

  return (
    <div className="Product">
      <h1>{product.title}</h1>
      <h3>{product.brand}</h3>
      <img src={product.thumbnail} alt={product.title} />
      <strong>{product.price} $</strong>
      <br />
      <strong>{product.discountPercentage} %</strong>
      <p>{product.category}</p>
      {
        product.images && product.images.map(image => <img src={image} alt={image} key={image} />)
      }
    </div>
  )
}