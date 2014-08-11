$(document).ready(function() {
	$('#grid').append(function() {
		$('#grid').css("<button>0</button>");
	});
});

function add(a,b) {
	return a+b;
}

function subtract(a,b) {
	return a-b;
}

function multiply(a,b) {
	return a*b;
}

function divide(a,b) {
	return a/b;
}