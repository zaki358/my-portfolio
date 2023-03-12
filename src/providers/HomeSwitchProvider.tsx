import React, {
  createContext,
  useState,
  ReactNode,
  FC,
  Dispatch,
  SetStateAction,
} from "react";

// type HomeSwitch = {
//   switchNumber: number | null;
//   setSwitchNumber: () => void;
// };

type Props = {
  children: ReactNode;
};

export const HomeSwitchContext = createContext(
  {} as {
    switchNumber: number;
    setSwitchNumber: Dispatch<SetStateAction<number>>;
  }
);

export const HomeSwitchProvider: FC<Props> = ({ children }) => {
  const [switchNumber, setSwitchNumber] = useState<number>(0);
  return (
    <HomeSwitchContext.Provider value={{ switchNumber, setSwitchNumber }}>
      {children}
    </HomeSwitchContext.Provider>
  );
};
