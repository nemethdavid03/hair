"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  initialHours?: number
  initialMinutes?: number
  initialSeconds?: number
  className?: string
}

export default function CountdownTimer({
  initialHours = 24,
  initialMinutes = 0,
  initialSeconds = 0,
  className,
}: CountdownTimerProps) {
  const [hours, setHours] = useState(initialHours)
  const [minutes, setMinutes] = useState(initialMinutes)
  const [seconds, setSeconds] = useState(initialSeconds)

  useEffect(() => {
    // Try to get saved end time from localStorage
    const savedEndTime = localStorage.getItem("countdownEndTime")
    let endTime: number

    if (savedEndTime) {
      endTime = Number.parseInt(savedEndTime, 10)

      // If the saved end time has passed, set a new one
      if (endTime <= Date.now()) {
        endTime = Date.now() + (initialHours * 3600 + initialMinutes * 60 + initialSeconds) * 1000
        localStorage.setItem("countdownEndTime", endTime.toString())
      }
    } else {
      // Set a new end time
      endTime = Date.now() + (initialHours * 3600 + initialMinutes * 60 + initialSeconds) * 1000
      localStorage.setItem("countdownEndTime", endTime.toString())
    }

    const interval = setInterval(() => {
      const now = Date.now()
      const distance = endTime - now

      if (distance <= 0) {
        clearInterval(interval)
        setHours(0)
        setMinutes(0)
        setSeconds(0)
        return
      }

      setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000))
    }, 1000)

    return () => clearInterval(interval)
  }, [initialHours, initialMinutes, initialSeconds])

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex flex-col items-center">
        <div className="bg-white text-primary font-bold rounded-md px-3 py-1 text-xl shadow-md">
          {hours.toString().padStart(2, "0")}
        </div>
        <span className="text-xs mt-1 text-white/80">Hours</span>
      </div>
      <span className="text-white text-xl font-bold">:</span>
      <div className="flex flex-col items-center">
        <div className="bg-white text-primary font-bold rounded-md px-3 py-1 text-xl shadow-md">
          {minutes.toString().padStart(2, "0")}
        </div>
        <span className="text-xs mt-1 text-white/80">Minutes</span>
      </div>
      <span className="text-white text-xl font-bold">:</span>
      <div className="flex flex-col items-center">
        <div className="bg-white text-primary font-bold rounded-md px-3 py-1 text-xl shadow-md">
          {seconds.toString().padStart(2, "0")}
        </div>
        <span className="text-xs mt-1 text-white/80">Seconds</span>
      </div>
    </div>
  )
}
