const { isPrime } = require("./index");
const asserts = require('node:assert/strict');

// Automating tests with node asserts

asserts.equal(true, isPrime(11));
asserts.equal(true, isPrime(7));
asserts.equal(false, isPrime(6));