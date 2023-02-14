import { Redirect } from "react-router-dom";
import workerFetch from "./workerFetch";

export const FetchWorker = () => {
  return (
    <Redirect
      to={{
        pathname: "/workerFetch.js",
        component: workerFetch,
      }}
    />
  );
};
