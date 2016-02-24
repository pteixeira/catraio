export function defaultHeaders() {
  const token = localStorage.getItem("token") || "";

  return {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
  }
};
