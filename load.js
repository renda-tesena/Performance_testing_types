import http from "k6/http";
import { sleep } from "k6";

// Define the stages of the test
export let options = {
  stages: [
    {
      duration: "30s",
      target: 240,
    },
    {
      duration: "290s",
      target: 240,
    },
    {
      duration: "10s",
      target: 0,
    },
  ],
};

// Virtual users script
export default function () {
  http.get("https://test.k6.io");
  sleep(1);
  http.get("https://test.k6.io/contacts.php");
  sleep(2);
  http.get("https://test.k6.io/flip_coin.php");
  sleep(2);
}


