var $fecharMenu = document.getElementById('fechar_topicos_btn')
var $menuTopico = document.getElementById('menu_topicos')
var altura = document.body.scrollHeight

$menuTopico.style.height = altura + "px"


$fecharMenu.addEventListener('click', fecharMenu)

function fecharMenu () {

    if ($menuTopico.style.display != "none" ) {
        $fecharMenu.innerHTML = ">"
        $fecharMenu.style.left = "0"
        $menuTopico.style.display = "none"
    } else {
        $fecharMenu.innerHTML = "<"
        $menuTopico.style.display = "block"
        if (window.screen.width <= "768px") {
            $fecharMenu.style.left = "12%"
        } else {
            $fecharMenu.style.left = "13.5%"

        }
    }
}