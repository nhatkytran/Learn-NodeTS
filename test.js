// This file is just for testing purpose
// Not related to all code in this project

const { get } = require("lodash");

const student = {
  study: {
    loving: "Coding",
  },
};

console.log(get(student, "study.loving"));
