import {
  BLOCKSTREAM_API_ASSET_URL,
  SECOND_API_ASSET_URL,
} from "../../constants";
import { AssetResponse } from "./typedef";

export class BlockStreamApi {
  static async fetchDefaultAsset(): Promise<AssetResponse> {
    return fetch(BLOCKSTREAM_API_ASSET_URL).then((res) => res.json());
  }

  static async fetchSecondAsset() {
    const worker = new Worker("/workerFetch.js");
    worker.postMessage(SECOND_API_ASSET_URL);
    return new Promise((resolve, reject) => {
      worker.onmessage = (e) => {
        console.log("e.data", e.data);
        resolve(e.data);
        worker.terminate();
      };
      worker.onerror = (e) => {
        console.log("Aca muere");
        reject(e);
        worker.terminate();
      };
    });
  }
}
