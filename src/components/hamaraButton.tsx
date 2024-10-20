import React from 'react'

interface ButtonProps {
  
  onClick?: () => void
  className?: string
  label:string
}

const TailwindButton: React.FC<ButtonProps> = ({  onClick, className = '',label }) => {
  return (
    <button
      className={`
        relative inline-flex items-center justify-center px-5 py-2
        overflow-hidden font-bold text-white  shadow-2xl group
        bg-gradient-to-br from-purple-600 to-blue-500
        hover:from-purple-700 hover:to-blue-600
        active:from-purple-800 active:to-blue-700
        focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
        transition-all duration-300 ease-out rounded-full
        ${className}
      `}
      onClick={onClick}
    >
      <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
      <span className="relative">{label}</span>
    </button>
  )
}

export default TailwindButton