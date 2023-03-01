import {
  BLOCKSTREAM_API_ASSET_URL,
  SECOND_API_ASSET_URL,
} from "../../constants";
import { AssetResponse } from "./typedef";

export class BlockStreamApi {
  static async fetchDefaultAsset(): Promise<AssetResponse> {
    const worker = new Worker("/workerFetch.js");
    worker.postMessage(BLOCKSTREAM_API_ASSET_URL);
    return new Promise((resolve, reject) => {
      worker.addEventListener("message", async (event) => {
        console.log("Message Event", event);
        const data = await event.data;

        resolve(data);
      });

      worker.addEventListener("error", (event) => {
        reject(event);
      });
    });
  }

  static async fetchSecondAsset() {
    const worker = new Worker("/workerFetch.js");
    worker.postMessage(SECOND_API_ASSET_URL);
    return new Promise((resolve, reject) => {
      worker.addEventListener("message", async (event) => {
        console.log("Message Event", event);
        const data = await event.data;

        resolve(data);
      });

      worker.addEventListener("error", (event) => {
        reject(event);
      });
    });
  }
}
