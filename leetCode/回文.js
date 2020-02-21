var isPalindrome = function(x) {
  if(x<0 || (x%10===0&&x!==0)){
      return false;
  }
  
  let res = 0;
  let q = x;
  while(q>res){
      let pop = q%10;
      q = q/10>>0;
      res = res*10+pop;
  }
  return q===res || q===res/10>>0;
};