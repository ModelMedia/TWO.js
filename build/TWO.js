// Made by Model Media

// Copyright @ Model_Media

// Support me @Twitter - https://twitter.com/modelmedia740

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
let cW = canvas.width;
let cH = canvas.height;

/**
 * 
 * @param {Number} width - Type the width of canvas
 * @param {Number} height - Type the height of canvas
 * @param {String} color - Type the background color of canvas. type in "".(ignore for white)
 */
function drawCanvas(color) {
    if(color == undefined) color = 'white';
    canvas.style.background = color;
    // canvas.width = width;
    // canvas.height = height;
    // cW = width;
    // cH = height;
}

class rect {
    /**
     * 
     * @param {Number} posX -please type X-position of Rectangle
     * @param {Number} posY -please type Y-position of Rectangle
     * @param {Number} width -please type width of Rectangle
     * @param {Number} height -please type height of Rectangle
     * @param {String} color -please type color of Rectangle with ""
     * @param {Number} alpha -please type alpha of Rectangle (don't mind if it is 1)
     */
    constructor(posX, posY, width, height, color, alpha) {
        if (alpha == undefined) {
            alpha = 1;
        }

        this.x = posX - width / 2;
        this.y = posY - height / 2;
        this.width = width;
        this.height = height;
        this.color = color;
        this.alpha = alpha;

        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

/**
 * 
 * @param {Number} posX -please type X-position of Circle
 * @param {Number} posY -please type Y-position of Circle
 * @param {Number} radius -please type radius of Circle
 * @param {String} color -please type color of Circle with ""
 * @param {Number} alpha -please type alpha of Circle (don't mind if it is 1)
 */
function circle(posX, posY, radius, color, alpha){
    if(alpha==undefined){
        alpha = 1;
    }
    ctx.globalAlpha = alpha;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(posX, posY, radius, 0, Math.PI*2, false);
    ctx.fill();
}

class eqTriangle {
    /**
     * 
     * @param {Number} posX - Type X position of Equilateral Triangle
     * @param {Number} posY - Type Y position of Equilateral Triangle
     * @param {Number} length - Type length of sides in Eqilateral Triangle
     * @param {String} color - Please Type Color of Triangle with ""
     * 
     */
    constructor(posX, posY, length, color) {
        if(color==undefined){
            color = 'white';
        }

        let tH = length * 0.125;
        ctx.fillStyle = color;
        ctx.moveTo(posX, posY - tH / 2);
        ctx.lineTo(posX + tH, posY + tH);
        ctx.lineTo(posX - tH, posY + tH);
        ctx.lineTo(posX, posY - tH / 2);
        ctx.fill();
    }
}

/**
 * 
 * @param {Number} posX -please type X-position of Text
 * @param {Number} posY -please type Y-position of Text
 * @param {String} text -please type Text displays
 * @param {String} font -please type font and size of Text in the form "7px cursive"
 * @param {String} color -please type color of Rectangle with ""
 * @param {Number} alpha -please type alpha of Rectangle (don't mind if it is 1)
 */
function text(posX, posY, text, font, color, alpha){
    if(alpha==undefined){
        alpha = 1;
    }
    ctx.globalAlpha = alpha;
    ctx.fillStyle = color;
    ctx.font = font;
    ctx.fillText(text, posX, posY);
}

class DrawImg {
    /**
     * 
     * @param {ImageSource} src - Type source of the image
     * @param {Number} sorX 
     * @param {Number} sorY 
     * @param {Number} sorW 
     * @param {Number} sorH 
     * @param {Number} draX 
     * @param {Number} draY 
     * @param {Number} draW 
     * @param {Number} draH 
     */
    constructor(src, sorX, sorY, sorW, sorH, draX, draY, draW, draH) {
        let img = new Image();
        img.src = src;
        img.onload = function(e){
            ctx.drawImage(img, sorX, sorY, sorW, sorH, draX, draY, draW, draH);
        }
    }
}

function centerCanvas(){
    var body = document.body;
    var centre = document.createElement('div');
    body.appendChild(centre);
    centre.appendChild(canvas);
    centre.style.display = 'flex';
    centre.style.justifyContent = 'center';
    centre.style.alignItems = 'center';
    centre.style.width = '100vw';
    centre.style.height = '100vh';
}

/**
 * 
 * @param {string} width - type width using vw to make your canvas responsive 
 * @param {string} height - type height using vh to make your canvas resposive
 */
function canvasSize(width, height){
    canvas.style.width = width;
    canvas.style.height = height;
}

/**
 * 
 * @param {string} size -please type with 'px'
 */
function curvedCanvas(size){
    canvas.style.borderRadius = size;
}

/**
 * 
 * @param {Function} funct - add function name to execute when mouse right button is down
 */ 
function onMouseDown(funct){
    canvas.addEventListener("mousedown", funct, false);
}

/**
 * 
 * @param {Function} funct - add function name to execute when mouse right button is up
 */
function onMouseUp(funct){
    canvas.addEventListener("mouseup", funct, false);
}

/**
 * 
 * @param {Function} funct - add function name to execute when mouse is moving
 */
function onMouseMove(funct){
    canvas.addEventListener("mousemove", funct, false);
}

/**
 * 
 * @param {Function} funct - add function name to execute when keybord key is down
 */
function onKeyDown(funct){
    canvas.addEventListener("keydown", funct, false);
}

/**
 * 
 * @param {Function} funct - add function name to execute when keybord key is up
 */
function onKeyUp(funct){
    canvas.addEventListener("keyup", funct, false);
}

/**
 * 
 * @param {Function} funct - add function name to execute when keybord key is pressed
 */
function onKeyPress(funct){
    canvas.addEventListener("keypress", funct, false);
}
