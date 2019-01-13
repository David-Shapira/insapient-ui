import axios from "axios";

let baseURL = "http://localhost:3000";

if (process.env.NODE_ENV === "production") {
  baseURL = `http://www.insapient.org`;
}

export default () => {
  return axios.create({ baseURL });
};
