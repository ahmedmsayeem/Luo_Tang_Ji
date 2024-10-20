'use client'

import React, { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Users, Video, Youtube, Mic, Camera, Maximize2, Minimize2 } from "lucide-react"

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
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isCameraOn, setIsCameraOn] = useState(false)
  const [isMicrophoneOn, setIsMicrophoneOn] = useState(false)

  const userVideoRef = useRef<HTMLVideoElement>(null)
  const videoGridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }
  }, [])

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

  const handleToggleFullscreen = () => {
    if (!isFullscreen) {
      if (videoGridRef.current) {
        videoGridRef.current.requestFullscreen()
      }
    } else {
      document.exitFullscreen()
    }
  }

  const handleCameraToggle = async () => {
    if (!isCameraOn) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: isMicrophoneOn })
        if (userVideoRef.current) {
          userVideoRef.current.srcObject = stream
          setIsCameraOn(true)
        }
      } catch (error) {
        console.error("Error accessing camera:", error)
      }
    } else {
      if (userVideoRef.current && userVideoRef.current.srcObject) {
        const tracks = (userVideoRef.current.srcObject as MediaStream).getTracks()
        tracks.forEach(track => track.stop())
      }
      setIsCameraOn(false)
    }
  }

  const handleMicrophoneToggle = async () => {
    if (!isMicrophoneOn) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
        setIsMicrophoneOn(true)
        if (userVideoRef.current && userVideoRef.current.srcObject) {
          const videoTrack = (userVideoRef.current.srcObject as MediaStream).getVideoTracks()[0]
          if (videoTrack) {
            (userVideoRef.current.srcObject as MediaStream).addTrack(stream.getAudioTracks()[0])
          }
        }
      } catch (error) {
        console.error("Error accessing microphone:", error)
      }
    } else {
      if (userVideoRef.current && userVideoRef.current.srcObject) {
        const audioTrack = (userVideoRef.current.srcObject as MediaStream).getAudioTracks()[0]
        if (audioTrack) {
          (userVideoRef.current.srcObject as MediaStream).removeTrack(audioTrack)
        }
      }
      setIsMicrophoneOn(false)
    }
  }

  return (
    <div className="w-full h-full"> {/* Full width and height */}
      <Card className={`flex flex-col w-full h-full ${isFullscreen ? 'fixed inset-0 z-50' : 'h-[100%]'}`}>
        <CardContent ref={videoGridRef} className="flex-grow flex items-center justify-center p-6 relative w-full h-full">
          {isStreaming ? (
            isGroupDiscussion ? (
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
          {isCameraOn && (
            <video
              ref={userVideoRef}
              autoPlay
              muted={!isMicrophoneOn}
              className="absolute bottom-4 right-4 w-32 h-32 rounded-full border-2 border-white object-cover"
            />
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
            <div className="flex items-center justify-between gap-4 flex-wrap">
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

              <div className="flex items-center gap-2 flex-wrap">
                <Button onClick={handleCameraToggle} variant={isCameraOn ? "default" : "secondary"} className="flex items-center gap-2">
                  <Camera className="h-4 w-4" />
                  {isCameraOn ? "Camera On" : "Camera Off"}
                </Button>
                <Button onClick={handleMicrophoneToggle} variant={isMicrophoneOn ? "default" : "secondary"} className="flex items-center gap-2">
                  <Mic className="h-4 w-4" />
                  {isMicrophoneOn ? "Mic On" : "Mic Off"}
                </Button>
                <Button onClick={handleToggleFullscreen} variant="outline" className="flex items-center gap-2">
                  {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                  {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                </Button>
              </div>

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

const getYoutubeVideoId = (url: string) => {
  const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^&\n]{11})/)
  return match ? match[1] : ''
}
