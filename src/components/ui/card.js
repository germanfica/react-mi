import React from "react"
import { cn } from "./utils"

export function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-xl border bg-white text-black shadow",
        className
      )}
      {...props}
    />
  )
}

export const CardHeader = ({ className, ...props }) => (
  <div className={cn("p-6", className)} {...props} />
)

export const CardTitle = ({ className, ...props }) => (
  <h3 className={cn("text-lg font-semibold", className)} {...props} />
)

export const CardDescription = ({ className, ...props }) => (
  <p className={cn("text-sm text-gray-500", className)} {...props} />
)

export const CardContent = ({ className, ...props }) => (
  <div className={cn("p-6 pt-0", className)} {...props} />
)

export const CardFooter = ({ className, ...props }) => (
  <div className={cn("p-6 pt-0 flex items-center", className)} {...props} />
)