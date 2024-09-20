import http from "k6/http";
import { sleep } from "k6";


export let options = {
  stages: [
    {
      duration: "10m",
      target: 2, // Slowly ramp up to 2 users over 10 minutes
    },
    {
      duration: "10m",
      target: 5, // Increase to 5 users over 10 minutes
    },
    {
      duration: "2h40m",
      target: 10, // Maintain 10 users for 2 hours and 40 minutes
    },
    {
      duration: "10m",
      target: 5, // Gradually decrease to 5 users over 10 minutes
    },
    {
      duration: "10m",
      target: 2, // Further decrease to 2 users over 10 minutes
    },
    {
      duration: "10m",
      target: 0, // Finally ramp down to 0 users over 10 minutes
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

