const TokenKey = "ADMIN_TOKEN";

export function getToken() {
  return getStorage(TokenKey);
}

export function setToken(token) {
  setStorage(TokenKey, token);
}

export function removeToken() {
  removeStorage(TokenKey);
}

export function getStorage(key) {
  const data = window.localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  } else {
    return null;
  }
}

export function setStorage(key, data) {
  //只能存字符串
  const dataStr = JSON.stringify(data);
  window.localStorage.setItem(key, dataStr);
}

export function removeStorage(key) {
  return window.localStorage.removeItem(key);
}
