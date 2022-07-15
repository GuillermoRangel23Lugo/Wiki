var a_parent =  document.querySelectorAll(".boton");
var dd_menu_a = document.querySelectorAll(".submenu");

a_parent.forEach(function(aitem){
		aitem.addEventListener("click", function(){
			if(aitem.id =="sobre"){dd_menu_a.forEach(function(dd_menu_item){
				if (dd_menu_item.getAttribute("hidden") == "true"){
					dd_menu_item.removeAttribute("hidden");}
				else{
					dd_menu_item.setAttribute("hidden", "true");}
			})}
				
		})})