import { ThemeProvider } from "@/components/ThemeProvider";
import { ReduxProvider } from "@/redux/ReduxProvider";
import "./global.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}