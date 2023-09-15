var $carrosel = document.getElementById('carrosel')
var $carroselImg = document.getElementById('carrosel_img')
var $left = document.getElementById('left')
var $right = document.getElementById('right')

var count = 1
var time = 4000


$left.addEventListener('click', recuar)
$right.addEventListener('click', avancar)

function recuar () {
    if (count == 1) {
        count = 3
        $carroselImg.src = `image/image${count}.png`

    } else {
        count--
        $carroselImg.src = `image/image${count}.png`
    }
}

function avancar () {
    if (count == 3) {
        count = 1
        $carroselImg.src = `image/image${count}.png`
    } else {
        count++
        $carroselImg.src = `image/image${count}.png`
    }
}



setInterval(() => {


    if (count == 3) {
        count = 1
        $carroselImg.src = `image/image${count}.png`
    } else {    
        count++
        $carroselImg.src = `image/image${count}.png`
    }
}, time);


