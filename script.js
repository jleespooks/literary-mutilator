//went in on the styling here. Very fun!
function tier1Challenge(){
	document.getElementById("one").style.backgroundColor = "purple";
	document.getElementById("one").style.color = "Pink";
	document.getElementById("one").style.fontFamily = "impact";
}

function tier1challengePlus(){
	document.getElementById("two").style.backgroundColor = "brown";
	document.getElementById("two").style.color = "yellow";
	document.getElementById("two").style.fontFamily = "comic sans MS";
}

function tier1challengefun(){
	document.getElementById("three").style.backgroundColor = "aqua";
	document.getElementById("three").style.color = "black";
	document.getElementById("three").style.fontFamily = "courier new";
	document.getElementById("three").style.fontWeight = "italic";

}

// every 'bird' in cat ipsum will be replaced with every click
function replaceAnd() {
	let catPara = document.getElementById("two");
	let regex = /bird/;
	catPara.innerHTML = catPara.innerHTML.replace(regex, 'MEOW')
}