import { sleep } from "k6";
import { Options } from "k6/options";
import http from "k6/http";

const baseUrl = "https://test-api.k6.io";

export const options: Options = {
  vus: 30,
  duration: "10s",
};

export default function () {
  http.get(`${baseUrl}`);
  sleep(1);
}
