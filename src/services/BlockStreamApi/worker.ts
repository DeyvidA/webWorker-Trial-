import {
  BLOCKSTREAM_API_ASSET_URL,
  SECOND_API_ASSET_URL,
} from "../../constants";

const getAsset = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

self.addEventListener("message", async (e) => {
  self.postMessage("FETCH_DEFAULT_ASSET");
});
