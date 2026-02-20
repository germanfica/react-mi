import React from "react"

export function Select({ children }) {
  return <div>{children}</div>
}

export function SelectTrigger({ children }) {
  return (
    <div className="border rounded-md px-3 py-2">
      {children}
    </div>
  )
}

export function SelectValue({ placeholder }) {
  return <span>{placeholder}</span>
}

export function SelectContent({ children }) {
  return (
    <div className="border mt-2 rounded-md bg-white p-2">
      {children}
    </div>
  )
}

export function SelectItem({ children }) {
  return (
    <div className="p-2 hover:bg-gray-100 cursor-pointer">
      {children}
    </div>
  )
}