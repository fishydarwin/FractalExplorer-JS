// Get canvas width and height
let renderer_width = document.getElementById('renderer').offsetWidth - 2;
let renderer_height = document.getElementById('renderer').offsetHeight - 1;
let whRatio = renderer_width / renderer_height;

const gpu = new GPU();
gpu.addFunction(real_abs);
gpu.addFunction(real_sqrt);
gpu.addFunction(real_sin);
gpu.addFunction(real_cos);
gpu.addFunction(real_tan);
gpu.addFunction(complex);
gpu.addFunction(complex_add);
gpu.addFunction(complex_sub);
gpu.addFunction(complex_mul);
gpu.addFunction(complex_div);
gpu.addFunction(complex_abs);
gpu.addFunction(complex_sqrt);
gpu.addFunction(complex_sin);
gpu.addFunction(complex_cos);
gpu.addFunction(complex_tan);
gpu.addFunction(complex_real);
gpu.addFunction(complex_imag);
gpu.addFunction(f);

// Calculate Fractal using GPU
const calculateFractal = 
    gpu.createKernel(function(zoomCenter, zoomSize, maxIterations, whRatio, bound) {
        let z = [0, 0];
        let c = [
            zoomCenter[0] + ((this.thread.x / this.output.x) * 4 - 2) * (zoomSize / 4),
            -(zoomCenter[1] + ((this.thread.y / this.output.y) * 4 - 2) * (zoomSize / 4) / whRatio)
        ];
        let escaped = false;
        let iterations = 0;
        for (let i = 0; i < maxIterations; i++) {
            iterations = i;
            z = f(z, c);
            if (z[0] * z[0] + z[1] * z[1] > bound * bound) {
                escaped = true;
                break;
            }
        }
        if (escaped) {
            let point_percentage = iterations / maxIterations;
            this.color(
                1 - (3 * point_percentage - 2) * (3 * point_percentage - 2),
                1 - (3 * point_percentage - 1.5) * (3 * point_percentage - 1.5), 
                1 - (3 * point_percentage - 1) * (3 * point_percentage - 1), 
                1);
        } else {
            this.color(0, 0, 0, 1);
        }
    })
    .setGraphical(true)
    .setOutput([renderer_width, renderer_height]);

// Controlling, rendering, zooming, and so on...
let targetZoomCenter = [0, 0],
zoomFactor = 1,
zoomCenter = [0, 0],
zoomSize = 4,
stopZooming = true;

calculateFractal(zoomCenter, zoomSize, maxIterations, whRatio, bound);
const canvas = calculateFractal.canvas;
renderer.appendChild(canvas);

canvas.onmousedown = (e) => {
    let x = e.offsetX / canvas.width
    let y = e.offsetY / canvas.height;
    let zoomSizeY = zoomSize / whRatio;
    targetZoomCenter[0] = zoomCenter[0] - zoomSize / 2.0 + x * zoomSize;
    targetZoomCenter[1] = zoomCenter[1] + zoomSizeY / 2.0 - y * zoomSizeY ;
    stopZooming = false;
    zoomFactor = e.buttons & 1 ? 0.5 : 2;
    render();
    stopZooming = true;
    return true;
};
canvas.oncontextmenu = () => { return false; };
canvas.onmouseup = () => { stopZooming = true; var clicked_canvas = false; };

function render() {
    calculateFractal(zoomCenter, zoomSize, maxIterations, whRatio, bound);
    if (!stopZooming) {
        zoomSize *= zoomFactor;

        zoomCenter[0] += (targetZoomCenter[0] - zoomCenter[0]);
        zoomCenter[1] += (targetZoomCenter[1] - zoomCenter[1]);

        window.requestAnimationFrame(render);
    }
}
window.requestAnimationFrame(render);
