import { NavLink } from "react-router-dom";
import FormatPrice from "../helpers/FormatPrice";
import { useCartContext } from "../context/cart_context";

const Product = (curProduct) => {
  const { id, name, image, price, category } = curProduct;
  const {addToCart} = useCartContext();
  
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card">
        <figure>
          <img src={image} alt={name} />
          <figcaption className="caption">{category}</figcaption>
        </figure>
        <div className="card-data">
          <div className="card-data-flex">
            <h3> {name} </h3>
            <p className="card-data--price">{<FormatPrice price={price} />}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
