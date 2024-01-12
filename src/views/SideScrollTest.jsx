// SideScrollTest.jsx
import React from "react";
import { useHorizontalScroll } from "./useHor"; // Correct import

export const SideScrollTest = () => {
  const scrollRef = useHorizontalScroll();
  return (
    <div ref={scrollRef} style={{ width: 300, overflow: "auto" }}>
      <div style={{ whiteSpace: "nowrap" }}>
        {/* Your content goes here */}
      </div>
    </div>
  );
};
export default SideScrollTest;
