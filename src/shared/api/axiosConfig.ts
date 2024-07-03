import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "https://api.github.com/graphql",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
  },
});

export default axiosConfig;
