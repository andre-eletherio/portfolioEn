window.onload = function()
{
	//basics
	// const projectsItems = document.getElementById("projects-items");
	// const items = [{link: "wpp.png", name: "WhatsApp"}, {link: "rappi.png", name: "Rappi"}, {link: "pokedex.png", name: "Pokedex"}, {link: "dados.png", name: "Dados"}];
	// for (item of items) {

	// 	const div1 = document.createElement("div");
	// 	div1.classList.add("div1-project-item");

	// 	const div2 = document.createElement("div");
	// 	div2.classList.add("div2-project-item");

		

	// 	const p = document.createElement("p");
	// 	const text = document.createTextNode(item.name);
	// 	p.classList.add("p-project")
	// 	p.appendChild(text);

	// 	div2.appendChild(image);
	// 	div2.appendChild(p);

	// 	projectsItems.appendChild(div)
	// }

	document.getElementById("wpp").onclick = function(){
		document.getElementById("back-wpp").style.visibility = "visible";
		document.getElementById("wpp-hidden").style.opacity = "1"
	}

	document.getElementById("dados").onclick = function(){
		document.getElementById("back-dados").style.visibility = "visible";
		document.getElementById("dados-hidden").style.opacity = "1"
	}

	document.getElementById("pokedex").onclick = function(){
		document.getElementById("back-pokedex").style.visibility = "visible";
		document.getElementById("pokedex-hidden").style.opacity = "1"
	}

	document.getElementById("rappi").onclick = function(){
		document.getElementById("back-rappi").style.visibility = "visible";
		document.getElementById("rappi-hidden").style.opacity = "1"
	}

	document.getElementById("btn-wpp").onclick = function(){
		document.getElementById("back-wpp").style.visibility = "hidden";
		document.getElementById("wpp-hidden").style.opacity = "0"
	}

	document.getElementById("btn-dados").onclick = function(){
		document.getElementById("back-dados").style.visibility = "hidden";
		document.getElementById("dados-hidden").style.opacity = "0"
	}

	document.getElementById("btn-pokedex").onclick = function(){
		document.getElementById("back-pokedex").style.visibility = "hidden";
		document.getElementById("pokedex-hidden").style.opacity = "0"
	}

	document.getElementById("btn-rappi").onclick = function(){
		document.getElementById("back-rappi").style.visibility = "hidden";
		document.getElementById("rappi-hidden").style.opacity = "0"
	}
}