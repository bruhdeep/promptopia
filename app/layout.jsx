import '@styles/globals.css';

import Nav from '@components/nav'
import Provider from '@components/Provider';

export const metadata = {
    title: "Promptopia",
    description: "A place to find writing prompts"
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className="main">
                <div className='gradient' />
            </div>

            <main className="app">
                <Nav />
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout;
