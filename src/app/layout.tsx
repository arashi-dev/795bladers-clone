import React from 'react'
import "~/styles/globals.css"

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html>
        <body>
            {children}
        </body>
    </html>
  )
}

export default Layout