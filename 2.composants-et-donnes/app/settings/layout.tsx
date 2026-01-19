import "@/globals.css";
import SwitchThemeBtn from "@/component/SwitchThemeBtn";
import { DarkModeProvider } from "@/context/DarkModeContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="p-20 dark:bg-slate-900 dark:text-slate-200">
        <DarkModeProvider>
          <SwitchThemeBtn />
          {children}
        </DarkModeProvider>
      </body>
    </html>
  );
}
