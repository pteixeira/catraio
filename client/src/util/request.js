const token = localStorage.getItem("token") || "";

export const headers = {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": `Bearer ${token}`,
};
