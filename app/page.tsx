"use client"

import { useState, useCallback } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Wallet2, Trophy, Users, ArrowRight, Star } from 'lucide-react'
import Footer from "@/components/footer"
import { DevelopmentModal } from "@/components/development-modal"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    setIsModalOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="border-b border-gray-800">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link className="flex items-center space-x-2" href="/" onClick={openModal}>
            <Wallet2 className="h-6 w-6 text-[#14F195]" />
            <span className="text-xl font-bold">DQuiz</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link className="text-sm font-medium hover:text-[#14F195]" href="#features" onClick={openModal}>
              Features
            </Link>
            <Link className="text-sm font-medium hover:text-[#14F195]" href="#how-it-works" onClick={openModal}>
              How it Works
            </Link>
            <Link className="text-sm font-medium hover:text-[#14F195]" href="#prizes" onClick={openModal}>
              Prizes
            </Link>
            <Link className="text-sm font-medium hover:text-[#14F195]" href="#about" onClick={openModal}>
              About
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="border-[#9945FF] text-[#9945FF] hover:bg-[#9945FF] hover:text-white" onClick={openModal}>
              Connect Wallet
            </Button>
            <Button className="bg-[#14F195] text-black hover:bg-[#0fd584]" onClick={openModal}>Create Quiz</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="container mx-auto px-4 py-16 text-center md:py-24">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="inline-flex items-center rounded-full border border-[#9945FF] bg-[#9945FF]/10 px-3 py-1 text-sm text-[#9945FF]">
              🎉 Join the future of interactive quizzes
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Decentralized Quiz Platform with <span className="text-[#14F195]">Crypto Rewards</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
              Create engaging quizzes with real crypto prizes. Winners get instant payouts directly to their wallets.
            </p>
            <div className="mx-auto max-w-md space-y-4">
              <div className="relative">
                <Input
                  className="pl-4 pr-20 py-6 text-lg rounded-full bg-gray-900 border-gray-700 text-white placeholder-gray-500"
                  placeholder="Enter quiz code"
                  type="text"
                />
                <Button className="absolute right-1.5 top-1.5 rounded-full bg-[#14F195] text-black hover:bg-[#0fd584]" onClick={openModal}>
                  Join
                </Button>
              </div>
              <p className="text-sm text-gray-500">or</p>
              <Button className="w-full bg-[#9945FF] text-white hover:bg-[#8934e0]" size="lg" onClick={openModal}>
                Create Your Own Quiz
              </Button>
            </div>
          </div>
        </section>

        <section className="border-t border-gray-800 bg-gray-900">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  It's how you include <span className="text-[#14F195]">everyone</span> in your meetups
                </h2>
                <p className="text-xl text-gray-400">
                  DQuiz offers all the tools you need to captivate participants, collect their insights, and foster a sense of connection—whether you're organizing a competitive team quiz, an interactive training session, or a large-scale company-wide event.
                </p>
                <Button size="lg" className="bg-[#14F195] text-black hover:bg-[#0fd584]" onClick={openModal}>
                  Start Engaging Now
                </Button>
              </div>
              <div className="relative h-[400px]">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Engaging meetup illustration"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Recent Quizzes and <span className="text-[#14F195]">Winners</span>
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#14F195]">Crypto Trivia Night</h3>
                  <p className="text-sm text-gray-400 mb-4">Total Prize: 0.5 ETH</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=32&width=32" />
                          <AvatarFallback>W1</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">CryptoKing</span>
                      </div>
                      <span className="text-[#14F195] font-bold">0.25 ETH</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=32&width=32" />
                          <AvatarFallback>W2</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">BlockchainGuru</span>
                      </div>
                      <span className="text-[#14F195] font-bold">0.15 ETH</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=32&width=32" />
                          <AvatarFallback>W3</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">SatoshiFan</span>
                      </div>
                      <span className="text-[#14F195] font-bold">0.1 ETH</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#9945FF]">DeFi Knowledge Challenge</h3>
                  <p className="text-sm text-gray-400 mb-4">Total Prize: 1000 USDC</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=32&width=32" />
                          <AvatarFallback>W1</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">DeFiWhiz</span>
                      </div>
                      <span className="text-[#9945FF] font-bold">500 USDC</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=32&width=32" />
                          <AvatarFallback>W2</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">YieldFarmer</span>
                      </div>
                      <span className="text-[#9945FF] font-bold">300 USDC</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=32&width=32" />
                          <AvatarFallback>W3</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">LiquidityPro</span>
                      </div>
                      <span className="text-[#9945FF] font-bold">200 USDC</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#14F195]">NFT Art Quiz</h3>
                  <p className="text-sm text-gray-400 mb-4">Total Prize: 2 SOL</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=32&width=32" />
                          <AvatarFallback>W1</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">PixelArtist</span>
                      </div>
                      <span className="text-[#14F195] font-bold">1 SOL</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=32&width=32" />
                          <AvatarFallback>W2</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">NFTCollector</span>
                      </div>
                      <span className="text-[#14F195] font-bold">0.6 SOL</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=32&width=32" />
                          <AvatarFallback>W3</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">CryptoArtFan</span>
                      </div>
                      <span className="text-[#14F195] font-bold">0.4 SOL</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              What Our <span className="text-[#14F195]">Users</span> Say
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">John Doe</p>
                      <p className="text-sm text-gray-400">Crypto Enthusiast</p></div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    "DQuiz has revolutionized our team building activities. The crypto rewards add a whole new level of excitement!"
                  </p>
                  <div className="flex text-[#14F195]">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Jane Smith</p>
                      <p className="text-sm text-gray-400">DeFi Developer</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    "As a developer, I appreciate the transparency and fairness that DQuiz brings to online competitions. It's a game-changer!"
                  </p>
                  <div className="flex text-[#9945FF]">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>AT</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Alex Thompson</p>
                      <p className="text-sm text-gray-400">Community Manager</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    "DQuiz has become an essential tool for our community engagement. The instant rewards keep everyone motivated and excited!"
                  </p>
                  <div className="flex text-[#14F195]">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="border-t border-gray-800 bg-gray-900">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="space-y-4 text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-[#14F195]/10 flex items-center justify-center">
                  <Trophy className="h-8 w-8 text-[#14F195]" />
                </div>
                <h3 className="text-xl font-bold text-[#14F195]">Win Crypto Prizes</h3>
                <p className="text-gray-400">Top 3 winners receive instant crypto payouts directly to their wallets</p>
              </div>
              <div className="space-y-4 text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-[#9945FF]/10 flex items-center justify-center">
                  <Wallet2 className="h-8 w-8 text-[#9945FF]" />
                </div>
                <h3 className="text-xl font-bold text-[#9945FF]">Decentralized</h3>
                <p className="text-gray-400">Built on blockchain technology ensuring transparency and fairness</p>
              </div>
              <div className="space-y-4 text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-[#14F195]/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-[#14F195]" />
                </div>
                <h3 className="text-xl font-bold text-[#14F195]">Interactive Experience</h3>
                <p className="text-gray-400">Engage with participants through live polls, Q&A, and quizzes</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer openModal={openModal} />
      <DevelopmentModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}

