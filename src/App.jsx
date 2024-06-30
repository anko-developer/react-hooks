import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { FallingLines } from "react-loader-spinner";
import useTabs from "./hooks/useTabs";
import useTitle from "./hooks/useTitle";
import useClick from "./hooks/useClick";
import useHover from "./hooks/useHover";
import useConfirm from "./hooks/useConfirm";
import usePreventLeave from "./hooks/usePreventLeave";
import useBeforeLeave from "./hooks/useBeforeLeave";
import useFadeIn from "./hooks/useFadeIn";
import useNetwork from "./hooks/useNetwork";
import useScroll from "./hooks/useScroll";
import useFullScreen from "./hooks/useFullScreen";

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

  const fadeInBox = useFadeIn(3);
  const fadeInH1 = useFadeIn(5);

  const handleNetworkChange = (online) => {
    console.log(online ? "We just went online" : "We are offline");
  };
  const onLine = useNetwork(handleNetworkChange);

  const { y } = useScroll();

  const onFullS = (isFull) => {
    console.log(isFull ? "We are full!" : "WE are small!");
  };
  const { element, triggerFull, exitFull } = useFullScreen(onFullS);
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

        <h1
          style={{
            color: y > 100 ? "red" : "blue",
            height: "1000vh",
            backgroundColor: "white",
          }}
        >
          <div ref={element}>
            <img
              src="https://picsum.photos/200"
              alt="Hook Test Image"
              className="max-w-full"
            />
            <button onClick={exitFull} className="bg-black text-white p-1">
              Exit FullScreen
            </button>
          </div>
          <button onClick={triggerFull} className="bg-black text-white p-1">
            Make FullScreen
          </button>
          Hi
        </h1>
        <h1>{onLine ? "Online" : "Offline"}</h1>
        <h1 {...fadeInH1} className="bg-[purple]">
          Fade Test1
        </h1>
        <div {...fadeInBox} className="bg-[green]">
          Fade Test2
        </div>
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
