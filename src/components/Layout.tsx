import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import QuickActionButton from './QuickActionButton';

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
      <QuickActionButton />
    </div>
  );
}