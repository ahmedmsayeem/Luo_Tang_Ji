'use client'

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, FileText, ListTodo, Plus, Trash2, Edit2, Save, } from "lucide-react"
import { toast, Toaster } from 'sonner'
import VideoStreaming from '@/components/main/Cards'
import PlantAndMusicPlayer from '@/components/main/rightPlant'


export default function StudyPage() {
  const [activeCard, setActiveCard] = useState('timer')
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [timer, setTimer] = useState(25 * 60)
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [notes, setNotes] = useState([{ id: 1, title: 'Note 1', content: '' }])
  const [activeNoteId, setActiveNoteId] = useState(1)
  const [editingNoteId, setEditingNoteId] = useState<number|null>(null)
  const [editingNoteTitle, setEditingNoteTitle] = useState('')
  const [todos, setTodos] = useState([
    { id: 1, text: 'Complete assignment', completed: false },
    { id: 2, text: 'Review notes', completed: false },
    { id: 3, text: 'Prepare for exam', completed: false },
  ])
  const [newTodo, setNewTodo] = useState('')
  const [editingTodoId, setEditingTodoId] = useState<number|null>(null)
  const [editingTodoText, setEditingTodoText] = useState('')

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

  const handleDeleteNote = (id: number) => {
    setNotes(notes.filter(note => note.id !== id))
    if (activeNoteId === id) {
      setActiveNoteId(notes[0]?.id)
    }
  }

  const handleEditNoteTitle = (id: number, title: string) => {
    setEditingNoteId(id)
    setEditingNoteTitle(title)
  }

  const handleSaveNoteTitle = () => {
    setNotes(notes.map(note => 
      note.id === editingNoteId ? { ...note, title: editingNoteTitle } : note
    ))
    setEditingNoteId(null)
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

  const handleEditTodo = (id: number, text: string) => {
    setEditingTodoId(id)
    setEditingTodoText(text)
  }

  const handleSaveTodo = () => {
    setTodos(todos.map(todo => 
      todo.id === editingTodoId ? { ...todo, text: editingTodoText } : todo
    ))
    setEditingTodoId(null)
  }

  const cards = [
    { id: 'timer', title: 'Timer', icon: <Clock className="h-6 w-6" /> },
    { id: 'notes', title: 'Notes', icon: <FileText className="h-6 w-6" /> },
    { id: 'todo', title: 'Todo', icon: <ListTodo className="h-6 w-6" /> },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="flex flex-col lg:flex-row gap-4 h-[70vh]">
        {/* Left side - Cards */}
        <div className="w-full lg:w-1/4 flex flex-col h-full">
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
          <div className="relative flex-grow overflow-hidden">
            {cards.map((card) => (
              <Card
                key={card.id}
                className={`absolute inset-0 transition-all duration-300 ease-in-out overflow-auto ${
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
                      <div className="space-y-2">
                        <Label>Custom Timer (minutes)</Label>
                        <Input
                          type="number"
                          min="1"
                          max="120"
                          value={Math.floor(timer / 60)}
                          onChange={(e) => setTimer(parseInt(e.target.value) * 60)}
                          className="bg-gray-800 text-white"
                        />
                      </div>
                    </div>
                  )}
                  {card.id === 'notes' && (
                    <div className="space-y-4">
                      <Tabs value={activeNoteId.toString()} onValueChange={(value) => setActiveNoteId(parseInt(value))}>
                        <div className="flex items-center justify-between mb-2">
                          <TabsList className="bg-gray-800">
                            {notes.map((note) => (
                              <TabsTrigger key={note.id} value={note.id.toString()} className="data-[state=active]:bg-gray-700">
                                {editingNoteId === note.id ? (
                                  <Input
                                    value={editingNoteTitle}
                                    onChange={(e) => setEditingNoteTitle(e.target.value)}
                                    onBlur={handleSaveNoteTitle}
                                    className="w-24 bg-gray-800 text-white"
                                  />
                                ) : (
                                  <span onClick={(e) => e.preventDefault()}>{note.title}</span>
                                )}
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    if (editingNoteId === note.id) {
                                      handleSaveNoteTitle()
                                    } else {
                                      handleEditNoteTitle(note.id, note.title)
                                    }
                                  }}
                                >
                                  {editingNoteId === note.id ? <Save className="h-4 w-4" /> : <Edit2 className="h-4 w-4" />}
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    handleDeleteNote(note.id)
                                  }}
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </TabsTrigger>
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
                          onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
                          className="flex-grow bg-gray-800 text-white"
                        />
                        <Button onClick={handleAddTodo}>Add</Button>
                      </div>
                      <ul className="space-y-2 max-h-[250px] overflow-y-auto">
                        {todos.map((todo) => (
                          <li key={todo.id} className="flex items-center justify-between">
                            {editingTodoId === todo.id ? (
                              <Input
                                value={editingTodoText}
                                onChange={(e) => setEditingTodoText(e.target.value)}
                                onBlur={handleSaveTodo}
                                className="flex-grow bg-gray-800 text-white mr-2"
                              />
                            ) : (
                              <div className="flex items-center gap-2 flex-grow">
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
                            )}
                            <div className="flex items-center">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => editingTodoId === todo.id ? handleSaveTodo() : handleEditTodo(todo.id, todo.text)}
                              >
                                {editingTodoId === todo.id ? <Save className="h-4 w-4" /> : <Edit2 className="h-4 w-4" />}
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleDeleteTodo(todo.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
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
        <div className="w-full lg:w-1/2 h-full">
          <VideoStreaming />
        </div>

        {/* Right side - Plant and Music Player */}
        <PlantAndMusicPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
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