import Link from "next/link"
import { Wallet2 } from 'lucide-react'

export default function Footer({ openModal }: { openModal: (e: React.MouseEvent) => void }) {
  return (
    <footer className="border-t border-gray-800 bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <Link className="flex items-center space-x-2" href="/" onClick={openModal}>
              <Wallet2 className="h-6 w-6 text-[#14F195]" />
              <span className="text-xl font-bold">DQuiz</span>
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Decentralized Quiz Platform with Crypto Rewards
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link className="text-sm text-gray-400 hover:text-[#14F195]" href="#features" onClick={openModal}>
                  Features
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-400 hover:text-[#14F195]" href="#how-it-works" onClick={openModal}>
                  How it Works
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-400 hover:text-[#14F195]" href="#prizes" onClick={openModal}>
                  Prizes
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-400 hover:text-[#14F195]" href="#about" onClick={openModal}>
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link className="text-sm text-gray-400 hover:text-[#14F195]" href="#" onClick={openModal}>
                  Discord
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-400 hover:text-[#14F195]" href="#" onClick={openModal}>
                  Twitter
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-400 hover:text-[#14F195]" href="#" onClick={openModal}>
                  Telegram
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-400 hover:text-[#14F195]" href="#" onClick={openModal}>
                  Medium
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link className="text-sm text-gray-400 hover:text-[#14F195]" href="#" onClick={openModal}>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-400 hover:text-[#14F195]" href="#" onClick={openModal}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-400 hover:text-[#14F195]" href="#" onClick={openModal}>
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2024 DQuiz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

