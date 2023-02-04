import Head from 'next/head';
import styles from './/templates.module.css';
import Image from 'next/image';
import { useSession, signIn, signOut } from "next-auth/react"

export default function Template( {children}) {    

  const { data: session } = useSession();

  function toggleDrop(e) {
    e.preventDefault();
    console.log("trying to drop this shit down");
    const dropdown = document.getElementById("dropdown");
    const overlay = document.getElementById("overlay")
    if (dropdown.classList.contains("hide")) {
        dropdown.classList.remove("hide")
        overlay.classList.remove("hide")
    } else {
        dropdown.classList.add("hide")
        overlay.classList.add("hide")
    }
  }

  return (
    <>
        <div className="flex flex-col min-h-screen">
        <Head>
            <link rel="icon" href="/images/favicon" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet"></link>
        </Head>
        <div className={styles.navWrapper}>
            <a href="/"><Image
                src="/logo.svg"
                alt="WEvolve"
                width={190}
                height={50}
                /></a>
            <button className={styles.navButton} onClick={(e) => toggleDrop(e)}><a href="/"><Image
                src="/threeLines.svg"
                alt="Drop down"
                width={30}
                height={30}
                /></a></button>
        </div>
        <div className={styles.dropDown + " hide"} id="dropdown">
            <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/post">POST</a></li>
                <li><a href="/account">Account</a></li>
                <li><button onClick={() => signOut()}>Log out</button></li>
            </ul>
        </div>
        {/* <div className={styles.overlay + " hide"} id="overlay"></div>
            <main id="main">{children}</main> */}
        {session && session.user ? (
            <>
            <div className={styles.overlay + " hide"} id="overlay"></div>
            <main id="main">{children}</main>
            
            </>
          ) : (
            <div className={styles.banana}>
            <p>You need to sign in to view this page!</p>
            <button onClick={() => signIn()}>Sign in</button>
            </div>
          )}
        
        {/* <footer className="mt-auto">
            <div className="bg-main-gray h-24 p-5 text-whitish">
                <div className="w-1/2">
                    <p>This is the bottom of the template!</p>
                </div>
            </div>
        </footer> */}
        </div>
    </>
  );
}