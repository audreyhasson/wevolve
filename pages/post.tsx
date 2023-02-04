import Head from 'next/head';
import Template from '../components/template.js';
import styles from '../styles/Home.module.css';
import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react";
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home() {

  const { data: session } = useSession();

  console.log(session);

  
  return (
    <div>
      <Template>
        <form action="">
            <input type="file" id="myFile" name="filename"/>
            <input type="submit"/>
        </form>
      </Template>
    </div>

  )
}
