<template>
  <el-row justify="space-evenly">
    <el-col :xs="24" :sm="18" :md="15" :lg="12" :xl="10">
      <h2>SteamGuard Response decoder</h2>
      <p>
        Tool to decode SteamGuard AddAuthenticator or
        RemoveAuthenticatorViaChallengeContinue response
      </p>
      <el-input
        v-model="response"
        :autosize="{ minRows: 4 }"
        type="textarea"
        placeholder="在此粘贴返回值，可为hex或者base64  |  Paste response as hex or base64"
      />
      <div style="margin: 20px 0" />
      <el-input
        v-model="request"
        :autosize="{ minRows: 1 }"
        type="textarea"
        placeholder="可选，在此粘贴请求值，可为hex或者base64，仅在AddAuthenticator请求时有用  |  Optional, paste request as hex or base64, only useful for AddAuthenticator request"
      />
      <div style="margin: 20px 0" />
      Random UUID:
      <el-input v-model="uuid" :autosize="{ minRows: 1 }" type="input" />
      <div style="margin: 20px 0" />
      <el-button @click="decode" style="width: 100%" type="primary">
        Decode
      </el-button>
      <div v-if="resultText">
        <div style="margin: 20px 0" />
        <el-input
          v-model="resultText"
          :autosize="{ minRows: 4 }"
          type="textarea"
        />
        <p>
          注意！由于需要兼容不同客户端，Serial
          Number转换为int后会发生精度丢失，原有的取值为
          {{ responseObj.serialNumber }}
        </p>
        <div style="margin: 20px 0" />
        <el-button @click="exportToJson" style="width: 100%" type="primary">
          Download
        </el-button>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import protoRoot from "./proto/proto.js";
import { parseInput, bufferToPrettyHex, bufferToBase64 } from "./hexUtils";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "App",
  components: {},
  data() {
    return {
      request: "",
      response: "",
      responseObj: {},
      result: {},
      resultText: "",
      steamId: 0,
      uuid: uuidv4(),
    };
  },
  mounted() {},
  methods: {
    decode() {
      const responseBuffer = parseInput(this.response);
      const requestBuffer = parseInput(this.request);
      this.response = bufferToPrettyHex(responseBuffer);
      this.request = bufferToPrettyHex(requestBuffer);

      const CTwoFactor_AddAuthenticator_Response = protoRoot.lookupType(
        "CTwoFactor_AddAuthenticator_Response"
      );
      const CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response =
        protoRoot.lookupType(
          "CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response"
        );

      if (responseBuffer[0] === 0x0a) {
        const obj = CTwoFactor_AddAuthenticator_Response.toObject(
          CTwoFactor_AddAuthenticator_Response.decode(responseBuffer)
        );
        this.responseObj = obj;
        this.result = this.parseResponseObj(obj);
        if (requestBuffer.length > 0) {
          const CTwoFactor_AddAuthenticator_Request = protoRoot.lookupType(
            "CTwoFactor_AddAuthenticator_Request"
          );
          const requestObj = CTwoFactor_AddAuthenticator_Request.toObject(
            CTwoFactor_AddAuthenticator_Request.decode(requestBuffer)
          );
          console.log(requestObj);
          this.result.deviceId = requestObj.deviceIdentifier;
          this.result.steamid = requestObj.steamid.toNumber();
          this.steamId = this.result.steamid;
        }
        this.resultText = JSON.stringify(this.result, null, 2);
      } else {
        const obj =
          CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response.toObject(
            CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response.decode(
              responseBuffer
            )
          );
        this.responseObj = obj.replacementToken;
        this.result = this.parseResponseObj(obj.replacementToken);
        this.result.steamid = obj.replacementToken.steamid.toNumber();
        this.steamId = this.result.steamid;
        this.resultText = JSON.stringify(this.result, null, 2);
      }
    },

    parseResponseObj(obj) {
      return {
        shared_secret: bufferToBase64(obj.sharedSecret),
        serial_number: obj.serialNumber.toInt(),
        revocation_code: obj.revocationCode,
        uri: obj.uri,
        server_time: obj.serverTime.toNumber(),
        account_name: obj.accountName,
        token_gid: obj.tokenGid,
        identity_secret: bufferToBase64(obj.identitySecret),
        secret_1: bufferToBase64(obj.secret_1),
        status: 1,
        steamguard_scheme: 2,
      };
    },

    exportToJson() {
      const downloadElement = document.createElement("a");
      downloadElement.href = URL.createObjectURL(
        new Blob([JSON.stringify(this.result, null, 2)], {
          type: "application/json",
        })
      );
      downloadElement.setAttribute(
        "download",
        `SteamGuard-${this.steamId}.json`
      );
      document.body.appendChild(downloadElement);
      downloadElement.click();
      document.body.removeChild(downloadElement);
    },
  },
};
</script>

<style></style>
