$(document).on("dblclick", "#tituloColorIngrediente", function() {
    $(this).toggleClass("colorTituloIngredientes");
});

$(document).on("dblclick", "#tituloColorPreparacion", function() {
    $(this).toggleClass("colorTituloIngredientes");
});


$(document).on("click", "#btnEnviarCorreo", function() {
   alert('El correo fue enviado correctamente...')
});

$(document).on("click", "#colorBlack", function() {
     $("#contenedorTarjetas .card#ocultarCard").toggleClass("ocultarCard");
 });
 $(document).on("click", "#verCard", function() {
    $("#contenedorTarjetas .card#ocultarCard").toggleClass("ocultarCard");
});