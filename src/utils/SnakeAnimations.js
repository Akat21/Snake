import * as cvs from '../constants/values.js';

export function FruitAnim(x, y, width, height){
    const fruit_image = new Image();
    fruit_image.src = '/assets/apple1.png';

    fruit_image.onload = function(){
        cvs.ctx.drawImage(fruit_image, x, y, width, height * fruit_image.height / fruit_image.width);
    }
    if (fruit_image.complete){
        cvs.ctx.drawImage(fruit_image, x, y, width, height * fruit_image.height / fruit_image.width);
    }

}

export function SnakeAnim(x, y, width, height, img_url){
    const snake_image = new Image();
    snake_image.onload = function(){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
    snake_image.src = '/assets/' + img_url;
    if (snake_image.complete){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
}
