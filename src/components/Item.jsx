import { useItemStore } from "../store/itemStore";

function Item({ item }) {
  const toggleItem = useItemStore((state) => state.toggleItem);
  const deleteItem = useItemStore((state) => state.deleteItem);

  return (
    <li className="item">
      <label className="item-label">
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => toggleItem(item.id)}
        />
        <span>{item.name}</span>
      </label>

      <button onClick={() => deleteItem(item.id)}>❌</button>
    </li>
  );
}

export default Item;
