import axios from "axios";

let baseURL = "http://localhost:3000";

if (process.env.NODE_ENV === "production") {
  baseURL = `https://insapient-api.herokuapp.com`;
}

export default () => {
  return axios.create({ baseURL });
};
