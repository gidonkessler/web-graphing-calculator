import React, {useEffect, useRef} from 'react'
import {JSX} from 'react/jsx-runtime'

const Canvas = (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLCanvasElement> & React.CanvasHTMLAttributes<HTMLCanvasElement>) => {

    const canvasRef = useRef(null)
    const draw = (ctx: CanvasRenderingContext2D, frameCount: number) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = '#000000'
        ctx.beginPath()
        ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.01) ** 2, 0, 2 * Math.PI)
        ctx.fill()
    }


    useEffect(() => {
        const canvas = canvasRef.current
        // @ts-ignore
        const context: CanvasRenderingContext2D = canvas.getContext('2d')

        let frameCount = 0
        let animationFrameId

        const render = () => {
            frameCount++;
            draw(context, frameCount)
            animationFrameId = window.requestAnimationFrame(render)
        }
        render()


    }, [draw])

    return <canvas ref={canvasRef} {...props}/>
}

export default Canvas