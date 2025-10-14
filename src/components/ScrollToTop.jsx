// components/ScrollToTop.jsx
import { ChevronUp } from "lucide-react"

export default function ScrollToTop() {
  return (
    <a
      href="/#home"
      className="fixed bottom-6 right-6 w-12 h-12 bg-accent-500 text-white rounded-full shadow-lg hover:bg-accent-500/90 transition-colors flex items-center justify-center z-50"
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-5 h-5" />
    </a>
  )
}