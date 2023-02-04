import Head from 'next/head';
import styles from './/templates.module.css';
import { useSession, signIn, signOut } from "next-auth/react"

export default function Template( {children}) {    

  const { data: session } = useSession()

  return (
    <>
        <div className="flex flex-col min-h-screen">
        <Head>
            <link rel="icon" href="/images/favicon" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
        </Head>
        <header>
           
        </header>
        <div>
            <p>this is the top of the template!</p>
        </div>
        <div className={styles.signup}>
          {session && session.user ? (
            <button onClick={() => signOut()}>Sign out</button>
          ) : (
            <button onClick={() => signIn()}>Sign in</button>
          )}
        </div>
        {session && session.user ? (
            <main>{children}</main>
          ) : (
            <p>You need to sign in to view this page!</p>
          )}
        
        <footer className="mt-auto">
            <div className="bg-main-gray h-24 p-5 text-whitish">
                <div className="w-1/2">
                    <p>This is the bottom of the template!</p>
                </div>
            </div>
        </footer>
        </div>
    </>
  );
}