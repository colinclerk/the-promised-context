"use client";
import { createContext, use, useContext } from "react";

export const PromisedContext = createContext<Promise<string | null>>(
  Promise.resolve(null)
);

export const PromisedContextProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: Promise<string | null>;
}) => {
  return (
    <PromisedContext.Provider value={value}>
      {children}
    </PromisedContext.Provider>
  );
};

export const UserAgent = () => {
  const userAgent = use(useContext(PromisedContext));
  return <div>{userAgent}</div>;
};
