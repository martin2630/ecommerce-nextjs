import React, { FC } from 'react'
import Head from 'next/head'
import { Navbar, SideMenu} from '../ui';

interface Prop{
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
    children: React.ReactNode;
}

const ShopLayout: FC<Prop> = ({ title, pageDescription, imageFullUrl, children}) => {
    return (
      <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={pageDescription}/>

            <meta name="og:title" content={title}/>
            <meta name="og:description" content={pageDescription}/>

            { imageFullUrl && (
              <meta name="og:image" content={imageFullUrl}/>
            )}

        </Head>

        <div>
          <Navbar />
        </div>

        <div>
          <SideMenu open={false}/>
        </div>

        <main style={{
          margin: '80px auto',
          maxWidth: '1440px',
          padding: '0 30px'
        }}>
          { children }
        </main>

        <footer>
          {/* TODO: custom footer */}
        </footer>
      </>
    )
}

export default ShopLayout