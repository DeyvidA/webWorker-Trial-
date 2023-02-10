import { AssetResponse } from "./typedef";

const worker = new Worker("./worker.ts", { type: "module" });

export class BlockStreamApi {
  static async fetchDefaultAsset() {
    const response = worker;
  }

  static async fetchSecondAsset(): Promise<AssetResponse> {
    return new Promise((resolve, reject) => {
      worker.postMessage("FETCH_SECOND_ASSET");
      worker.onmessage = (e) => {
        if (e.data.type === "FETCH_SECOND_ASSET_SUCCESS") {
          resolve(e.data.payload);
        }
      };
    });
  }
}
