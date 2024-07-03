import React, { useState, FormEvent, useEffect } from "react";
import styles from "./FoodOrder.module.css";

interface FoodOrderFormProps {
  initialOrder: string;
}
const FoodOrderForm: React.FC<FoodOrderFormProps> = ({ initialOrder }) => {
  const [foodOrder, setFoodOrder] = useState({
    name: "",
    phone: "",
    address: "",
    order: initialOrder,
  });

  useEffect(() => {
    setFoodOrder((prev) => ({
      ...prev,
      order: initialOrder,
    }));
  }, [initialOrder]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFoodOrder((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(
      `Order Successful!\n\nYour order was ${foodOrder.order}\n\nPlease show your confirmation number for pickup.`
    );
  };
  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          value={foodOrder.name}
          id="name"
          onChange={handleChange}></input>
        <label htmlFor="phone">Phone: </label>
        <input
          type="text"
          name="phone"
          value={foodOrder.phone}
          id="phone"
          onChange={handleChange}></input>
        <label htmlFor="address">Address: </label>
        <input
          type="text"
          name="address"
          value={foodOrder.address}
          id="address"
          onChange={handleChange}></input>
        <label htmlFor="order">Order: </label>
        <input
          type="text"
          name="order"
          value={foodOrder.order}
          id="order"
          onChange={handleChange}></input>
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
};

export default FoodOrderForm;
