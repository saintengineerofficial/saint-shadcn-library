'use client'

import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'

import { DB, Parser, Player } from 'svga'
import { PlayerConfigOptions } from 'svga/dist/types'
import { twMerge } from 'tailwind-merge'

export interface SvgaVideoRef {
  player: Player | null
  play: () => void
}

export interface SvgaVideoProps {
  url: string
  options?: PlayerConfigOptions
  className?: string
  onReady?: (player: Player) => void
}

const SvgaVideo = forwardRef<SvgaVideoRef, SvgaVideoProps>((props, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const playerRef = useRef<Player>(null)
  const isnitializedRef = useRef(false)

  useImperativeHandle(ref, () => ({
    player: playerRef.current,
    play: () => {
      if (playerRef.current) {
        playerRef.current.start()
      }
    },
  }))

  useEffect(() => {
    if (isnitializedRef.current) {
      return
    }

    const initSvga = async () => {
      if (canvasRef.current && !isnitializedRef.current) {
        isnitializedRef.current = true
        const url = props.url
        const db = new DB()
        let svga = await db.find(url)
        if (!svga) {
          const parser = new Parser({ isDisableImageBitmapShim: true })
          svga = await parser.load(url)
          await db.insert(url, svga)
        }
        const player = new Player({
          container: canvasRef.current,
          loop: 1, isCacheFrames: true,
          isUseIntersectionObserver: true,
          isOpenNoExecutionDelay: true,
          startFrame: 1,
          ...props.options
        })
        await player.mount(svga)

        // 模拟停留在第一帧
        player.start()
        player.pause()

        playerRef.current = player
        props.onReady?.(player)

        if (props.options && props.options.loop) {
          player.start()
        }
      }
    }
    if (props.url) {
      initSvga()

    }

    // 清理函数
    return () => {
      if (playerRef.current) {
        playerRef.current.stop()
        playerRef.current = null
      }
    }
  }, [props, props.onReady, props.url])


  return (
    <canvas ref={canvasRef} className={twMerge('w-screen h-[1220px] object-cover inset-0 z-40', props.className)} />
  )
})

SvgaVideo.displayName = 'SvgaVideo'

export default SvgaVideo