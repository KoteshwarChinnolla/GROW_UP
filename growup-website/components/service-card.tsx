import Link from "next/link"
import type { ReactNode } from "react"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  stat: string
  slug: string
}

export default function ServiceCard({ icon, title, description, stat, slug }: ServiceCardProps) {
  return (
   
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition p-6 flex flex-col h-full border border-gray-100">
      <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <div className="flex justify-between items-center">
        <Link
          href={`/services/${slug}`}
          className="text-indigo-600 font-medium hover:text-indigo-700 flex items-center cursor-pointer whitespace-nowrap"
        >
          Learn More <i className="fas fa-arrow-right ml-2"></i>
        </Link>
        <span className="text-gray-500 text-sm">{stat}</span>
      </div>
    </div>
   
  )
}

