function selectThemeChange() {
	var selectBox = document.getElementById('selectBox');
    var sheet = selectBox.options[selectBox.selectedIndex].value;
	swapStyleSheet(sheet);
}

function swapStyleSheet(sheet) {
	document.getElementById('pagestyle').setAttribute('href', sheet);
}