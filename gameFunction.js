window.onload = function () {
    let btn = document.getElementById('jump');
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    console.log(context);
    let count = 0;

    function hit() {
        var x = 60;
        var y = 367;
        count += 1;
        switch(count){
            case 1:
                context.arc(x, y, 30, 0, 2 * Math.PI);
                context.fillStyle = "red";
                context.fill();
                break;
            case 2:
                x=300;
                y=350;
                context.arc(x, y, 30, 0, 2 * Math.PI);
                context.fillStyle = "lightgreen";
                context.fill();
                break;
            
        }
    }
    //btn.onclick = hit;
    function rectangle(){
        context.rect(0,50,200,100);
        context.lineWidth=10;
        context.strokeStyle = "lightgreen";
        context.stroke();
        alert("Hello");
    }
    btn.onclick=rectangle;
}