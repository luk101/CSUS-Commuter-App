function show_hide() {
    var checkbox = document.getElementById("yes")
    var carlist = document.getElementsByName("cars")
    var typeOfCars = document.getElementsByClassName("typeOfCar")
    var mpgLabel = document.getElementsByClassName("mpgLabel")
    var mpg = document.getElementsByClassName("mpg")

    for (var i = 0; i < typeOfCars.length; i++){
        if(checkbox.checked){
            typeOfCars[i].style.display ="block";
            carlist[i].style.display ="block";
            mpgLabel[i].style.display ="block";
            mpg[i].style.display ="block";
        } else {
            typeOfCars[i].style.display ="none";
            carlist[i].style.display ="none";
            mpgLabel[i].style.display ="none";
            mpg[i].style.display ="none";
        }
    }
}