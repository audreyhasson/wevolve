import { useSession, signIn, signOut } from "next-auth/react";
import Head from 'next/head';
import Template from '../components/template.js';
import styles from '../styles/Account.module.css';
import Image from 'next/image';




export default function Account() {

  const { data: session } = useSession();

  function openCreate(e) {
    console.log("Going to Create page");
    }

  const pics = [["have meal with friend", "/snackFriend.jpg"],
  ["go onstage", "/foolCrowd.jpg"],
  ["talk to your crush", "/talkToCrush.jpg"],]
  
  return (
    <>
        <Template>
          <div className={styles.container}>
            <div className={styles.topBar}>
            <div>
              <h1>User: {session?.user?.name}</h1>
              <p>{session?.user?.email}</p>
              <p>Your previous posts:</p>
              
            </div>
            <div className={styles.evolve}>
              <a href="/post">
              <Image 
              src="/plus.svg"
              width={30}
              height={30}
              />
              <span>EVOLVE</span>
              </a>
            </div>
            </div>
            
            {pics.map((pic)=>
              <div className={styles.post}>
                <Image
                    src={pic[1]}
                    alt="Stock pic"
                    width={350}
                    height={350}
                    />
                <p className={styles.topLeft}>{pic[0]}</p>
              </div>
            )}
          </div>
        </Template>
    </>
    
  )

  }
