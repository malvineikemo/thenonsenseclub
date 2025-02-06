"use client"

export function copyToClipboard(text: string) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      // You could add a toast notification here
      console.log("Copied to clipboard")
    })
    .catch((err) => {
      console.error("Failed to copy:", err)
    })
}
