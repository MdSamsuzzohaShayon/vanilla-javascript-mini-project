function init() {
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');
    let w = canvas.width;
    let h = canvas.height;

    let bg = new Image();
    bg.src = "winter.jpg";

    function snawfall() {
        //context.clearRect(0, 0, w, h);
        context.drawImage(bg, 0, 0);
        addFlake();
        snow();
    }

    let flakes = [];

    function addFlake() {
        let x = Math.ceil(Math.random() * w);
        let s = Math.ceil(Math.random() * 4);
        flakes.push({
            "x": x,
            "y": 0,
            "s": s
        });
    }

    function snow() {
        for (let i = 0; i < flakes.length; i++) {
            let flake = flakes[i];
            context.beginPath();
            //MAKING SNOW HERE 
            context.fillStyle = "rgba(255, 255,  255, 0.7";
            //CREATING CIRCLE OR SHAPE
            //PARAMETER FOR ARC FUNCTION(POSITION X, POSITION Y, RADIUS, STARTING ANGLE, ENDING ANGLE)
            context.arc(flake.x, flakes[i].y += flake.s / 2, flake.s / 2, 0, 2 * Math.PI);
            // FILLING THE CURRENT DRAWING PATH
            context.fill();
            if (flakes[i].y > h) {
                flakes.splice(i, 1);
            }
        }
    }
    setInterval(snawfall, 20);
}
window.onload = init;