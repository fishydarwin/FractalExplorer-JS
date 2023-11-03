## FractalExplorer-JS

![FEX-JS Logo][https://raw.githubusercontent.com/fishydarwin/FractalExplorer-JS/main/assets/icon.png]

This is a simple web application that lets you zoom into a fractal of your choice.\\
You write the iteration code in JS using basic helper functions, then FEX-JS will iterate over each pixel on your GPU using GPU.js to determine how to color each pixel based on how far the iteration went.



By default, the fractal used is **Mandelbrot**, since that's classic.
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

You may change this into anything you'd like by opening `assets/fexl-function.js`.\\
The available helper functions can be found in `assets/fexl_helper.js`.
