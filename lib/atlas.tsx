import {useSession } from 'next-auth/react';
import {MongoClient, ObjectId} from 'mongodb';

const dataUrl = process.env.API_URL;
const dataKey = process.env.API_KEY;

export async function getPosts() {
    const response = await fetch(`${dataUrl}/action/find`, {
      method: 'POST',
      headers: {
        'Access-Control-Request-Headers': '*',
        'api-key': dataKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "dataSource": "Cluster0",
        "database": "WEvolve",
        "collection": "posts",
        "filter": {
        },
      })
    });
    return await response.json()
  }