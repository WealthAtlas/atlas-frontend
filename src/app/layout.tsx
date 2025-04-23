"use client";

import { AuthProvider } from "@/context/AuthContext";
import ApolloWrapper from "@/lib/apolloWrapper";
import { createTheme, ThemeProvider } from "@mui/material";
import type { Metadata } from "next";

const theme = createTheme({
  palette: {
    mode: "light", // You can switch to "dark" mode if needed
    primary: {
      main: "#1976d2", // Default Material UI blue
    },
    secondary: {
      main: "#9c27b0", // Default Material UI purple
    },
  },
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <ApolloWrapper><AuthProvider>{children}</AuthProvider></ApolloWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
