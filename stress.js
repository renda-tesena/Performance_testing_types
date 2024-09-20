import http from "k6/http";
import { sleep } from "k6";

// init
export let options = {
  stages: [
    {
      duration: "20s",
      target: 90, 
    },
    {
      duration: "1m",
      target: 60, 
    },
    {
      duration: "10s",
      target: 30, 
    },
    {
      duration: "10s",
      target: 0, 
    },
  ],
};

// vu script
export default function () {
  http.get("https://test.k6.io");
  sleep(1);
  http.get("https://test.k6.io/contacts.php");
  sleep(2);
  http.get("https://test.k6.io/flip_coin.php");
  sleep(2);
}


