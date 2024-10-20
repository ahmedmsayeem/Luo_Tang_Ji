import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Music, Leaf, Users, BarChart, MessageCircle } from "lucide-react";

import localFont from "next/font/local";

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

export default function HowItWorksPage() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col items-center justify-between font-[family-name:var(--font-geist-sans)] bg-gray-900 text-gray-100`}
    >
      <header className="w-full bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center">How It Works</h1>
          <p className="mt-4 text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Discover how Study Together helps you boost productivity and connect with others
          </p>
        </div>
      </header>

      <main className="w-full max-w-6xl mx-auto flex flex-col items-center gap-16 px-4 sm:px-6 lg:px-8 py-16">
        <section className="w-full">
          <h2 className="text-3xl font-bold mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              icon={<Clock className="h-8 w-8 text-blue-400" />}
              title="Easy-to-Access Tools"
              description="All the tools you need for a productive study session are conveniently located on the left side of the study page. Access timers, to-do lists, and more with just a click."
            />
            <FeatureCard
              icon={<Leaf className="h-8 w-8 text-green-400" />}
              title="Growth Visualization"
              description="Watch your virtual plant thrive as you maintain focus and avoid distractions. The plant's growth reflects your study quality and dedication."
            />
            <FeatureCard
              icon={<Music className="h-8 w-8 text-yellow-400" />}
              title="Ambient Sounds"
              description="Enhance your concentration with our easy-to-use music player. Choose from a variety of calming background sounds to create the perfect study atmosphere."
            />
            <FeatureCard
              icon={<BarChart className="h-8 w-8 text-purple-400" />}
              title="Progress Tracking"
              description="Stay motivated with our real-time progress bar. Visualize how your study session is going and track your productivity over time."
            />
            <FeatureCard
              icon={<Users className="h-8 w-8 text-pink-400" />}
              title="Study Buddies"
              description="Connect with like-minded individuals for motivation and accountability. Find study partners who share your goals and interests."
            />
            <FeatureCard
              icon={<MessageCircle className="h-8 w-8 text-indigo-400" />}
              title="Communication"
              description="Easily communicate with people you connect with through our integrated chat feature. Share tips, ask questions, or simply encourage each other."
            />
          </div>
        </section>

        <section className="w-full bg-gray-800 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">How to Get Started</h2>
          <ol className="list-decimal list-inside space-y-4 text-lg">
            <li>Sign up for a free account on our homepage</li>
            <li>Set up your profile and study preferences</li>
            <li>Join a study room or create your own</li>
            <li>Use the tools on the left sidebar to manage your study session</li>
            <li>Stay focused and watch your virtual plant grow</li>
            <li>Connect with other students and share your progress</li>
          </ol>
        </section>

        <section className="w-full text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Boost Your Productivity?</h2>
          <Button
            asChild
            size="lg"
            className="rounded-full bg-white text-gray-900 hover:bg-gray-200"
          >
            <Link href="/signup">Get Started Now</Link>
          </Button>
        </section>
      </main>

      <footer className="w-full bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6 flex-wrap items-center justify-center text-center text-sm text-gray-400">
            <Link href="/" className="hover:underline hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:underline hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:underline hover:text-white transition-colors">
              Contact
            </Link>
            <a
              className="hover:underline hover:text-white transition-colors"
              href="https://github.com/yourusername/study-together"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
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