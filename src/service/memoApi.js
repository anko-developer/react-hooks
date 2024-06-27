import axios from "axios";

export default class MemoApi {
  constructor() {
    this.apiClient = axios.create({
      baseURL: "http://localhost:3001",
    });
  }

  async getMemos() {
    try {
      const response = await this.apiClient.get("todo");
      const data = await response.data;
      return data;
    } catch (error) {
      console.log("memo error message", error);
    }
  }

  async createMemo(todo) {
    return await this.apiClient.post("todo", todo);
  }

  async deleteMemo(id) {
    return await this.apiClient.delete(`todo/${id}`);
  }

  async updateMemo(todo, id) {
    // path/(id값) 으로 입력해야한다.
    return await this.apiClient.put(`todo/${id}`, todo);
  }
}
