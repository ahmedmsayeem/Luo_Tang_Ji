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
      className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col items-center justify-between font-[family-name:var(--font-geist-sans)] bg-gray-900 text-gray-100`}
    >
      <div className="w-full bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 md:py-24 ">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12">
            <div className="flex-1 text-center md:text-left space-y-8">


              <div className=" p-4 md:p- rounded-lg inline-block">
              <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white relative top-[-150px]">
                Study Together
              </h1>

              </div>
              <p className="text-lg md:text-xl text-gray-300 max-w-lg md:max-w-prose relative top-[-50px]">
                Connect with random strangers, boost productivity, and grow together in a calming, aesthetic environment.
              </p>
              <div className="flex gap-4 items-center justify-center md:justify-start  relative top-[-30px]">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-white text-gray-900 hover:bg-gray-200"
                >
                  <Link href="/signup">Get Started</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border-gray-500 hover:bg-gray-700"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center md:justify-end relative top-[-100px]">
              <MacintoshIllustration />
            </div>
          </div>
        </div>
      </div>

      <main className="w-full max-w-6xl mx-auto flex flex-col items-center gap-16 px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <FeatureCard
            icon={<Clock className="h-8 w-8 text-blue-400" />}
            title="Focused Sessions"
            description="Use our minimalist timer to track your study sessions and stay on task."
          />
          <FeatureCard
            icon={<Music className="h-8 w-8 text-green-400" />}
            title="Ambient Sounds"
            description="Enjoy calming background music to enhance your concentration."
          />
          <FeatureCard
            icon={<Plane className="h-8 w-8 text-yellow-400" />}
            title="Growth Visualization"
            description="Watch your virtual plant thrive as you maintain focus and productivity."
          />
          <FeatureCard
            icon={<Users className="h-8 w-8 text-purple-400" />}
            title="Study Buddies"
            description="Connect with like-minded individuals for motivation and light interaction."
          />
        </div>
      </main>

      <footer className="w-full bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6 flex-wrap items-center justify-center text-center text-sm text-gray-400">
            <a
              className="flex items-center gap-2 hover:underline hover:text-white transition-colors"
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
              className="flex items-center gap-2 hover:underline hover:text-white transition-colors"
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
              className="flex items-center gap-2 hover:underline hover:text-white transition-colors"
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
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { title: string; description: string; icon: React.ReactNode }) {
  return (
    <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
      <CardHeader>
        <CardTitle className="flex items-center space-x-3 text-xl">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-300">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}