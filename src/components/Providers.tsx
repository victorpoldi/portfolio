import React from "react";
import { ThemeProvider } from "next-themes";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

export default async function Providers({ children }: { children: React.ReactNode }) {
  const messages = await getMessages();
  
  if (messages.error) {
    notFound();
  }

  return (
    <NextIntlClientProvider messages={messages}>
      <ThemeProvider
        attribute="class"
        enableSystem
        storageKey="theme"
        defaultTheme="system"
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}