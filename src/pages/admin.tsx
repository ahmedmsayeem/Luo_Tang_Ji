'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Clock, FileText, ListTodo, Video, Users, Music, Play, Pause, SkipBack, SkipForward } from "lucide-react"

export default function StudyPage() {
  const [activeCard, setActiveCard] = useState('timer')
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0
        }
        const diff = Math.random() * 10
        return Math.min(oldProgress + diff, 100)
      })
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const cards = [
    { id: 'timer', title: 'Timer', icon: <Clock className="h-6 w-6" /> },
    { id: 'notes', title: 'Notes', icon: <FileText className="h-6 w-6" /> },
    { id: 'todo', title: 'Todo', icon: <ListTodo className="h-6 w-6" /> },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Left side - Cards */}
        <div className="w-full lg:w-1/4 space-y-4">
          <div className="flex justify-between mb-2">
            {cards.map((card) => (
              <Button
                key={card.id}
                onClick={() => setActiveCard(card.id)}
                variant={activeCard === card.id ? "default" : "secondary"}
                className="z-10"
              >
                {card.icon}
              </Button>
            ))}
          </div>
          <div className="relative h-[400px]">
            {cards.map((card) => (
              <Card
                key={card.id}
                className={`absolute inset-0 transition-all duration-300 ease-in-out ${
                  activeCard === card.id
                    ? 'z-20 opacity-100 translate-y-0'
                    : 'z-10 opacity-60 -translate-y-4'
                }`}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {card.icon}
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {card.id === 'timer' && (
                    <div className="text-4xl font-bold text-center">25:00</div>
                  )}
                  {card.id === 'notes' && (
                    <textarea
                      className="w-full h-[300px] bg-gray-800 text-white border-none rounded-md p-2"
                      placeholder="Take your notes here..."
                    ></textarea>
                  )}
                  {card.id === 'todo' && (
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <input type="checkbox" id="task1" className="rounded text-blue-500" />
                        <label htmlFor="task1">Complete assignment</label>
                      </li>
                      <li className="flex items-center gap-2">
                        <input type="checkbox" id="task2" className="rounded text-blue-500" />
                        <label htmlFor="task2">Review notes</label>
                      </li>
                      <li className="flex items-center gap-2">
                        <input type="checkbox" id="task3" className="rounded text-blue-500" />
                        <label htmlFor="task3">Prepare for exam</label>
                      </li>
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Center - Video area */}
        <div className="w-full lg:w-1/2 space-y-4">
          <Card className="h-[400px] flex items-center justify-center">
            <CardContent>
              <div className="flex flex-col items-center gap-4">
                <Video className="h-16 w-16" />
                <Button className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Start Video Discussion
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right side - Plant and Music Player */}
        <div className="w-full lg:w-1/4 space-y-4">
          <Card className="h-[400px] flex flex-col justify-between">
            <CardContent className="flex-grow flex items-center justify-center">
              <div className="relative">
                <div className="w-32 h-64 bg-green-700 rounded-full mx-auto" />
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-16 bg-red-500 rounded-full" />
                <div className="absolute top-4 right-0 w-16 h-16 bg-yellow-500 rounded-full" />
              </div>
            </CardContent>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Button variant="ghost" size="icon">
                    <SkipBack className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => setIsPlaying(!isPlaying)}>
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </Button>
                  <Button variant="ghost" size="icon">
                    <SkipForward className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <Music className="h-4 w-4" />
                  <span className="text-sm">Lofi Study Beats</span>
                </div>
                <Slider defaultValue={[50]} max={100} step={1} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom - Progress Bar */}
      <div className="mt-8">
        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}