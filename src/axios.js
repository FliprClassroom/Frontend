import axios from "axios";

export default axios.create({
  baseURL: "https://fliprbackend.herokuapp.com/api",
  headers: { "Content-Type": "application/json" },
});
