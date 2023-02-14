async function fetchBlockStreamApi(url) {
  const response = await fetch(url);

  return await response.json();
}

self.addEventListener("message", async (event) => {
  const response = await fetchBlockStreamApi(event.data);

  self.postMessage(response);
});
