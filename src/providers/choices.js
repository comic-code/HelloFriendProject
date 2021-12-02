import { createContext, useState } from 'react';

export const ChoicesContext = createContext({});

export function ChoicesProvider() {
  return(
    <ChoicesContext.Provider>

    </ChoicesContext.Provider>
  )
}