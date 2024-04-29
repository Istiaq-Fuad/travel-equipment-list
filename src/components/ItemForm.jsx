import { useState } from "react";
import { useItemStore } from "../store/itemStore";

function ItemForm() {
  const [itemText, setItemText] = useState("");
  const addItem = useItemStore((state) => state.addItem);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(itemText);
    addItem(itemText);
    setItemText("");
  };

  return (
    <div className="add-item">
      <form onSubmit={handleFormSubmit}>
        <h2>Add an item</h2>
        <input value={itemText} onChange={(e) => setItemText(e.target.value)} />
        <button>Add to list</button>
      </form>
    </div>
  );
}

export default ItemForm;
