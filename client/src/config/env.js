let apiHost = "/api";

if (process.env.NODE_ENV === "production") {
  apiHost = "https://api.catraio.pt" // FIXME: Update when server is setup
}

export const API_HOST = apiHost;
