/* eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars */
"use strict";

var $protobuf = require("protobufjs/light");

var $root = (
  $protobuf.roots["default"] ||
  ($protobuf.roots["default"] = new $protobuf.Root())
).addJSON({
  CTwoFactor_AddAuthenticator_Request: {
    fields: {
      steamid: {
        type: "fixed64",
        id: 1,
      },
      authenticatorTime: {
        type: "uint64",
        id: 2,
      },
      serialNumber: {
        type: "fixed64",
        id: 3,
      },
      authenticatorType: {
        type: "uint32",
        id: 4,
      },
      deviceIdentifier: {
        type: "string",
        id: 5,
      },
      smsPhoneId: {
        type: "string",
        id: 6,
      },
      httpHeaders: {
        type: "string",
        id: 7,
      },
      version: {
        type: "uint32",
        id: 8,
      },
    },
  },
  CTwoFactor_AddAuthenticator_Response: {
    fields: {
      sharedSecret: {
        type: "bytes",
        id: 1,
      },
      serialNumber: {
        type: "fixed64",
        id: 2,
      },
      revocationCode: {
        type: "string",
        id: 3,
      },
      uri: {
        type: "string",
        id: 4,
      },
      serverTime: {
        type: "uint64",
        id: 5,
      },
      accountName: {
        type: "string",
        id: 6,
      },
      tokenGid: {
        type: "string",
        id: 7,
      },
      identitySecret: {
        type: "bytes",
        id: 8,
      },
      secret_1: {
        type: "bytes",
        id: 9,
      },
      status: {
        type: "int32",
        id: 10,
      },
      phoneNumberHint: {
        type: "string",
        id: 11,
      },
    },
  },
  CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response: {
    fields: {
      success: {
        type: "bool",
        id: 1,
      },
      replacementToken: {
        type: "CRemoveAuthenticatorViaChallengeContinue_Replacement_Token",
        id: 2,
      },
    },
  },
  CRemoveAuthenticatorViaChallengeContinue_Replacement_Token: {
    fields: {
      sharedSecret: {
        type: "bytes",
        id: 1,
      },
      serialNumber: {
        type: "fixed64",
        id: 2,
      },
      revocationCode: {
        type: "string",
        id: 3,
      },
      uri: {
        type: "string",
        id: 4,
      },
      serverTime: {
        type: "uint64",
        id: 5,
      },
      accountName: {
        type: "string",
        id: 6,
      },
      tokenGid: {
        type: "string",
        id: 7,
      },
      identitySecret: {
        type: "bytes",
        id: 8,
      },
      secret_1: {
        type: "bytes",
        id: 9,
      },
      status: {
        type: "int32",
        id: 10,
      },
      steamguardScheme: {
        type: "uint32",
        id: 11,
      },
      steamid: {
        type: "fixed64",
        id: 12,
      },
    },
  },
});

module.exports = $root;
