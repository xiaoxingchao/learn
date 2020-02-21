

// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//   let len = 0;
//   let val = '';
//   for(let i = 0; i < s.length; i++){
//       if(val.indexOf(s[i]) === -1){
//           val = val + s[i];
//           if(val.length > len){
//               len = val.length;
//           }
//       }else{
//           val = val + s[i];
//           let index = val.indexOf(s[i]);
//           val = val.slice(index + 1);
//       }
//   }
//   return len;
// };
// 优解
const lengthOfLongestSubstring = function(s) {
    let i=0, res=0, n=0;
    for (let j = 0; j < s.length; j++){
        n = s.slice(i,j).indexOf(s[j])
        if (n == -1){
            res = Math.max(res,j+1-i);
        }else{
            i += n+1;
        }
    }
    return res;
};
let aa = lengthOfLongestSubstring('acooiiglkjhgfdsa');
console.log(aa);