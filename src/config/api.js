const API_BASE_URL = (
  import.meta.env.VITE_API_URL ||
  "https://natural-spare-spyware-sierra.trycloudflare.com"
).replace(/\/$/, "");

export default API_BASE_URL;