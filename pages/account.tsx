import { useSession, signIn, signOut } from "next-auth/react";
import Head from 'next/head';
import Template from '../components/template.js';



export default function Home() {
  const { data: session } = useSession();

  
  
  return (
    <div>
      <Template>
        <p>username: {session?.user?.name}</p>
        <p>This is the account page.</p>
      </Template>
    </div>
  )
}
