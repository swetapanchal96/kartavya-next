"use client";

import { createContext, useContext, useState } from "react";

type CursorContextType = {
  active: boolean;
  setActive: (val: boolean) => void;
};

const CursorContext = createContext<CursorContextType | null>(null);

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState(false);

  return (
    <CursorContext.Provider value={{ active, setActive }}>
      {children}
    </CursorContext.Provider>
  );
}

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error("useCursor must be used inside CursorProvider");
  }
  return context;
};