$(document).ready(function () {
    /*Tooltip en imagenes de tarjetas*/
    $("#tarjeta1, #tarjeta2, #tarjeta3, #tarjeta4").hover(function () {
        $(this).tooltip();
        $(this).tooltip("open");
    });
    /*Se agrega modal a boton de formulario*/
    const myModal = document.getElementById('myModal')
    const myInput = document.getElementById('myInput')

    myModal.addEventListener('shown.bs.modal', () => {
        myInput.focus()
    })
});
