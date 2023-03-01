function TestWorker(path) {
  this.path = path;
  this.onmessage = null;

  this.postMessage = async function (url) {
    const worker = this;

    const testPromise = new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.send();
      xhr.addEventListener("load", function () {
        const response = xhr.responseText;
        resolve(response);
      });
    });

    testPromise.then((response) => {
      const json = JSON.parse(response);

      worker.onmessage({ data: json });
    });
  };
}

const worker = new TestWorker("/workerFetch.js");

describe("Api request using web worker", () => {
  test("Should return a response", (done) => {
    worker.postMessage("https://jsonplaceholder.typicode.com/posts/2");

    worker.onmessage = async (event) => {
      const response = await event.data;

      expect(response).not.toBeNull();
      expect(response).toBeDefined();
      expect(response).not.toBeUndefined();

      expect(response.userId).toBe(1);
      expect(response.id).toBe(2);
      expect(response.title).toBe("qui est esse");
      expect(response.body).toContain("est rerum tempore vitae");

      done();
    };

    worker.onerror = (error) => {
      console.error(error);
      done();
    };
  });
});
