// MANDELBROT
function f(z, c) {
    z = complex_mul(z, z);
    z = complex_add(z, c);
    return z;
}
let bound = 2;
let maxIterations = 500;

// ALIENBROT
// function f(z, c) {
//     let sin_az = real_sin(complex_real(z));
//     let cos_bz = real_cos(complex_imag(z));

//     z = complex(complex_real(z) * sin_az, complex_imag(z) * cos_bz);

//     z = complex_mul(z, z);
//     z = complex_add(z, c);
//     return z;
// }
// let bound = 999;
// let maxIterations = 200;

// DUFFING MAP
// function f(z, c) {

//     let a = 2.75;
//     let b = 1.5;

//     if (complex_real(z) == 0 && complex_imag(z) == 0) {
//         z = complex(complex_real(c), complex_imag(c));
//     }

//     let x = complex_real(z);
//     let y = complex_imag(z);

//     z = complex(y, b * x + a * y - y * y * y);

//     return z;
// }
// let bound = 999;
// let maxIterations = 100;

// ROOT MANDELBROT
// function f(z, c) {

//     c = complex_sqrt(c);
//     z = complex_mul(z, z);
//     z = complex_add(z, c);
//     return z;
// }
// let bound = 999;
// let maxIterations = 500;
