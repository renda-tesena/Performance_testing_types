import http from "k6/http";
import { sleep } from "k6";


export let options = {
  stages: [
    { duration: "10s", target: 50, },   // ramp-up fáze pro první stabilní zátěž
    { duration: "2m", target: 50, },    // stabilní zátěž 50 VU po dobu 2m
    { duration: "10s", target: 100, },  // ramp-up fáze pro druhou stabilní zátěž
    { duration: "2m", target: 100, },   // stabilní zátěž 100 VU po dobu 2m
    { duration: "10s", target: 150, },  // ramp-up fáze pro třetí stabilní zátěž
    { duration: "2m", target: 150, },   // stabilní zátěž 150 VU po dobu 2m
    { duration: "10s", target: 200, },  // ramp-up fáze pro čtvrtou stabilní zátěž
    { duration: "2m", target: 200, },   // stabilní zátěž 200 VU po dobu 2m
    { duration: "10s", target: 250, },  // ramp-up fáze pro pátou stabilní zátěž
    { duration: "2m", target: 250, },   // stabilní zátěž 250 VU po dobu 2m
    { duration: "10s", target: 300, },  // ramp-up fáze pro šestou stabilní zátěž
    { duration: "2m", target: 300, },   // stabilní zátěž 300 VU po dobu 2m
    { duration: "10s", target: 350, },  // ramp-up fáze pro sedmou stabilní zátěž
    { duration: "2m", target: 350, },   // stabilní zátěž 350 VU po dobu 2m
    { duration: "10s", target: 400, },  // ramp-up fáze pro osmou stabilní zátěž
    { duration: "2m", target: 400, },   // stabilní zátěž 400 VU po dobu 2m
    { duration: "10s", target: 450, },  // ramp-up fáze pro devátou stabilní zátěž
    { duration: "2m", target: 450, },   // stabilní zátěž 450 VU po dobu 2m
    { duration: "30s", target: 0, },    // ramp-down fáze 
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

