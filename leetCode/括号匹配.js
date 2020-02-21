/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let len = s.length;
  let map = {
    "{": "}",
    "[": "]",
    "(": ")"
  };
  let arr = [];
  // len为奇数
  if (len % 2 !== 0) {
    return false;
  }
  for (let i = 0; i < len; i++) {
    if (arr.length === 0 && (s[i] === ")" || s[i] === "}" || s[i] === "]")) {
      return false;
    }
    if (s[i] in map) {
      arr.push(s[i]);
    } else {
      if (arr[arr.length - 1] === map[s[i]]) {
        arr.pop();
      }
    }
  }
  if (arr.length === 0) {
    return true;
  } else {
    return false;
  }
};
