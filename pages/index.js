import Head from 'next/head';
import Template from '../components/template.js';
import styles from '../styles/Home.module.css';
import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react";
import useSWR from 'swr';
import {useState, useRef, useEffect} from 'react';


const fetcher = (url) => fetch(url).then((res) => res.json())


export default function Home(props) {

  const { data: session } = useSession();

  const [question, setQuestion] = useState();


  const questions = props.question.social.lvl1;

  useEffect( () => {
    setQuestion(questions[Math.floor(Math.random() * (questions.length-1))])
}, [])

  console.log(question)

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
        <p>i am the home page i am the home page</p>
        
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

  return {
    props: objectData
  }
}