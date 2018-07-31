module.exports = function main(strnum) {
  let result = "";let sig=0;
  for (let str of strnum) {
    if(sig==1){result=result+" "}
      if (str==1||str==4){
	result=result+"...";
      }
      else{
        result=result+"._.";  
      }
      sig=1;
    }
  result=(result+"\n");sig=0;
  for (let str2 of strnum) {
    if(sig==1){result=result+" "}
      if (str2==0){
	result=result+"|.|";
      }
      else if(str2==1||str2==7){
        result=result+"..|";  
      }
      else if(str2==2||str2==3){
        result=result+"._|";  
      }
      else if(str2==5||str2==6){
        result=result+"|_.";  
      }
      else{
          result=result+"|_|";
      }
      sig=1;
  }
  result=(result+"\n");sig=0;
  for (let str3 of strnum) {
    if(sig==1){result=result+" "}
      if (str3==2){
	result=result+"|_.";
      }
      else if(str3==3||str3==5){
        result=result+"._|";  
      }
      else if(str3==0||str3==6||str3==8){
        result=result+"|_|";  
      }
      else {
        result=result+"..|";  
      }
      sig=1;
  }
  result=result+"\n";
  return result;
};