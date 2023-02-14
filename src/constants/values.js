import Snake from "../static/Snake.js";
import Fruits from "../static/Fruits.js";
import Map from "../static/Map.js";

export const canvas = document.getElementById("canv");
export const ctx = canvas.getContext("2d");
export const CANVAS_WIDTH = canvas.width = 500;
export const CANVAS_HEIGHT = canvas.height = 500;
export const snake = new Snake(50, 50);
export const fruit = new Fruits(10, 10);
export const map = new Map();