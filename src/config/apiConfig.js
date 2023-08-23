import axios from "axios";

export const APIConfig = axios.create({
    baseURL: "https://nature-defenders.onrender.com/api/v1/",
  });