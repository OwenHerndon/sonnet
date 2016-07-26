var sonnetStr = document.getElementById("sonnet").innerHTML;
var sonnetDiv = document.getElementById("sonnet");
var startingPosition = sonnetStr.indexOf("orphans");

console.log("starting position of orphans",sonnetStr.indexOf("orphans"));

//var orphans = "orphans";
//sonnetStr.indexOf("orphans");
//console.log(sonnetStr.indexOf("orphans"));

if (startingPosition === 422) 
{
	console.log("right");
}

switch (startingPosition){
	
	case 422 :
	console.log("right");
	break;
	case 421 :
	console.log("wrong");
	break;
	default :
	console.log("wtf");
	break;
}

switch (false){
	
	case startingPosition > 410 :
	console.log("right");
	break;
	case startingPosition <= 410 :
	console.log("wrong");
	break;
	default :
	console.log("wtf");
	break;
}

console.log("number of characters",sonnetStr.length);


//sonnetStr = sonnetStr.replace(/the/i,"a large").replace(/winter/,"yuletide");
//console.log(sonnetStr);

//sonnetStr.innerHTML = sonnetStr.replace(/the/i,"a large").replace(/winter/,"yuletide");
//console.log(sonnetStr);

//added var sonnetDiv

//sonnetDiv = sonnetStr.replace(/the/i,"a large").replace(/winter/,"yuletide");
//console.log(sonnetStr);

//document.getElementById("sonnet").innerHTML = sonnetStr.replace(/the /g,"a large").replace(/winter/g,"yuletide");
//console.log(sonnetStr);

var newContent = sonnetStr.replace("winter","yuletide").replace(/the /g,"a large");
//console.log("changed winther and the to yuletide & a large",newContent);

sonnetStr.innerHTML = newContent;
//document.getElementById(sonnet).innerHTML = newContent

//var winter = "winter";
//var the = "the";
//if(winter=true){
//	console.log("yuletide");
//}

//if(the=true){
//	console.log("a large");
//}