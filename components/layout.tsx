import React from 'react'
import Navbar from '../pages/Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className='w-screen h-screen bg-red-400'>
      <Navbar />
      {children}
    </div>
  )
}