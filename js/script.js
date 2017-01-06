
var green=document.getElementById("header");
function change_color_to_green(){
    green.style.background="green";
}


var gray=document.getElementById("header");
function change_color_to_gray()
{
    gray.style.background="gray";
}

var orange=document.getElementById("header");
function change_color_to_orange()
{
    orange.style.background="orange";
}

var def=document.getElementById("header");
    
function change_color_to_default()
{
    def.style.background="white";
}




var search_in=document.getElementById("serach_input");
search_in.onfocus = function() 
{
	if ( search_in.value === "ابحث في الموقع") 
        {
		search_in.value = "";
               search_in.style.backgroundColor="#cccccc";
	}
};

search_in.onblur = function() 
{
	if ( search_in.value === "") 
        {
		search_in.value = "ابحث في الموقع";
                search_in.style.backgroundColor="white";
	}
};
