'use client'

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, FileText, ListTodo, Music, Play, Pause, SkipBack, SkipForward, Plus, Trash2 } from "lucide-react"
import { toast, Toaster } from 'sonner'
import VideoStreaming from '@/components/main/Cards'

export default function StudyPage() {
  const [activeCard, setActiveCard] = useState('timer')
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [timer, setTimer] = useState(25 * 60) // 25 minutes in seconds
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [notes, setNotes] = useState([{ id: 1, title: 'Note 1', content: '' }])
  const [activeNoteId, setActiveNoteId] = useState(1)
  const [todos, setTodos] = useState([
    { id: 1, text: 'Complete assignment', completed: false },
    { id: 2, text: 'Review notes', completed: false },
    { id: 3, text: 'Prepare for exam', completed: false },
  ])
  const [newTodo, setNewTodo] = useState('')

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) return 0
        const diff = Math.random() * 10
        return Math.min(oldProgress + diff, 100)
      })
    }, 500)

    return () => clearInterval(progressTimer)
  }, [])

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isTimerRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1)
      }, 1000)
    } else if (timer === 0) {
      setIsTimerRunning(false)
      toast.success('Timer completed!', {
        description: 'Time to take a break.',
      })
    }
    return () => clearInterval(interval)
  }, [isTimerRunning, timer])

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  const handleStartTimer = () => {
    setIsTimerRunning(true)
  }

  const handleStopTimer = () => {
    setIsTimerRunning(false)
  }

  const handleResetTimer = () => {
    setIsTimerRunning(false)
    setTimer(25 * 60)
  }

  const handleAddNote = () => {
    const newId = notes.length + 1
    setNotes([...notes, { id: newId, title: `Note ${newId}`, content: '' }])
    setActiveNoteId(newId)
  }

  const handleNoteChange = (content: string) => {
    setNotes(notes.map(note => 
      note.id === activeNoteId ? { ...note, content } : note
    ))
  }

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: todos.length + 1, text: newTodo, completed: false }])
      setNewTodo('')
    }
  }

  const handleToggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

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
                    <div className="space-y-4">
                      <div className="text-4xl font-bold text-center">{formatTime(timer)}</div>
                      <div className="flex justify-center space-x-2">
                        {!isTimerRunning ? (
                          <Button onClick={handleStartTimer}>Start</Button>
                        ) : (
                          <Button onClick={handleStopTimer} variant="destructive">Stop</Button>
                        )}
                        <Button onClick={handleResetTimer} variant="outline">Reset</Button>
                      </div>
                    </div>
                  )}
                  {card.id === 'notes' && (
                    <div className="space-y-4">
                      <Tabs value={activeNoteId.toString()} onValueChange={(value) => setActiveNoteId(parseInt(value))}>
                        <div className="flex items-center justify-between mb-2">
                          <TabsList>
                            {notes.map((note) => (
                              <TabsTrigger key={note.id} value={note.id.toString()}>{note.title}</TabsTrigger>
                            ))}
                          </TabsList>
                          <Button onClick={handleAddNote} size="sm"><Plus className="h-4 w-4" /></Button>
                        </div>
                        {notes.map((note) => (
                          <TabsContent key={note.id} value={note.id.toString()}>
                            <textarea
                              className="w-full h-[250px] bg-gray-800 text-white border-none rounded-md p-2"
                              placeholder="Take your notes here..."
                              value={note.content}
                              onChange={(e) => handleNoteChange(e.target.value)}
                            ></textarea>
                          </TabsContent>
                        ))}
                      </Tabs>
                    </div>
                  )}
                  {card.id === 'todo' && (
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Input
                          type="text"
                          placeholder="Add a new task"
                          value={newTodo}
                          onChange={(e) => setNewTodo(e.target.value)}
                          className="flex-grow"
                        />
                        <Button onClick={handleAddTodo}>Add</Button>
                      </div>
                      <ul className="space-y-2 max-h-[250px] overflow-y-auto">
                        {todos.map((todo) => (
                          <li key={todo.id} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                id={`task${todo.id}`}
                                checked={todo.completed}
                                onChange={() => handleToggleTodo(todo.id)}
                                className="rounded text-blue-500"
                              />
                              <Label
                                htmlFor={`task${todo.id}`}
                                className={todo.completed ? 'line-through text-gray-500' : ''}
                              >
                                {todo.text}
                              </Label>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDeleteTodo(todo.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Center - Video area */}
        <VideoStreaming />

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
      <Toaster />
    </div>
  )
}