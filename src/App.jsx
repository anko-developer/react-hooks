import React from "react";
import useTabs from "./hooks/useTabs";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1",
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2",
  },
];

export default function App() {
  const { changeItem, currentItem } = useTabs(0, content);
  return (
    <>
      <div>Custom Hook</div>
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)} key={section.tab}>
          {section.tab}
        </button>
      ))}
      <div>{currentItem.content}</div>
    </>
  );
}
