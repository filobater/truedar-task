'use client';
import { SearchContext } from '@/app/context/SearchContext';
import Link from 'next/link';
import React, { useContext } from 'react';

const Navbar = () => {
  const searchCtx = useContext(SearchContext);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchCtx?.setSearch(e.target.value.trim());
  };

  return (
    <nav className="navbar bg-base-100 gap-4 md:flex-row flex-col">
      <div>
        <Link href={'/'} className="btn btn-ghost normal-case text-xl">
          Starship Explorer
        </Link>
      </div>
      <div className="flex-1 w-full">
        <input
          type="text"
          placeholder="Search Starships by name or model..."
          className="input input-bordered w-full"
          onChange={handleSearch}
        />
      </div>
    </nav>
  );
};

export default Navbar;
