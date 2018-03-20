<script>
		var pregunta;
		pregunta = prompt("Preguntame: ");
		document.write("¿" + pregunta + "?");
		var respuesta = ["No c bro disculpa", "Pa que quieres saber eso jaja saludos", "Yo que c no soy 100tifico", "Cheklo en guikipdia a ber ci sale", "El lunes sin falta lo checo krnal"];
		var aleatorio = Math.round(Math.random()*4);
		document.write("\n" + respuesta[aleatorio]);

	</script>