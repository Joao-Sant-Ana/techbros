var $patrocinador = document.querySelectorAll('img.patrocinador')
var patrolist = Array.from($patrocinador)

patrolist.forEach(img => {
    img.addEventListener('mouseenter', foco)

    function foco() {
        img.id = "mudarcor"

        document.getElementById('mudarcor').style.filter = "grayscale(0%)"
        img.removeAttribute('id')
    }
});
