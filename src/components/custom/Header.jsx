import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

export const Header = () => {
  // You can set this based on the actual pathname if needed

  return (
    <header
      aria-label='Site Header'
      className={`flex py-3 items-center border-b-2 border-gray-100 px-12`}
    >
      <div className='flex h-10 w-full items-center justify-between'>
        <Link to='/' className='flex items-center'>
          <img src={"/logo.svg"} alt='Resume Logo' height={40} width={40} />
          <div className='ml-2 text-primary font-bold text-2xl'>CareerAI</div>
        </Link>

        <nav
          aria-label='Site Nav Bar'
          className='flex items-center gap-2 text-sm font-medium'
        >
          {[
            ["/", "Builder"],
            ["http://localhost:3000/resume-parser", "Parser"],
          ].map(([href, text]) => (
            <Link
              key={text}
              className='rounded-md px-1.5 py-2 text-gray-500 hover:bg-gray-100 focus-visible:bg-gray-100 lg:px-4'
              to={href}
            >
              {text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
