import Head from 'next/head';
import Template from '../components/template.js';
import styles from '../styles/Home.module.css';
import Image from 'next/image'

import { useSession, signIn, signOut } from "next-auth/react"


export default function Home() {

  const { data: session } = useSession();

  console.log(session);
  
  return (
    <div>
      <Template>
        <ul className={styles.navigation}>
          <li><a href="#">WEvolve</a></li>
          <li><a href="#">Account</a></li>
        </ul>
        <Image
          src="/panda.jpg"
          alt="PANDA"
          width={1000}
          height={500}
        />
        {/* <p className="important">hi! i should be green rn &gt;:|</p>
        <p>TestTestTestTest &gt;:|</p>
        <button onClick={() => console.log("banana")}>Click me</button> */}
      </Template>
    </div>

  )
}
