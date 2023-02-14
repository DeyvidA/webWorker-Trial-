const {
  BLOCKSTREAM_API_ASSET_URL,
  SECOND_API_ASSET_URL,
} = require("../../constants");

let timerId = null;
const delay = 10000;

self.addEventListener("message", async (event) => {
  if (timerId) {
    clearTimeout(timerId);
  }

  timerId = setTimeout(async () => {
    const data = await fetch(SECOND_API_ASSET_URL);

    const json = await data.json();

    self.postMessage(json);
    timerId = null;
  }, delay);
});
