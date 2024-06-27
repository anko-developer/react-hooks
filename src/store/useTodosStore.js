import { create } from "zustand";
import { devtools } from "zustand/middleware";
import MemoApi from "../service/memoApi";

const memoApi = new MemoApi();

const store = (set) => ({
  todos: [],
  fetch: async () => {
    set({ todos: await memoApi.getMemos() });
    // try {
    //   const response = await axios.get("http://localhost:3001/todo");
    //   const data = await response.data;
    //   set({ todos: await data });
    // } catch (error) {
    //   console.log("todo error message", error);
    // }
  },
  addTodo: (todo) =>
    set(async () => {
      await memoApi.createMemo({
        ...todo,
      });
      // await axios.post("http://localhost:3001/todo", {
      //   ...todo,
      // });
    }),
  deleteTodo: (id) => {
    set(async () => {
      await memoApi.deleteMemo(id);
    });
  },
});

const useTodosStore = create(devtools(store));

export default useTodosStore;
