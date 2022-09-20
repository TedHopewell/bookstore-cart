////class for particles

class Particle{
    constructor(x, y, size, xv, yv){
        
        this.x = x;
        this.y = y;
        this.size = size;
        this.xv = xv;
        this.yv = yv;
        this.life =200;
        this.r = Math.ceil(Math.random() * 254);
        this.g = 0//Math.ceil(Math.random() * 254);
        this.b = 0//Math.ceil(Math.random() * 254);
        this.color = this.setColor();

    }

    setColor = () =>{
        let text = `rgb(${this.r}, ${this.g}, ${this.b})`;
        return text;
    }

    moveNext = () => {
        this.x += this.xv;
        this.y += this.yv;
        this.life -= 1;

        this.r += 1;
        if (this.r > 254) {
            this.r = 0;
        }
        this.g += 1;
        if (this.g > 254) {
            this.g = 0;
        }

        this.b += 1;
        if (this.b > 254) {
            this.b = 0;
        }

        this.color = this.setColor();
    }

    die = (con) => {

        let range = Math.random() * 10;

        if (range > 5) {
            for(let i = 0; i < 1; i++){
                con.addParticle(this.x, this.y);
            } 
        }
        
    }

    draw = ctx => {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();


        ctx.closePath();
    }
}

////class for constillation/ particle system

class Constilation{
    constructor(canvasId){
        this.canvas = document.getElementById(canvasId);
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext("2d");
        this.particles = [];
    }


    addParticle = (x, y) => {
        let size = Math.floor(Math.random() * 20);
        let sign = 1;

        let choose = Math.random() * 10;

        if(choose > 5){
            sign = -1;
        }else{
            sign = 1;
        }

        let xv = Math.random() * 3 * sign;

        choose = Math.random() * 10;

        if(choose > 5){
            sign = -1;
        }else{
            sign = 1;
        }

        let yv = Math.random() * 3 * sign;
        

        let particle = new Particle(x, y, size, xv, yv);
        this.particles.push(particle);

    }

    moveNext = () =>{
        let i = 0;
        let length = this.particles.length;

        for (i; i < length; i++){
            this.particles[i].moveNext();
        } 

        this.killParticles();
    }

    killParticles = () => {
        let i = 0;
        let length = this.particles.length;
        let list = [];

        for (i; i < length; i++) {
            if(this.particles[i].life < 1){
                list.push(i);
            }
            
        }

        i = 0;
        length = list.length;

        for (i; i < length; i++) {
            this.particles[list[i]].die(con);
           this.particles.splice(list[i], 1);
            
        }

    }

    draw = () =>{
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        let i = 0;
        let length = this.particles.length;

        for (i; i < length; i++){
            this.particles[i].draw(this.ctx);
            let j = 0;

            for(j; j < length; j++){
                let x1 = this.particles[i].x;
                let y1 = this.particles[i].y;

                let x2 = this.particles[j].x;
                let y2 = this.particles[j].y;

                let dx = x1 - x2;
                let dy = y1 - y2;
                let d = Math.sqrt(dx * dx + dy * dy);

                if(d < 100){
                    this.ctx.beginPath();
                    this.ctx.moveTo(x1, y1);
                    this.ctx.lineTo(x2, y2);
                    this.ctx.strokeStyle = this.particles[i].color;
                    this.ctx.stroke();
                    this.ctx.closePath();

                }



            }
        } 
        
    }
}


const animate = () =>{
    let x = Math.random() * con.canvas.width;
    let y = Math.random() * con.canvas.height;


    if(particleCount >= particleTotal){
        con.addParticle(x, y);
        particleCount = 0;
    }else{
        particleCount += 1;
    }
    




    con.moveNext();
    con.draw();

    requestAnimationFrame(animate);
}


window.addEventListener("mousemove", (e) => {
    x = e.x;
    y = e.y;

    let i = 0
    let total = 1;

    for (i; i < total; i++){
        con.addParticle(x, y);
    }

});


///program starts here
let particleTotal = 10;
let particleCount = 0;
let x = 0;
let y = 0;
let con = new Constilation("canvas");
animate();











