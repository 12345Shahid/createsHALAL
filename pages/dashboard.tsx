"use client"

import { useState } from "react"
import {
  Sun,
  Moon,
  MoreVertical,
  Mail,
  Home,
  Layout,
  User,
  PenTool,
  Bell,
  FileText,
  Clock,
  DollarSign,
  Gift,
  Info,
} from "lucide-react"
import { motion } from "framer-motion"

// Menu items for navigation
const menuItems = [
  { id: 1, icon: Home, label: "Homepage", href: "/" },
  { id: 2, icon: Layout, label: "Dashboard", href: "/dashboard" },
  { id: 3, icon: User, label: "Profile", href: "/profile" },
  { id: 4, icon: PenTool, label: "Tool Selector", href: "/tool-selection" },
  { id: 5, icon: Bell, label: "Notifications", href: "/notifications" },
  { id: 6, icon: FileText, label: "File Manager", href: "/files" },
  { id: 7, icon: Clock, label: "History", href: "/history" },
  { id: 8, icon: DollarSign, label: "Pricing", href: "/pricing" },
  { id: 9, icon: Gift, label: "Referral Program", href: "/referral" },
  { id: 10, icon: Mail, label: "Contact Us", href: "/contact" },
  { id: 11, icon: Info, label: "About Us", href: "/about" },
  { id: 12, icon: PenTool, label: "Build Your Own GPT", href: "/build-your-own-gpt" },
]

const Dashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200`}>
      <div className="container mx-auto px-4 py-8">
        
        {/* Header with Dark Mode Toggle and Menu */}
        <header className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {isDarkMode ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-gray-500" />}
            </button>
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <MoreVertical className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </button>

              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50 py-1">
                  {menuItems.map((item) => (
                    <a
                      key={item.id}
                      href={item.href}
                      className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <item.icon className="h-5 w-5 mr-3" />
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Build Your Own AI – Get Started Today!
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p className="flex items-center">
                <span className="text-2xl mr-2">🚀</span>
                Want to create your own AI? Whether you're looking to access the API of any model used on this website
                or want to launch your own AI-powered business, we've got you covered!
              </p>
              <p className="flex items-center">
                <span className="text-2xl mr-2">💡</span>
                No complicated processes. No hidden fees. Just pure innovation at your fingertips!
              </p>
              <div>
                <h3 className="text-xl font-semibold mb-2">📩 How to Get Started?</h3>
                <p>Simply reach out to us at:</p>
                <a
                  href="mailto:shahidhasanpollob@gmail.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  shahidhasanpollob@gmail.com
                </a>
              </div>
              <p className="font-bold">✨ And yes, it’s completely FREE – as always!</p>
            </div>
          </motion.div>

          {/* Additional content can be added here if needed */}
        </main>
      </div>
    </div>
  )
}

export default Dashboard