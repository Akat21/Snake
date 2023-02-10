import * as cvs from '../constants/values.js';

export function make_fruit(x, y, width, height){
    const fruit_image = new Image();
    fruit_image.src = '/assets/apple1.png';

    fruit_image.onload = function(){
        cvs.ctx.drawImage(fruit_image, x, y, width, height * fruit_image.height / fruit_image.width);
    }
    if (fruit_image.complete){
        cvs.ctx.drawImage(fruit_image, x, y, width, height * fruit_image.height / fruit_image.width);
    }

}

export function snake_head_up(x, y, width, height){
    const snake_image = new Image();
    snake_image.onload = function(){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
    snake_image.src = '/assets/head_up.png';
    if (snake_image.complete){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
}

export function snake_head_down(x, y, width, height){
    const snake_image = new Image();
    snake_image.onload = function(){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
    snake_image.src = '/assets/head_down.png';
    if (snake_image.complete){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
}

export function snake_head_left(x, y, width, height){
    const snake_image = new Image();
    snake_image.onload = function(){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
    snake_image.src = '/assets/head_left.png';
    if (snake_image.complete){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
}

export function snake_head_right(x, y, width, height){
    const snake_image = new Image();
    snake_image.onload = function(){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
    snake_image.src = '/assets/head_right.png';
    if (snake_image.complete){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
}

export function snake_body_horizontal(x, y, width, height){
    const snake_image = new Image();
    snake_image.onload = function(){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
    snake_image.src = '/assets/body_horizontal.png';
    if (snake_image.complete){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
}

export function snake_body_vertical(x, y, width, height){
    const snake_image = new Image();
    snake_image.onload = function(){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
    snake_image.src = '/assets/body_vertical.png';
    if (snake_image.complete){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
}

export function body_bottomleft(x, y, width, height){
    const snake_image = new Image();
    snake_image.onload = function(){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
    snake_image.src = '/assets/body_bottomleft.png';
    if (snake_image.complete){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
}

export function body_bottomright(x, y, width, height){
    const snake_image = new Image();
    snake_image.onload = function(){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
    snake_image.src = '/assets/body_bottomright.png';
    if (snake_image.complete){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
}

export function body_topleft(x, y, width, height){
    const snake_image = new Image();
    snake_image.onload = function(){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
    snake_image.src = '/assets/body_topleft.png';
    if (snake_image.complete){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
}

export function body_topright(x, y, width, height){
    const snake_image = new Image();
    snake_image.onload = function(){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
    snake_image.src = '/assets/body_topright.png';
    if (snake_image.complete){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
}

export function tail_up(x, y, width, height){
    const snake_image = new Image();
    snake_image.onload = function(){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
    snake_image.src = '/assets/tail_up.png';
    if (snake_image.complete){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
}

export function tail_down(x, y, width, height){
    const snake_image = new Image();
    snake_image.onload = function(){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
    snake_image.src = '/assets/tail_down.png';
    if (snake_image.complete){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
}

export function tail_left(x, y, width, height){
    const snake_image = new Image();
    snake_image.onload = function(){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
    snake_image.src = '/assets/tail_left.png';
    if (snake_image.complete){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
}

export function tail_right(x, y, width, height){
    const snake_image = new Image();
    snake_image.onload = function(){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
    snake_image.src = '/assets/tail_right.png';
    if (snake_image.complete){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
}