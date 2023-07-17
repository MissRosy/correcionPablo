AFRAME.registerComponent('up', {
init:function() {
    this.mr()
},
mr:function(){
    var wheelRotation = 0;
window.addEventListener("keydown",function(e){
     //Rotación del volante al presionar las flechas derecha e izquierda
    var wheel = document.querySelector("#nave")
    if (e.key == "d" && wheelRotation>-90) {
        wheelRotation -= 5
                wheel.setAttribute("rotation", { x: 0, y: 0, z: wheelRotation }) 
    }
    if (e.key == "a" && wheelRotation<90){
        wheelRotation += 5
                wheel.setAttribute("rotation", { x: 0, y: 0, z: wheelRotation })
    }
});
}
})