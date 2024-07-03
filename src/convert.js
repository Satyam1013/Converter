const { ObjectId } = require("mongodb");

function Converter(data) {
  const value = ObjectId.createFromHexString(data);
  console.log("value: ", value);
}

Converter("667943d1e4ccb0218e445f26");

function UppercaseChanger(value) {
  console.log(value.toUpperCase())
}

UppercaseChanger('satyam')

function NumberChanger(value) {
  console.log(value%100)
}

NumberChanger(123)