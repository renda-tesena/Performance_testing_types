import http from "k6/http";
import { sleep } from "k6";

// init
export let options = {
  stages: [
    {
      duration: "1m",
      target: 100,
    },
    {
      duration: "1m",
      target: 0,
    },
    {
      duration: "1m",
      target: 100,
    },
    {
      duration: "1m",
      target: 0,
    },
    {
      duration: "1m",
      target: 100,
    },
    {
      duration: "1m",
      target: 0,
    },
  ],
};

// vu script
export default function () {
  http.get("https://test.k6.io");
  sleep(1);
}


