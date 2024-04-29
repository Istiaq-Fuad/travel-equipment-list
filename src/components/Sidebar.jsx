import { useItemStore } from "../store/itemStore";
import ItemForm from "./ItemForm";

function Sidebar() {
  const markAllAsComplete = useItemStore((state) => state.markAllAsComplete);
  const markAllAsIncomplete = useItemStore(
    (state) => state.markAllAsIncomplete
  );
  const resetToInitial = useItemStore((state) => state.resetToInitial);
  const removeAllItems = useItemStore((state) => state.removeAllItems);

  return (
    <div className="sidebar">
      <ItemForm />
      <div className="other-buttons">
        <button onClick={markAllAsComplete}>Mark all as complete</button>
        <button onClick={markAllAsIncomplete}>Mark all as incomplete</button>
        <button onClick={resetToInitial}>Reset to initial</button>
        <button onClick={removeAllItems}>Remove all items</button>
      </div>
    </div>
  );
}

export default Sidebar;
