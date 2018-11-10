function openNav() {
	document.getElementById("mobNav").style.height = "100%";
}
function closeNav() {
  document.getElementById("mobNav").style.height = "0%";
}
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

/*function($) {
	window.fnames = new Array(); 
	window.ftypes = new Array();
	fnames[1]='FNAME';
	ftypes[1]='text';
	fnames[4]='PHONE';
	ftypes[4]='phone';
	fnames[0]='EMAIL';
	ftypes[0]='email';
}(jQuery);
var $mcj = jQuery.noConflict(true);*/