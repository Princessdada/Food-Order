import FoodItems from "./Components/FoodItems";
import styles from "./App.module.css";
import FoodOrderForm from "./Components/FoodOrder";
import { useState } from "react";

function App() {
  const [order, setOrder] = useState<string>("");

  const handleAddItemToOrder = (itemName: string) => {
    // Update the order state with the new item
    setOrder((prevOrder) =>
      prevOrder ? `${prevOrder}, ${itemName}` : itemName
    );
  };

  return (
    <div className={styles.container}>
      <h1>Food Order</h1>
      <FoodItems
        name="Shashuka"
        price={5.99}
        imgSrc="https://images.unsplash.com/photo-1590412200988-a436970781fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        addItemToOrder={handleAddItemToOrder}
      />
      <FoodItems
        name="Spaghetti Carbonara"
        price={6.99}
        imgSrc="https://images.unsplash.com/photo-1608756687911-aa1599ab3bd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        addItemToOrder={handleAddItemToOrder}
      />
      <FoodItems
        name="Margherita Pizza"
        price={2.99}
        imgSrc="https://images.unsplash.com/photo-1589187151053-5ec8818e661b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        addItemToOrder={handleAddItemToOrder}
      />
      <FoodOrderForm initialOrder={order} />
    </div>
  );
}

export default App;
