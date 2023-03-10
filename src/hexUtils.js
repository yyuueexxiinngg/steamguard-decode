// Code from https://github.com/pawitp/protobuf-decoder/
import JSBI from "jsbi";

export function parseInput(input) {
  const normalizedInput = input.replace(/\s/g, "");
  const normalizedHexInput = normalizedInput.replace(/0x/g, "").toLowerCase();
  if (isHex(normalizedHexInput)) {
    return Buffer.from(normalizedHexInput, "hex");
  } else {
    return Buffer.from(normalizedInput, "base64");
  }
}

export function isHex(string) {
  let result = true;
  for (const char of string) {
    if (!((char >= "a" && char <= "f") || (char >= "0" && char <= "9"))) {
      result = false;
    }
  }
  return result;
}

export function bufferToPrettyHex(buffer) {
  let output = "";
  for (const v of buffer) {
    if (output !== "") {
      output += " ";
    }

    const hex = v.toString(16);
    if (hex.length === 1) {
      output += "0" + hex;
    } else {
      output += hex;
    }
  }
  return output;
}

export function bufferLeToBeHex(buffer) {
  let output = "";
  for (const v of buffer) {
    const hex = v.toString(16);
    if (hex.length === 1) {
      output = "0" + hex + output;
    } else {
      output = hex + output;
    }
  }
  return output;
}

export function bufferToBase64(buffer) {
  return buffer.toString("base64");
}

const maxLong = JSBI.BigInt("0x7fffffffffffffff");
const longForComplement = JSBI.BigInt("0x10000000000000000");

export function twoComplements(number) {
  number = JSBI.BigInt(number);
  if (JSBI.greaterThan(number, maxLong)) {
    return JSBI.subtract(number, longForComplement);
  } else {
    return number;
  }
}
