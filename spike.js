import http from "k6/http";
import { sleep } from "k6";

// init
export let options = {
  stages: [
    { duration: "20s", target: 120, }, // ramp-up fáze
    { duration: "40s", target: 120, }, // stabilní zátěž 120VU
    { duration: "25s", target: 400, }, // náběh první špičky
    { duration: "25s", target: 120, }, // sestupná hrana první špičky
    { duration: "70s", target: 120, }, // stabilní zátěž 120VU
    { duration: "25s", target: 400, }, // náběh druhé špičky
    { duration: "25s", target: 120, }, // sestupná hrana první špičky
    { duration: "20s", target: 0, },    // ramp-down fáze 
  ],
};

// test script
export default function () {
  http.get("https://test.k6.io");
  sleep(1);
}


