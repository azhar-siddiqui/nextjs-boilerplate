'use client';
import { CommandMenu } from '@/components/common/command-menu';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

type SearchContextType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchContext = createContext<SearchContextType | null>(null);

type SearchProviderProps = {
  children: React.ReactNode;
};

export function SearchProvider({ children }: Readonly<SearchProviderProps>) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(open => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const value = useMemo(() => ({ open, setOpen }), [open]);

  return (
    <SearchContext value={value}>
      {children}
      <CommandMenu />
    </SearchContext>
  );
}

export const useSearch = () => {
  const searchContext = useContext(SearchContext);

  if (!searchContext) {
    throw new Error('useSearch has to be used within SearchProvider');
  }

  return searchContext;
};
