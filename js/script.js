


const buttonScrollTop = document.getElementById('button_scroll_to_top');

buttonScrollTop.style.display = 'none';

window.onscroll = function(ev) {
    if (window.pageYOffset > 0) {
        buttonScrollTop.style.display = '';
    }else{
        buttonScrollTop.style.display = 'none';
    }
};




const gear = document.getElementById('gear');
const palette = document.getElementById('gear_palette');
gear.addEventListener('click', () => {

    palette.classList.toggle('gear_palette_active')

});





// const color = document.getElementsByClassName('color_pick');
// for (var i = 0; i < color.length; i++) {
//     color[i].addEventListener('click',colorTraitement);
// }

const color = document.querySelectorAll('.color_pick');

color.forEach(function(button) {
    button.addEventListener('click',colorTraitement);
});


function colorTraitement() {
    
    colorPick = window.getComputedStyle(this).getPropertyValue('background');

    hueColorPick = getHueColor(colorPick);
    
    const huesRadial = document.querySelectorAll('.hue_radial');
    const hues = document.querySelectorAll('.hue');
    const huesText = document.querySelectorAll('.hue_text');


    colorCurent = window.getComputedStyle(huesRadial[0]).getPropertyValue('background');

    hueColorCurent = getHueColor(colorCurent);

    this.style.background = "hsl("+hueColorCurent+", 49%, 49%)";


    huesRadial.forEach(function(hueRadial) {
        hueRadial.style.background = "radial-gradient(hsl("+hueColorPick+", 84%, 75%), hsl("+hueColorPick+", 72%, 41%))";
    });

    hues.forEach(function(hue) {
        hue.style.background = "hsl("+hueColorPick+", 49%, 49%)";
    });

    huesText.forEach(function(hueText) {
        hueText.style.color = "hsl("+hueColorPick+", 49%, 49%)";
    });


}


function getHueColor(color){

    colorsRGB = color.split('rgb(')[1].split(')')[0].split(", ");
    colorsHSL = rgb2hsl(parseInt(colorsRGB[0]),parseInt(colorsRGB[1]),parseInt(colorsRGB[2]));
    return colorsHSL[0];
}


function rgb2hsl(r,g,b) {

    let v=Math.max(r,g,b), c=v-Math.min(r,g,b), f=(1-Math.abs(v+v-c-1)); 
    let h= c && ((v==r) ? (g-b)/c : ((v==g) ? 2+(b-r)/c : 4+(r-g)/c)); 
    return [60*(h<0?h+6:h), f ? c/f : 0, (v+v-c)/2];
}

