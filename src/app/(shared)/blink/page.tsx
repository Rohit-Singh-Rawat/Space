'use client'

import React from 'react'
import { Link2, BookOpen, Zap, ArrowRight, AlertCircle } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { motion } from 'framer-motion'

const blinksInfo = [
  {
    name: 'Original Blink',
    url: 'https://x.com/Spacing_Whale/status/1851701659954745593',
    icon: ArrowRight,
    description: 'View the original Solana Blink post on x',
    badge: 'x.com',
  },
  {
    name: 'Quick Dial URL',
    url: 'https://dial.to/developer?url=https://rohitsinghrawat.tech/blink&cluster=mainnet',
    icon: Link2,
    description: 'Connect directly to the Solana Blink developer portal',
    badge: 'Dial.to',
  },

  {
    name: 'Solana Blinks Docs',
    url: 'https://solana.com/docs/advanced/actions',
    icon: BookOpen,
    description: 'Comprehensive documentation for Blinks integration',
    badge: 'Documentation',
  },
]

export default function SolanaBlink() {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md space-y-8"
      >
        <Card className="overflow-hidden border-2 border-gray-200 bg-white shadow-lg dark:border-white/10 dark:bg-black">
          <CardHeader className="space-y-4 text-center">
            {/* Logo Section */}
            <motion.div
              className="flex justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            >
              <Avatar className="size-20 border-4 border-gray-100 dark:border-black">
                <AvatarImage
                  src="https://casa.rub.de/fileadmin/_processed_/e/c/csm_Solana_CASA_klein_6a6b663c2a.jpg"
                  alt="Solana Blinks logo"
                  className="object-cover"
                />
                <AvatarFallback className="bg-gray-50 text-gray-600 dark:bg-black dark:text-gray-300">
                  SB
                </AvatarFallback>
              </Avatar>
            </motion.div>

            <div className="space-y-1">
              <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">
                Solana Blinks
              </CardTitle>
              <CardDescription className="text-sm text-gray-600 dark:text-gray-300">
                Why are you here? Go find Blinks below
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Quick Actions */}
            <div className="grid gap-3">
              {blinksInfo.map((blink, index) => (
                <HoverCard key={index} openDelay={200} closeDelay={100}>
                  <HoverCardTrigger asChild>
                    <motion.a
                      href={blink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-between rounded-lg bg-transparent p-3 transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-zinc-900"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-2">
                        <blink.icon className="size-4 text-gray-600 dark:text-gray-300" />
                        <span className="text-gray-800 dark:text-white">
                          {blink.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="secondary"
                          className="bg-gray-100 text-xs dark:bg-zinc-900"
                        >
                          {blink.badge}
                        </Badge>
                        <ArrowRight className="size-4 text-gray-500 dark:text-gray-300" />
                      </div>
                    </motion.a>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-black">
                    <div className="flex justify-between space-x-4">
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold text-gray-800 dark:text-white">
                          {blink.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {blink.description}
                        </p>
                      </div>
                      <blink.icon className="size-6 text-gray-500 dark:text-gray-300" />
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>

            <Separator className="bg-gray-200 dark:bg-zinc-800" />

            {/* Info Section */}
            <Alert className="border-gray-200 bg-gray-100 dark:border-black dark:bg-zinc-900">
              <AlertCircle className="size-4 text-gray-600 dark:text-gray-300" />
              <AlertDescription className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                This is a fallback page. Visit the links above to learn more
                about Solana Blinks and how to integrate them.
              </AlertDescription>
            </Alert>
          </CardContent>

          <CardFooter className="flex justify-center pb-6">
            <motion.div
              className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Zap className="size-3" />
              <span>Powered by Solana Blockchain</span>
            </motion.div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}
