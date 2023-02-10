import CryptoJS from "./crypto-js.js"

export function toSha (keyObj, value){
  var keyStr = sort(keyObj)
  var obj = CryptoJS.HmacSHA256(keyStr, value)
  return CryptoJS.enc.Hex.stringify(obj)
  
}
function sort (data) {
  var sortKeys = Object.keys(data).sort();
  var sortKeyData = {};
  for (let key of sortKeys) {
    sortKeyData[key] = data[key];
  }
  return Object.keys(sortKeyData).map(i => `${i}=${encodeURIComponent(sortKeyData[i]||'')}`).join('&')
}