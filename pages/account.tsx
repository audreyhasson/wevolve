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
  
  return (
    <>
        <Template>
          <div className={styles.sideBar} id="sideBar">
            {/* <p>{session?.user?.name}</p> */}
            <div id = "header">
              <p>BIO</p>
            </div>

            <div id = "info">
              <p>mathematician, computer scientist, logician, cryptanalyst, philosopher, and theoretical biologist</p>
            </div> 

            <div id = "title">
              <p>YOUR INFO</p>
            </div>

            <div id = "info">
              <p>Alan Turing</p>
              <p>csGod01@fatherofcomputerscience.com</p>
              <p>{session?.user?.name}</p>
              <p>{session?.user?.email}</p>
            </div> 

            <li><a href="/post">EVOLVE
              <Image
                src="/plus.svg"
                alt="Drop down"
                width={30}
                height={30}
                />
              </a></li>
          </div>
        </Template>
    </>
    
  )

  }
