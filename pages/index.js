import Head from 'next/head';
import Template from '../components/template.js';
import styles from '../styles/Home.module.css';
import { useSession, signIn, signOut } from "next-auth/react"


export default function Home() {

  const { data: session } = useSession();

  console.log(session);
  
  return (
    <div>
      <Template>
        <p>hi! i should be green rn &gt;:|</p>
      </Template>
    </div>
  )
}
