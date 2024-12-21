import http from "k6/http";
import { check, sleep } from "k6";

// Define the stages of the test
export const options = {
    discardResponseBodies: false, // Těla odpovědí nebudou ukládána
    duration: "20s",
    iterations: 10,
    vus: 5,
/*    stages: [
      { duration: "2s", target: 2, },
      { duration: "30s", target: 3, },
      { duration: "2s",  target: 0,},
    ],*/
    thresholds: { 
        http_req_duration: ['p(95)<20'], // 95% of requests should complete in under 20ms     
        http_req_failed: ['rate<0.01'],  // Míra chyb musí být menší než 1 %
    },
    summaryTrendStats: ['p(90)','p(95)','avg','min','max'],
};




// Define the API endpoint and expected response
export default function () {
  const res = http.get("https://jsonplaceholder.typicode.com/posts/1");

  // Define the expected response
  const expectedResponse = {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  };

// PLAYGROUND
//  console.log(__VU, __ITER, res.remote_ip, res.remote_port);

  // Assert the response is as expected
  check(res, {
    "status is 200": (r) => r.status === 200,
 //   "response is correct": (r) => JSON.stringify(JSON.parse(r.body)) === JSON.stringify(expectedResponse),
  });

  sleep(1);
}