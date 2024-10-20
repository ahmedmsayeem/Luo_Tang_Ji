// PlantAndMusicPlayer.tsx
import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Music, SkipBack, SkipForward, Play, Pause } from "lucide-react"
import { Slider } from "@/components/ui/slider" // Assuming you have a Slider component

interface PlantAndMusicPlayerProps {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

const PlantAndMusicPlayer: React.FC<PlantAndMusicPlayerProps> = ({ isPlaying, setIsPlaying }) => {
  return (
    <div className="w-full lg:w-1/4 space-y-4 h-full">
      <Card className="h-full flex flex-col justify-between">
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
  )
}

export default PlantAndMusicPlayer
