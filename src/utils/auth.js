const TokenKey = "Token";

export function getToken() {
  const Token = window.localStorage.getItem(TokenKey);
  if (Token) {
    return JSON.parse(Token);
  } else {
    return null;
  }
}

export function setToken(token) {
  //只能存字符串
  const Token = JSON.stringify(token);
  window.localStorage.setItem(TokenKey, Token);
}

export function removeToken() {
  return window.localStorage.removeItem(TokenKey);
}
