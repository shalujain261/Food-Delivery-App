import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./FoodItem.css";
import { StoreContext } from "../context/StoreContext";

function FoodItem({id,name,description,price,image}) {

  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img className="food-item-image" src={image} alt="" />
        {!cartItems[id] ? (
          <img
            className="add"
            src={assets.add_icon_white}
            onClick={() => addToCart(id)}
          />
        ) : (
          <div className="food-item-counter">
            <img src={assets.remove_icon_red} onClick={()=>removeFromCart(id)}/>
            <p>{cartItems[id]}</p>
            <img src={assets.add_icon_green} onClick={()=>addToCart(id)}/>
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>

        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
}

export default FoodItem;











// import { useContext, useState } from "react";
// import { assets } from "../../assets/assets";
// import "./FoodItem.css";
// import { StoreContext } from "../context/StoreContext";

// function FoodItem({ id, name, description, price, image }) {
//   // const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
//   const [itemCount,setItemCount] = useState(0);

//   return (
//     <div className="food-item">
//       <div className="food-item-image-container">
//         <img className="food-item-image" src={image} alt={name} />
//         {!itemCount ? (
//           <img
//             className="add"
//             src={assets.add_icon_white}
//             alt="Add"
//             onClick={() =>setItemCount(prev=>prev+1)}
//           />
//         ) : (
//           <div className="food-item-counter">
//             <img src={assets.remove_icon_red} alt="Remove" onClick={() => setItemCount(prev=>prev-1)} />
//             <p>{itemCount}</p>
//             <img src={assets.add_icon_green} alt="Add" onClick={() => setItemCount(prev=>prev+1)} />
//           </div>
//         )}
//       </div>
//       <div className="food-item-info">
//         <div className="food-item-rating">
//           <p>{name}</p>
//           <img src={assets.rating_starts} alt="Rating" />
//         </div>
//         <p className="food-item-description">{description}</p>
//         <p className="food-item-price">${price.toFixed(2)}</p>
//       </div>
//     </div>
//   );
// }

// export default FoodItem;
