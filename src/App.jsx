import { Suspense, useRef } from "react";
import { Outlet } from "react-router-dom";
import { FallingLines } from "react-loader-spinner";
import useTabs from "./hooks/useTabs";
import useTitle from "./hooks/useTitle";
import useClick from "./hooks/useClick";
import useHover from "./hooks/useHover";
import useConfirm from "./hooks/useConfirm";
import usePreventLeave from "./hooks/usePreventLeave";
import useBeforeLeave from "./hooks/useBeforeLeave";

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
  }, 1000);

  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  const test = useHover(sayHello);

  const deleteWorld = () => console.log("Deleting the world!");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);

  const { enablePrevent, disabledPrevent } = usePreventLeave();

  const begForLife = () => console.log("Please!");
  useBeforeLeave(begForLife);
  return (
    <div>
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
        <h2 ref={test} className="bg-[blue]">
          TEST !!!!
        </h2>
        <h1 ref={title} className="bg-[pink]">
          Custom Hook
        </h1>
        <button
          onClick={confirmDelete}
          className="block p-2 bg-black text-white mt-2"
        >
          Delete the world
        </button>
        <div className="flex gap-2 mt-2">
          <button
            onClick={enablePrevent}
            className="block p-2 bg-black text-white"
          >
            Protect
          </button>
          <button
            onClick={disabledPrevent}
            className="block p-2 bg-black text-white"
          >
            UnProtect
          </button>
        </div>
        {content.map((section, index) => (
          <button onClick={() => changeItem(index)} key={section.tab}>
            {section.tab}
          </button>
        ))}
        <div>{currentItem.content}</div>
      </Suspense>
    </div>
  );
}
