function colors(){
    var red = document.getElementById("red").value;
    var blue = document.getElementById("blue").value;
    var green = document.getElementById("green").value;
document.body.style.backgroundColor = 'RGB(' + red +', '+ green +', '+ blue +')';
document.getElementById('output').innerHTML = 'RGB(' + red +', '+ green +', '+ blue +')';

}