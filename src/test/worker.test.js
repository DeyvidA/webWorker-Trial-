function Worker(path) {
  this.path = path;
  this.onmessage = null;

  this.postMessage = function (message) {
    const worker = this;

    const xhr = new XMLHttpRequest();
    xhr.open("GET", this.path);
    xhr.send();

    xhr.addEventListener("load", function () {
      const response = xhr.responseText;

      worker.onmessage({ data: response });
    });
  };

  this.terminate = function () {
    this.onmessage = null;
  };
}

const worker = new Worker("/workerFetch.js");

describe("Api request using web worker", () => {
  afterAll(() => {
    worker.terminate();
  });

  test("Should return a response", async () => {
    worker.postMessage("https://jsonplaceholder.typicode.com/posts/1");

    let data = null;
    worker.onmessage = async (event) => {
      self.postMessage(event.data);

      data = await event.data;

      expect(data).not.toBeNull();
    };
  });
});
