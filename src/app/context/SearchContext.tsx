'use client';
import { createContext, useState } from 'react';

export const SearchContext = createContext<{
  search: string;
  setSearch: (search: string) => void;
} | null>(null);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [search, setSearch] = useState<string>('');

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
