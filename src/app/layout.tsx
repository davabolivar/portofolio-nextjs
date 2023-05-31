import Sidebar from '@/component/Sidebar'
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className='flex flex-row lg:w-[1000px] mx-4 lg:mx-auto mt-[151px]'>
        <Sidebar />
        {children}
        </div>
      </body>
    </html>
  )
}
