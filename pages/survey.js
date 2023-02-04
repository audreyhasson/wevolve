import Head from 'next/head';
import Template from '../components/template.js';
import styles from '../styles/Home.module.css';
import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react";
import useSWR from 'swr';
import {useState, useRef, useEffect} from 'react';
import Form from '../components/form.js';

export default function Survey() {
    return (
        <Template>
            <Form />
        </Template>
    )
}