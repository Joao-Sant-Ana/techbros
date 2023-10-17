const $menuAbrir = document.getElementById('menuAbrir')
const $logo = document.getElementById('logo')

count = 1

$menuAbrir.addEventListener('click', () => {
    count++
    if (count % 2 == 0) {
        document.getElementById('info_nav_menu').style.display = "flex"
        $logo.style.opacity = "30%"
    } else {
        document.getElementById('info_nav_menu').style.display = "none"
        $logo.style.opacity = "100%"
    }
})
