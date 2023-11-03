## FractalExplorer-JS

![FEX-JS Logo](https://raw.githubusercontent.com/fishydarwin/FractalExplorer-JS/main/assets/icon.png)

This is a simple web page that lets you zoom into a fractal of your choice.  
You write the iteration code in JS using basic helper functions, then FEX-JS will iterate over each pixel on your GPU using GPU.js to determine how to color each pixel based on how far the iteration went.

![Page on Safari](https://raw.githubusercontent.com/fishydarwin/FractalExplorer-JS/main/assets/example.png)

### How to use

Simply open `index.html` in your favorite web browser. No internet connection is required.  
By default, the fractal code used creates the **Mandelbrot set**, since that's quite classic.

```js
// MANDELBROT
function f(z, c) {
    z = complex_mul(z, z);
    z = complex_add(z, c);
    return z;
}
let bound = 2;
let maxIterations = 500;
```

You may change this into anything you'd like by opening `assets/fexl-function.js`.  
The available helper functions can be found in `assets/fexl_helper.js`.
