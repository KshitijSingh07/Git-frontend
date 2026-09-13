const API_BASE_URL = (import.meta.env.VITE_API_URL || "https://15.207.112.249:3000").replace(
  /\/$/,
  ""
);

export default API_BASE_URL;
