let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let img5 = document.getElementById("img5");
function checkWin()
{
    if (img1.src.includes('funny-cat1_part1x1')
        && img2.src.includes('funny-cat2_part2x1')
        && img3.src.includes('funny-cat3_part3x1')
        && img4.src.includes('funny-cat4_part4x1')
        && img5.src.includes('funny-cat5_part5x1'))
    {
        alert("You win!");
        img1.classList.add("effect");
        img2.classList.add("effect");
        img3.classList.add("effect");
        img4.classList.add("effect");
        img5.classList.add("effect");
    } else if(img1.src.includes('monkey_part1x1')
    && img2.src.includes('monkey_part2x1')
    && img3.src.includes('monkey_part3x1')
    && img4.src.includes('monkey_part4x1')
    && img5.src.includes('monkey_part5x1'))
    {
        alert("You win!");
        img1.classList.add("effect");
        img2.classList.add("effect");
        img3.classList.add("effect");
        img4.classList.add("effect");
        img5.classList.add("effect");
    } else if (img1.src.includes('panda_swap_part1x1')
        && img2.src.includes('panda_swap_part2x1')
        && img3.src.includes('panda_swap_part3x1')
        && img4.src.includes('panda_swap_part4x1')
        && img5.src.includes('panda_swap_part5x1'))
    {
        alert("You win!");
        img1.classList.add("effect");
        img2.classList.add("effect");
        img3.classList.add("effect");
        img4.classList.add("effect");
        img5.classList.add("effect");

    }

}
document.getElementById('img1').addEventListener('click', function (){
    console.log(this.src);
    if(this.src.includes('funny-cat1_part1x1')){
        this.src.includes('monkey_part1x1');
    }else if(this.src.includes('monkey_part1x1')){
        this.src.includes('funny-cat1_part1x1');
    }else if(this.src.includes('panda_swap_part1x1')){
        this.src.includes('funny-cat1_part1x1');
    }
    checkWin();
})
document.getElementById('img2').addEventListener('click', function () {
    console.log(this.src);
    if (this.src.includes('monkey_part2x1.jpg')) {
        this.src = 'img/funny-cat1_part2x1.jpg';
    } else if (this.src.includes('funny-cat1_part2x1')) {
        this.src = 'img/panda_swap_part2x1.jpg';
    } else {
        this.src = 'img/monkey_part2x1.jpg';
    }
    checkWin();
})
document.getElementById('img3').addEventListener('click', function () {
    console.log(this);
    if (this.src.includes('monkey_part3x1.jpg')) {
        this.src = 'img/panda_swap_part3x1.jpg';
    } else if (this.src.includes('panda_swap_part3x1')) {
        this.src = 'img/funny-cat1_part3x1.jpg';
    } else {
        this.src = 'img/monkey_part3x1.jpg';
    }
    checkWin();
})
document.getElementById('img4').addEventListener('click', function () {
    console.log(this);
    if (this.src.includes('monkey_part4x1.jpg')) {
        this.src = 'img/panda_swap_part4x1.jpg';
    } else if (this.src.includes('panda_swap_part4x1')) {
        this.src = 'img/funny-cat1_part4x1.jpg';
    } else {
        this.src = 'img/monkey_part4x1.jpg';
    }
    checkWin();
})
document.getElementById('img5').addEventListener('click', function () {
    console.log(this);
    if (this.src.includes('monkey_part5x1.jpg')) {
        this.src = 'img/panda_swap_part5x1.jpg';
    } else if (this.src.includes('panda_swap_part5x1')) {
        this.src = 'img/funny-cat1_part5x1.jpg';
    } else {
        this.src = 'img/monkey_part5x1.jpg';
    }
    checkWin();
})
