// import './globals.css'
import '../styles/dist.css'
import { Manrope } from "@next/font/google"

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-manrope"
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.variable}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='bg-custom-lightGrayishBlue h-screen flex justify-center items-center'>{children}</body>
    </html>
  )
}
