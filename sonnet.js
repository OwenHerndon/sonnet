var sonnetStr = document.getElementById("sonnet").innerHTML;
//var sonnetDiv = document.getElementById("sonnet");

var orphans = "orphans";
sonnetStr.indexOf("orphans");
console.log(sonnetStr.indexOf("orphans"));

console.log(sonnetStr.length);


//sonnetStr = sonnetStr.replace(/the/i,"a large").replace(/winter/,"yuletide");
//console.log(sonnetStr);

//sonnetStr.innerHTML = sonnetStr.replace(/the/i,"a large").replace(/winter/,"yuletide");
//console.log(sonnetStr);

//added var sonnetDiv

//sonnetDiv = sonnetStr.replace(/the/i,"a large").replace(/winter/,"yuletide");
//console.log(sonnetStr);

document.getElementById("sonnet").innerHTML = sonnetStr.replace(/the/i,"a large").replace(/winter/,"yuletide");
console.log(sonnetStr);


//var winter = "winter";
//var the = "the";
//if(winter=true){
//	console.log("yuletide");
//}

//if(the=true){
//	console.log("a large");
//}