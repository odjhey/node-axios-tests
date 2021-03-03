const axios = require("axios");

//const URI = "http://zzz.z.decodebase.com/asldkfj/verify";
const URI = "http://zzz.z.decodebase.com/err/err/err";
const config = {
  method: "POST",
  url: URI,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  data: {
    // ...tscRequest,
  },
};

const call = new Promise((resolve) => {
  const resp = axios(config);
  resolve(resp);
});

call
  .then((d) => {
    console.log("success", d.data);
  })
  .catch((e) => {
    console.log(e.response);
  });

const b = {
  status: 401,
  statusText: "Unauthorized",
  headers: {},
  config: {
    url: "",
    method: "post",
    data: "{}",
    headers: {},
    timeout: 0,
  },
  data: {},
};
