var reverse = function(x) {
  let rev = 0;
  while (x) {
      let pop = x%10;
      x = x/10>>0;
      // if(rev>Math.pow(2,31)/10 || (rev==Math.pow(2,31)/10 && pop>7)) return 0;
      // if(rev<-Math.pow(2,31)/10 || (rev==-Math.pow(2,31)/10 && pop<-8)) return 0;
     rev = rev*10 + pop;
      if(rev>Math.pow(2,31)-1 || rev<-Math.pow(2,31)){
          return 0;
      }
  }
  
  return rev;
};