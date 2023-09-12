var $carrosel = document.getElementById('carrosel')
var $carroselImg = document.getElementById('carrosel_img')
var $left = document.getElementById('left')
var $right = document.getElementById('right')

var count = 1

$left.addEventListener('click', recuar)
$right.addEventListener('click', avancar)



function avancar() {

    $carroselImg.style.transition = ".5s linear"
    $carroselImg.style.opacity = "0"
    setTimeout(() => {
        $carroselImg.style.opacity = "1"
    }, 700);



}

function recuar() {
    $carroselImg.style.transition = "2s linear"
    $carroselImg.style.opacity = "0"
    $carroselImg.style.opacity = "1"


}





/*
function recuar () {

    if (count == 1) {
        count = 3
        $carroselImg.src = `image/image${count}.png`

    } else {
        count--
        $carroselImg.src = `image/image${count}.png`
    }
    console.log(count)
}

function avancar () {
    if (count == 3) {
        count = 1
        $carroselImg.src = `image/image${count}.png`
    } else {
        count++
        $carroselImg.src = `image/image${count}.png`
    }
    console.log(count)
}



setInterval(() => {


    if (count == 3) {
        count = 1
        $carroselImg.src = `image/image${count}.png`
    } else {    
        count++
        $carroselImg.src = `image/image${count}.png`
    }
}, 4000);*/