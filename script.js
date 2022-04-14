let slider = document.getElementById("slider");
let sliderValue = document.getElementById("slider-value");

function updateSlider(){
    let value = slider.value;
    sliderValue.innerHTML = `<p>${value}</p>`;
}
slider.addEventListener("input", updateSlider);



function rangeValue(value){
    const root = document.documentElement
    root.style.setProperty('--opacity1', (100 -value)/100);
    root.style.setProperty('--opacity2', value/100 );
}