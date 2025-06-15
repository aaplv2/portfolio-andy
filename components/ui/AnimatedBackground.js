"use client"

export default function AnimatedBackground() {
  return (
    <>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-blue/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-orange/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </>
  )
}
