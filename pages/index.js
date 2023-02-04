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

  // Some function that gets the posts
  //const posts = ["beedldee"];
  const { data: postArray, mutate, isValidating } = useSWR('api/getPosts', fetcher);

  console.log(postArray);

  if (isValidating) {
    return <>
      <p>Loading...</p>
    </>
  }
  
  return (
    <div>
      <Template>
        <p>i am the home page i am the home page</p>
        
      </Template>
    </div>

  )
}
