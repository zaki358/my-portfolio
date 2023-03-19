import React, { createContext, useState } from "react";
import type { ReactNode, Dispatch, SetStateAction } from "react";

type Props = {
  children: ReactNode;
};

type HomeSwitchContextValue = {
  switchNumber: number;
  setSwitchNumber: Dispatch<SetStateAction<number>>;
};

export const HomeSwitchContext = createContext<HomeSwitchContextValue>(
  {} as HomeSwitchContextValue
);

export const HomeSwitchProvider: React.FC<Props> = ({ children }) => {
  const [switchNumber, setSwitchNumber] = useState<number>(0);
  return (
    <HomeSwitchContext.Provider value={{ switchNumber, setSwitchNumber }}>
      {children}
    </HomeSwitchContext.Provider>
  );
};

// type HomeSwitch = {
//   switchNumber: number | null;
//   setSwitchNumber: () => void;
// };
