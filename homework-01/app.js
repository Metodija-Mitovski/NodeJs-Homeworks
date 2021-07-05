let people = require("./people");
let minorProcessor = require("./minor-processor");
let ageLimit = require("./minor-age-limit");

minorProcessor(people, ageLimit.usa);
