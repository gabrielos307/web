$(document).on("ready", principal());

function principal(){
	//$("body"):css("background", "url(img/om)");
	//$(".generado").text("hola");
	//$(".generado").html("<h1>Hola </h1>");
	$("#menu-galeria li img").on("click", mostrarImagen());

}

function mostrarImagen(){
	var nombre = $(this).attr("alt");
	var direccion = 'img/ + nombre + ".jpg";
	$("#img-principal").attr("src", direccion);
	$(".galeria-container").show(1000);
}