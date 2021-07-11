setInterval(function(){
  var skipbtn = document.getElementsByClassName("ytp-ad-skip-button");
  if(skipbtn != undefined && skipbtn.length >0){
    console.log("Advirtesement detected");
    skipbtn[0].click()
  }
},300)