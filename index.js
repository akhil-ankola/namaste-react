
//---- 2
function printCurrentPage(){
	window.print();
}

let  a = 23;
a = 'Akhil';
a = true;
a=Number(a);

console.log(a);
console.log(typeof(a));



function subval(){
	event.preventDefault();
	var firstval = document.querySelector("#val1").value;
	var secondval = document.querySelector("#val2").value;
	var total = Number(firstval) + Number(secondval);
	var out = document.getElementById("op");
	out.innerHTML = `${total}`;
}