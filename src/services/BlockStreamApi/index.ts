import {
  BLOCKSTREAM_API_ASSET_URL,
  SECOND_API_ASSET_URL,
} from "../../constants";
import { AssetResponse } from "./typedef";

// export class BlockStreamApi {
//   static fetchDefaultAsset(): Promise<AssetResponse> {
//     return fetch(BLOCKSTREAM_API_ASSET_URL).then((res) => res.json());
//   }

//   static fetchSecondAsset(): Promise<AssetResponse> {
//     return fetch(SECOND_API_ASSET_URL).then((res) => res.json());
//   }
// }

// import { AssetResponse } from "./typedef";

const worker = new Worker("./worker.ts", { type: "module" });

export class BlockStreamApi {
  static async fetchDefaultAsset(): Promise<AssetResponse> {
    const response = await fetch(BLOCKSTREAM_API_ASSET_URL);
    const data = await response.json();
    return data;
  }

  static fetchSecondAsset(): Promise<AssetResponse> {
    return fetch(SECOND_API_ASSET_URL).then((res) => res.json());
  }
}
