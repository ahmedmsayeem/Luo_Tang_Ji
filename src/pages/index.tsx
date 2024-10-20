import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Music, Plane, Users } from "lucide-react";
import Image from "next/image";
import localFont from "next/font/local";
import MacintoshIllustration from "@/components/monitor";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function HomePage() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-900 text-gray-100`}
    >
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            
            
          <div className="flex flex-row justify-between items-center w-full">
            <div className="bg-gray-800 p-3 rounded-lg flex-1">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Study Together
              </h1>
            </div>
            <div className="flex-1 flex justify-end">
              <MacintoshIllustration />
            </div>
          </div>

            
            
           
            <main className="max-w-4xl w-full space-y-8 text-center">
              
              <p className="text-xl text-muted-foreground max-w-prose mx-auto">
                Connect with random strangers, boost productivity, and grow together in a calming, aesthetic environment.
              </p>
          </main>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Button
            asChild
            size="lg"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-gray-100 text-gray-900 gap-2 hover:bg-gray-300 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            <Link href="/signup">Get Started</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full border border-solid border-gray-700 transition-colors flex items-center justify-center hover:bg-gray-800 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          >
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
          <FeatureCard
            icon={<Clock className="h-6 w-6" />}
            title="Focused Sessions"
            description="Use our minimalist timer to track your study sessions and stay on task."
          />
          <FeatureCard
            icon={<Music className="h-6 w-6" />}
            title="Ambient Sounds"
            description="Enjoy calming background music to enhance your concentration."
          />
          <FeatureCard
            icon={<Plane className="h-6 w-6" />}
            title="Growth Visualization"
            description="Watch your virtual plant thrive as you maintain focus and productivity."
          />
          <FeatureCard
            icon={<Users className="h-6 w-6" />}
            title="Study Buddies"
            description="Connect with like-minded individuals for motivation and light interaction."
          />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center mt-16 text-center text-sm text-muted-foreground">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
            className="invert"
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
            className="invert"
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
            className="invert"
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }:{title:string,description:string,icon:React.ReactNode}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-center space-x-2">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

