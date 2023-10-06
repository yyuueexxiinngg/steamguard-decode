(function(){"use strict";var e={5143:function(e,t,n){var i=n(9242),o=n(5749),r=(n(4415),n(3396)),s=n(7139);const u=(0,r._)("h2",null,"Steam令牌返回值反序列化",-1),a=(0,r._)("p",null,[(0,r.Uk)(" 本工具用于反序列化Steam令牌返回值，可用于以下接口的返回值解析 "),(0,r._)("br"),(0,r._)("br"),(0,r.Uk)(" /ITwoFactorService/RemoveAuthenticatorViaChallengeContinue/ "),(0,r._)("br"),(0,r._)("br"),(0,r.Uk)(" /ITwoFactorService/AddAuthenticator/ ")],-1),d=(0,r._)("div",{style:{margin:"20px 0"}},null,-1),l=(0,r._)("div",{style:{margin:"20px 0"}},null,-1),c=(0,r._)("div",{style:{margin:"20px 0"}},null,-1),p={key:0},m=(0,r._)("div",{style:{margin:"20px 0"}},null,-1),f=(0,r._)("div",{style:{margin:"20px 0"}},null,-1);function h(e,t,n,i,o,h){const y=(0,r.up)("el-input"),b=(0,r.up)("el-button"),g=(0,r.up)("el-col"),v=(0,r.up)("el-row");return(0,r.wg)(),(0,r.j4)(v,{justify:"space-evenly"},{default:(0,r.w5)((()=>[(0,r.Wm)(g,{xs:24,sm:18,md:15,lg:12,xl:10},{default:(0,r.w5)((()=>[u,a,(0,r.Wm)(y,{modelValue:o.response,"onUpdate:modelValue":t[0]||(t[0]=e=>o.response=e),autosize:{minRows:4},type:"textarea",placeholder:"在此粘贴返回值，可为base64或者hex，请优先复制为base64"},null,8,["modelValue"]),d,(0,r.Wm)(y,{modelValue:o.request,"onUpdate:modelValue":t[1]||(t[1]=e=>o.request=e),autosize:{minRows:1},type:"textarea",placeholder:"可选，在此粘贴请求值，可为base64或者hex，仅在AddAuthenticator请求时有用"},null,8,["modelValue"]),l,(0,r.Uk)(" Random UUID: "),(0,r.Wm)(y,{modelValue:o.uuid,"onUpdate:modelValue":t[2]||(t[2]=e=>o.uuid=e),autosize:{minRows:1},type:"input"},null,8,["modelValue"]),c,(0,r.Wm)(b,{onClick:h.decode,style:{width:"100%"},type:"primary"},{default:(0,r.w5)((()=>[(0,r.Uk)(" Decode ")])),_:1},8,["onClick"]),o.resultText?((0,r.wg)(),(0,r.iD)("div",p,[m,(0,r.Wm)(y,{modelValue:o.resultText,"onUpdate:modelValue":t[3]||(t[3]=e=>o.resultText=e),autosize:{minRows:4},type:"textarea"},null,8,["modelValue"]),(0,r._)("p",null," 注意！由于需要兼容不同客户端，Serial Number转换为int后会发生精度丢失，原有的取值为 "+(0,s.zw)(o.responseObj.serialNumber),1),f,(0,r.Wm)(b,{onClick:h.exportToJson,style:{width:"100%"},type:"primary"},{default:(0,r.w5)((()=>[(0,r.Uk)(" Download ")])),_:1},8,["onClick"])])):(0,r.kq)("",!0)])),_:1})])),_:1})}var y=n(5388),b=n.n(y),g=n(1501),v=n.n(g),_=n(5361)["lW"];function w(e){const t=e.replace(/\s/g,""),n=t.replace(/0x/g,"").toLowerCase();return x(n)?_.from(n,"hex"):_.from(t,"base64")}function x(e){let t=!0;for(const n of e)n>="a"&&n<="f"||n>="0"&&n<="9"||(t=!1);return t}function T(e){let t="";for(const n of e){""!==t&&(t+=" ");const e=n.toString(16);1===e.length?t+="0"+e:t+=e}return t}function k(e){return e.toString("base64")}v().BigInt("0x7fffffffffffffff"),v().BigInt("0x10000000000000000");var C=n(3029),O={name:"App",components:{},data(){return{request:"",response:"",responseObj:{},result:{},resultText:"",steamId:0,uuid:(0,C.Z)()}},mounted(){},methods:{decode(){const e=w(this.response),t=w(this.request);this.response=T(e),this.request=T(t);const n=b().lookupType("CTwoFactor_AddAuthenticator_Response"),i=b().lookupType("CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response");if(10===e[0]){const i=n.toObject(n.decode(e));if(this.responseObj=i,this.result=this.parseResponseObj(i),t.length>0){const e=b().lookupType("CTwoFactor_AddAuthenticator_Request"),n=e.toObject(e.decode(t));console.log(n),this.result.deviceId=n.deviceIdentifier,this.result.steamid=n.steamid.toNumber(),this.steamId=this.result.steamid}this.resultText=JSON.stringify(this.result,null,2)}else{const t=i.toObject(i.decode(e));this.responseObj=t.replacementToken,this.result=this.parseResponseObj(t.replacementToken),this.result.steamid=t.replacementToken.steamid.toNumber(),this.steamId=this.result.steamid,this.resultText=JSON.stringify(this.result,null,2)}},parseResponseObj(e){return{shared_secret:k(e.sharedSecret),serial_number:e.serialNumber.toInt(),revocation_code:e.revocationCode,uri:e.uri,server_time:e.serverTime.toNumber(),account_name:e.accountName,token_gid:e.tokenGid,identity_secret:k(e.identitySecret),secret_1:k(e.secret_1),status:1,steamguard_scheme:2}},exportToJson(){const e=document.createElement("a");e.href=URL.createObjectURL(new Blob([JSON.stringify(this.result,null,2)],{type:"application/json"})),e.setAttribute("download",`SteamGuard-${this.steamId}.json`),document.body.appendChild(e),e.click(),document.body.removeChild(e)}}},R=n(89);const j=(0,R.Z)(O,[["render",h]]);var A=j,S=n(8725),N=n(8366),V=n.n(N);V().util.Long=S.Z,V().configure();const I=(0,i.ri)(A);I.use(o.Z),I.mount("#app")},5388:function(e,t,n){var i=n(6326),o=(i.roots["default"]||(i.roots["default"]=new i.Root)).addJSON({CTwoFactor_AddAuthenticator_Request:{fields:{steamid:{type:"fixed64",id:1},authenticatorTime:{type:"uint64",id:2},serialNumber:{type:"fixed64",id:3},authenticatorType:{type:"uint32",id:4},deviceIdentifier:{type:"string",id:5},smsPhoneId:{type:"string",id:6},httpHeaders:{type:"string",id:7},version:{type:"uint32",id:8}}},CTwoFactor_AddAuthenticator_Response:{fields:{sharedSecret:{type:"bytes",id:1},serialNumber:{type:"fixed64",id:2},revocationCode:{type:"string",id:3},uri:{type:"string",id:4},serverTime:{type:"uint64",id:5},accountName:{type:"string",id:6},tokenGid:{type:"string",id:7},identitySecret:{type:"bytes",id:8},secret_1:{type:"bytes",id:9},status:{type:"int32",id:10},phoneNumberHint:{type:"string",id:11}}},CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response:{fields:{success:{type:"bool",id:1},replacementToken:{type:"CRemoveAuthenticatorViaChallengeContinue_Replacement_Token",id:2}}},CRemoveAuthenticatorViaChallengeContinue_Replacement_Token:{fields:{sharedSecret:{type:"bytes",id:1},serialNumber:{type:"fixed64",id:2},revocationCode:{type:"string",id:3},uri:{type:"string",id:4},serverTime:{type:"uint64",id:5},accountName:{type:"string",id:6},tokenGid:{type:"string",id:7},identitySecret:{type:"bytes",id:8},secret_1:{type:"bytes",id:9},status:{type:"int32",id:10},steamguardScheme:{type:"uint32",id:11},steamid:{type:"fixed64",id:12}}}});e.exports=o}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var r=t[i]={exports:{}};return e[i].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,i,o,r){if(!i){var s=1/0;for(l=0;l<e.length;l++){i=e[l][0],o=e[l][1],r=e[l][2];for(var u=!0,a=0;a<i.length;a++)(!1&r||s>=r)&&Object.keys(n.O).every((function(e){return n.O[e](i[a])}))?i.splice(a--,1):(u=!1,r<s&&(s=r));if(u){e.splice(l--,1);var d=o();void 0!==d&&(t=d)}}return t}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[i,o,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var o,r,s=i[0],u=i[1],a=i[2],d=0;if(s.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(a)var l=a(n)}for(t&&t(i);d<s.length;d++)r=s[d],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(l)},i=self["webpackChunksteamguard_decode"]=self["webpackChunksteamguard_decode"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(5143)}));i=n.O(i)})();
//# sourceMappingURL=app.98cf6d1b.js.map