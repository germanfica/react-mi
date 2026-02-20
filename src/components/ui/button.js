import React from "react"
import { cn } from "./utils"

export function Button({ className, ...props }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700",
        className
      )}
      {...props}
    />
  )
}