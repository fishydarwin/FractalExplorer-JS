// REAL NUMBERS
function real_abs(r) {
    return r < 0 ? -r : r;
}

function real_sqrt(r) {
    return Math.sqrt(r);
}

function real_sin(r) {
    return Math.sin(r);
}

function real_cos(r) {
    return Math.cos(r);
}

function real_tan(r) {
    return Math.tan(r);
}

// COMPLEX NUMBERS
function complex(real, imag) {
    return [real, imag];
}

function complex_add(z1, z2) {
    return [z1[0] + z2[0], z1[1] + z2[1]];
}

function complex_sub(z1, z2) {
    return [z1[0] - z2[0], z1[1] - z2[1]];
}

function complex_mul(z1, z2) {
    return [z1[0] * z2[0] - z1[1] * z2[1], z1[0] * z2[1] + z1[1] * z2[0]];
}

function complex_div(z1, z2) {
    let a = z1[0]; let b = z1[1];
    let c = z2[0]; let d = z2[1];
    let c2d2 = c * c + d * d;
    return [(a * c + b * d) / c2d2, (b * c - a * d) / c2d2];
}


function complex_abs(z1) {
    return Math.sqrt(z1[0] * z1[0] + z1[1] * z1[1]);
}

function complex_sqrt(z1) {
    let a = z1[0];
    let b = z1[1];
    let abs = a * a + b * b;
    return [Math.sqrt((abs + a) / 2), b / Math.abs(b) * Math.sqrt((abs - a) / 2)];
}

function complex_sin(z1) {
    return [Math.sin(z1[0]), Math.sin(z1[1])];
}

function complex_cos(z1) {
    return [Math.cos(z1[0]), Math.cos(z1[1])];
}

function complex_tan(z1) {
    return [Math.tan(z1[0]), Math.tan(z1[1])];
}

function complex_real(z1) {
    return z1[0];
}

function complex_imag(z1) {
    return z1[1];
}
