"use client";

import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/theme-provider";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <>
    <Toaster />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  );
};

export default Providers;
