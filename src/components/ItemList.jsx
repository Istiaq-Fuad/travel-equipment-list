import Item from "./Item";
import Select from "react-select";
import { sortingOptions } from "../lib/constants";
import { useMemo, useState } from "react";
import { useItemStore } from "../store/itemStore";

function ItemList() {
  const items = useItemStore((state) => state.items);
  const [sortingOption, setSortingOption] = useState("default");

  const sortedItems = useMemo(() => {
    return items.slice().sort((a, b) => {
      if (sortingOption == "packed") {
        return b.packed - a.packed;
      }

      if (sortingOption == "unpacked") {
        return a.packed - b.packed;
      }

      return;
    });
  }, [items, sortingOption]);

  return (
    <div className="items">
      <ul className="item-list">
        <section className="sorting">
          <Select
            className="select"
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
            onChange={(selectedOption) =>
              setSortingOption(selectedOption.value)
            }
          />
        </section>

        {sortedItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
