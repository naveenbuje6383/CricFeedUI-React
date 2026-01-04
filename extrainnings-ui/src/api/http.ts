import axios from "axios";

export const http = axios.create({
  baseURL: "https://localhost:7201",
  headers: {
    "Content-Type": "application/json",
  },
});
