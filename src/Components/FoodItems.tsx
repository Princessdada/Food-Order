import React from "react";
import styles from "./FoodItems.module.css";
interface FoodItemsProps {
  name: string;
  price: number;
  imgSrc: string;
  addItemToOrder: (name: string) => void;
}
const FoodItems: React.FC<FoodItemsProps> = ({
  name,
  price,
  imgSrc,
  addItemToOrder,
}) => {
  const handleClick = () => {
    const confirmAdd = window.confirm(
      `Are you sure you want to add ${name} to your cart?`
    );
    if (confirmAdd) {
      addItemToOrder(name);
      alert(`${name} added to cart!`);
    }
  };
  return (
    <div className={styles.card}>
      <div
        className={styles.imageWrapper}
        onClick={() => {
          handleClick();
        }}>
        <img className={styles.image} src={imgSrc} alt={name}></img>
      </div>
      <div className={styles.detailsWrapper} onClick={handleClick}>
        <h3>{name}</h3>
        <p className={styles.details}>{`Price: ${`$${price}`}`}</p>
      </div>
    </div>
  );
};
export default FoodItems;
