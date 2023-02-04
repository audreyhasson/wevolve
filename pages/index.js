import Head from 'next/head';
import Template from '../components/template.js';
import styles from '../styles/Home.module.css';
import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react";
import useSWR from 'swr';
import {useState, useRef, useEffect} from 'react';


const fetcher = (url) => fetch(url).then((res) => res.json())


export default function Home({challs, posts}) {

  const { data: session } = useSession();

  const [question, setQuestion] = useState();

  console.log(posts);


  useEffect( () => {
    const qs = challs.question.social.lvl1;
    setQuestion(qs[Math.floor(Math.random() * (qs.length-1))])
}, [])


  // Some function that gets the posts
  //const posts = ["beedldee"];
  const { data: postArray, mutate, isValidating } = useSWR('api/getPosts', fetcher);

  if (isValidating) {
    return <>
      <p>Loading...</p>
    </>
  }
  
  return (
    <div>
      <Template>
        <div className={styles.container}>
          <h1>Your Mission Today: {question}</h1>
        </div>
        <div className={styles.postContainer}>
          {posts.posts.map((post) => (
            <>
            <div className={styles.post}>
              
              <Image
                  src={post[1]}
                  alt="Stock pic"
                  width={400}
                  height={400}
                  />
              <p className={styles.topLeft}>{post[0]}</p>
              <p className={styles.bottomRight}>{post[2]}</p>
            </div>
            </>
            ))
          }
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