import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { FallingLines } from "react-loader-spinner";
import useTabs from "./hooks/useTabs";
import useTitle from "./hooks/useTitle";

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
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => {
    titleUpdater("Home!");
  }, 5000);
  return (
    <>
      <Suspense
        fallback={
          <FallingLines
            color="#4fa94d"
            width="100"
            visible={true}
            ariaLabel="falling-circles-loading"
          />
        }
      >
        <Outlet />
        <div>Custom Hook</div>
        {content.map((section, index) => (
          <button onClick={() => changeItem(index)} key={section.tab}>
            {section.tab}
          </button>
        ))}
        <div>{currentItem.content}</div>
      </Suspense>
    </>
  );
}
