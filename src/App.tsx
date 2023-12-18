import React, {useEffect} from 'react';
import './App.css';
import Canvas from "./Canvas";

var counter = 1

interface Point {
    x: number;
    y: number;
}

const points: Point[] = [
    {x: 0, y: 100}, {x: 2, y: 64}, {x: 4, y: 36}, {x: 6, y: 16}, {x: 8, y: 4},
    {x: 10, y: 0},
    {x: 12, y: 4}, {x: 14, y: 16}, {x: 16, y: 36}, {x: 18, y: 64}, {x: 20, y: 100}
];

const timeloop = () => {
    const canvas = document.getElementById("canvas")
    if (!(canvas instanceof HTMLCanvasElement)) return;

    const canvasContext: CanvasRenderingContext2D | null = canvas.getContext('2d')

    if (canvasContext == null) return;

    const prev = points[counter - 1]
    const curr = points[counter]

    canvasContext.moveTo(prev.x, prev.y)
    canvasContext.lineTo(curr.x, curr.y)
    canvasContext.stroke()

    if (counter < 10) {
        counter += 1;
        setTimeout(timeloop, 500);
    }

}


const App = () => {

    useEffect(() => {
        timeloop()
    });
    return (
        <div>
            <canvas id="canvas" width="200px" height="100px" style={{border: "1px solid #000000"}}>
                Your browser does not support the HTML canvas tag.
            </canvas>
            <Canvas/>

        </div>
    );
};

export default App;
