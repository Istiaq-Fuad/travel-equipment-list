import { useItemStore } from "../store/itemStore";

function Header() {
  const items = useItemStore((state) => state.items);

  return (
    <div className="header">
      <span className="logo">TravelThings</span>
      <div className="item-count">
        <span className="packed">
          {items.filter((item) => item.packed).length}
        </span>{" "}
        / {items.length} items packed
      </div>
    </div>
  );
}

export default Header;
