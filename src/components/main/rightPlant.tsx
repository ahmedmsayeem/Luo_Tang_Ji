import React, { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Music, SkipBack, SkipForward, Play, Pause, Search } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import Image from 'next/image'

interface PlantAndMusicPlayerProps {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  progress: number;
  initialTime: number;
  timer: number;
}

interface AudioTrack {
  id: number;
  title: string;
  src: string;
}

const audioTracks: AudioTrack[] = [
  { id: 1, title: "Lofi Study Beats 1", src: "/audio/1.mp3" },
  { id: 2, title: "Relaxing Nature Sounds", src: "/audio/2.mp3" },
  { id: 3, title: "Classical Piano Mix", src: "/audio/3.mp3" },
  { id: 4, title: "Ambient Electronic", src: "/audio/4.mp3" },
  { id: 5, title: "Jazz Coffee Shop", src: "/audio/5.mp3" },
  { id: 6, title: "Meditation Zen", src: "/audio/6.mp3" },
]

const PlantAndMusicPlayer: React.FC<PlantAndMusicPlayerProps> = ({ isPlaying, setIsPlaying, initialTime, timer }) => {
  const [currentTrack, setCurrentTrack] = useState<AudioTrack>(audioTracks[0])
  const [searchQuery, setSearchQuery] = useState("")
  const [volume, setVolume] = useState(50)
  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play()
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying, currentTrack])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100
    }
  }, [volume])

  const filteredTracks = audioTracks.filter(track =>
    track.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleTrackSelect = (track: AudioTrack) => {
    setCurrentTrack(track)
    setIsPlaying(true)
  }

  const handleSkipBack = () => {
    const currentIndex = audioTracks.findIndex(track => track.id === currentTrack.id)
    const previousIndex = (currentIndex - 1 + audioTracks.length) % audioTracks.length
    setCurrentTrack(audioTracks[previousIndex])
  }

  const handleSkipForward = () => {
    const currentIndex = audioTracks.findIndex(track => track.id === currentTrack.id)
    const nextIndex = (currentIndex + 1) % audioTracks.length
    setCurrentTrack(audioTracks[nextIndex])
  }

  const toggleSearchVisibility = () => {
    setIsSearchVisible(prev => !prev)
  }

  // Function to determine which plant image to show based on the timer and initialTime
  const getPlantImage = () => {
    const elapsedTime = initialTime - timer
    const timePerStage = initialTime / 6
    const stage = Math.floor(elapsedTime / timePerStage) + 1
    return `/plant/${Math.min(Math.max(stage, 1), 6)}.png`
  }

  return (
    <div className="w-full lg:w-1/4 space-y-4 h-full">
      <Card className="h-full flex flex-col justify-between">
        <CardContent className="flex-grow flex items-center justify-center p-4">
          <div className="relative w-64 h-64">
            <Image
              src={getPlantImage()}
              alt="Growing plant"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </CardContent>
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <Search className="h-4 w-4 text-gray-400 cursor-pointer" onClick={toggleSearchVisibility} />
            <Input
              type="text"
              placeholder="Search tracks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow bg-gray-700 text-white border-gray-600"
            />
          </div>
          <div className="space-y-4">
            {isSearchVisible && (
              <ScrollArea className="h-32">
                <ul className="space-y-2">
                  {filteredTracks.map(track => (
                    <li
                      key={track.id}
                      className={`cursor-pointer p-2 rounded ${
                        track.id === currentTrack.id ? 'bg-gray-700' : 'hover:bg-gray-800'
                      }`}
                      onClick={() => handleTrackSelect(track)}
                    >
                      {track.title}
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            )}
            
            <div className="flex items-center gap-2">
              <Music className="h-4 w-4" />
              <span className="text-sm truncate">{currentTrack.title}</span>
            </div>
            <Slider
              value={[volume]}
              onValueChange={(value) => setVolume(value[0])}
              max={100}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between items-center">
              <Button variant="ghost" size="icon" onClick={handleSkipBack}>
                <SkipBack className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="icon" onClick={handleSkipForward}>
                <SkipForward className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      <audio ref={audioRef} src={currentTrack.src} />
    </div>
  )
}

export default PlantAndMusicPlayer