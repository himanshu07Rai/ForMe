import { useState, useRef, useCallback, useEffect } from "react";
import { createUser } from "../service/createUser.ts"; // Import the pagination function

const VirtualizedList = ({ itemHeight, windowHeight, bufferSize = 50 }) => {
  const [scrollTop, setScrollTop] = useState(0);
  const [items, setItems] = useState(() => createUser(0, bufferSize));
  const listRef = useRef(null);

  const visibleItemCount = Math.ceil(windowHeight / itemHeight);
  const totalHeight = 100000 * itemHeight; // Total height assuming 100,000 items

  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(startIndex + visibleItemCount + 1, 100000);

  // Load additional items when scroll position changes
  useEffect(() => {
    const loadItems = (start, end) => {
      const newItems = createUser(start, end);
      setItems((prevItems) => [...prevItems, ...newItems]);
    };

    if (endIndex > items.length) {
      loadItems(items.length, items.length + bufferSize);
    }
  }, [endIndex, items.length]);

  const onScroll = useCallback((event) => {
    setScrollTop(event.target.scrollTop);
  }, []);

  useEffect(() => {
    const listElement = listRef.current;
    if (listElement) {
      listElement.addEventListener("scroll", onScroll);
      return () => {
        listElement.removeEventListener("scroll", onScroll);
      };
    }
  }, [onScroll]);

  const displayItems = () => {
    return items.slice(startIndex, endIndex).map((item, index) => (
      <div
        key={item.id}
        style={{
          position: "absolute",
          top: `${(startIndex + index) * itemHeight}px`,
          height: `${itemHeight}px`,
          left: 0,
          right: 0,
        }}
      >
        {item.name}
      </div>
    ));
  };

  return (
    <div
      ref={listRef}
      style={{
        height: `${windowHeight}px`,
        overflowY: "scroll",
        position: "relative",
        width: "100px",
      }}
    >
      <div style={{ height: `${totalHeight}px` }}>{displayItems()}</div>
    </div>
  );
};

export default VirtualizedList;
