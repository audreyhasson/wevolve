import Head from 'next/head';
import Template from '../components/template.js';
import styles from '../styles/post.module.css';
import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react";
import useSWR from 'swr';
import {useState, useRef, useEffect} from 'react';


const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home({challs, posts}) {

  const { data: session } = useSession();

  console.log(session);

  const [quest, setQuestion] = useState();



  useEffect( () => {
    const qs = challs.question.social.lvl1;
    setQuestion(qs[Math.floor(Math.random() * (qs.length-1))])
}, [])
  
  return (
    <div>
      <Template>
        <div className={styles.container}>
        <h1>Your Mission Today: {quest}</h1>
        <p>Below, upload a picture of you completing today's mission. Good luck!</p>
        <form>
            <input type="file" id="myFile" name="filename"/>
            <button><a href="/">  
              Submit 
            </a></button> 
        </form>
        </div>
      </Template>
    </div>

  )
}



// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path'
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'challs.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  const filePath2 = path.join(process.cwd(), 'posts.json');
  const jsonData2 = await fsPromises.readFile(filePath2);
  const objectData2 = JSON.parse(jsonData2);

  return {
    props: {
      challs: objectData,
      posts: objectData2
    }
    
  }
}