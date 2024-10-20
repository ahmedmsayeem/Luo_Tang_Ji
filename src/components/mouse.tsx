'use client'

import React, { useState, useEffect, useRef } from 'react'

interface BallPosition {
  x: number
  y: number
}

const FollowCursor: React.FC = () => {
  const [cursorPos, setCursorPos] = useState<BallPosition>({ x: 0, y: 0 })
  const [ballPos, setBallPos] = useState<BallPosition>({ x: 0, y: 0 })
  const requestRef = useRef<number>()

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPos({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const animateBall = () => {
    setBallPos(prevPos => {
      const dx = cursorPos.x - prevPos.x
      const dy = cursorPos.y - prevPos.y
      return {
        x: prevPos.x + dx * 0.1,
        y: prevPos.y + dy * 0.1
      }
    })
    requestRef.current = requestAnimationFrame(animateBall)
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateBall)
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <div
        className="absolute w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
        style={{
          left: `${ballPos.x}px`,
          top: `${ballPos.y}px`,
          boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)'
        }}
      />
    </div>
  )
}

export default FollowCursor