import React from 'react';

export default function Header({ title = "Miaoyang Ye" }) {
    return (
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-xl font-bold text-[#25282b] font-comfortaa">
          {title}
        </h1>
        <nav className="text-gray-900 font-medium">
          <a href="#about" className="mr-8 hover:text-[#57bfa2]">About</a>
          <a href="#projects" className="mr-8 hover:text-[#57bfa2]">Projects</a>
          <a href="#contacts" className="hover:text-[#57bfa2]">Contacts</a>
        </nav>
      </header>
    );
  }
  