'use client'

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Users, Video, Youtube } from "lucide-react"

// Replace with your local video file paths
const videoLinks = [
  "/videos/1.mp4",
  "/videos/2.mp4",
  "/videos/3.mp4",
  "/videos/4.mp4",
  "/videos/5.mp4",
  "/videos/6.mp4",
]

export default function VideoStreaming() {
  const [isGroupDiscussion, setIsGroupDiscussion] = useState(false)
  const [youtubeUrl, setYoutubeUrl] = useState("")
  const [isStreaming, setIsStreaming] = useState(false)

  const handleToggle = () => {
    setIsGroupDiscussion(!isGroupDiscussion)
    setIsStreaming(false)
  }

  const handleStartStream = () => {
    setIsStreaming(true)
  }

  const handleStopStream = () => {
    setIsStreaming(false)
  }

  return (
    <div className="w-full lg:w-1/2 space-y-4">
      <Card className="h-[400px] flex flex-col">
        <CardContent className="flex-grow flex items-center justify-center p-6">
          {isStreaming ? (
            isGroupDiscussion ? (
              // Display 6 videos in grid layout for Group Discussion
              <div className="w-full h-full bg-gray-800 rounded-lg grid grid-cols-2 md:grid-cols-3 gap-2">
                {videoLinks.map((videoSrc, index) => (
                  <div key={index} className="bg-gray-700 w-full h-full rounded-lg overflow-hidden">
                    <video
                      src={videoSrc}
                      controls
                      autoPlay
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            ) : (
              // YouTube streaming mode
              <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center">
                {youtubeUrl ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${getYoutubeVideoId(youtubeUrl)}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <p className="text-white text-lg">Please enter a valid YouTube URL</p>
                )}
              </div>
            )
          ) : (
            <div className="flex flex-col items-center gap-4">
              {isGroupDiscussion ? (
                <Users className="h-16 w-16 text-gray-400" />
              ) : (
                <Youtube className="h-16 w-16 text-gray-400" />
              )}
              <p className="text-lg font-semibold text-gray-300">
                {isGroupDiscussion ? "Ready for Group Discussion" : "Ready to Stream YouTube"}
              </p>
            </div>
          )}
        </CardContent>
        <CardContent className="p-6">
          <div className="flex flex-col gap-4">
            {!isGroupDiscussion && (
              <div className="flex flex-col gap-2">
                <Label htmlFor="youtube-url">YouTube Video URL</Label>
                <Input
                  id="youtube-url"
                  type="text"
                  placeholder="https://www.youtube.com/watch?v=..."
                  value={youtubeUrl}
                  onChange={(e) => setYoutubeUrl(e.target.value)}
                  className="bg-gray-700 text-white border-gray-600"
                />
              </div>
            )}
            <div className="flex items-center justify-between">
              <Button
                onClick={isStreaming ? handleStopStream : handleStartStream}
                variant={isStreaming ? "destructive" : "default"}
                className="flex items-center gap-2"
              >
                {isStreaming ? (
                  <>
                    <Video className="h-4 w-4" />
                    Stop {isGroupDiscussion ? "Discussion" : "Stream"}
                  </>
                ) : (
                  <>
                    <Video className="h-4 w-4" />
                    Start {isGroupDiscussion ? "Discussion" : "Stream"}
                  </>
                )}
              </Button>
              <div className="flex items-center space-x-2">
                <Label htmlFor="stream-mode" className="text-sm">
                  {isGroupDiscussion ? "Group Discussion" : "YouTube Stream"}
                </Label>
                <Switch
                  id="stream-mode"
                  checked={isGroupDiscussion}
                  onCheckedChange={handleToggle}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function getYoutubeVideoId(url: string) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
  const match = url.match(regExp)
  return (match && match[2].length === 11) ? match[2] : null
}
