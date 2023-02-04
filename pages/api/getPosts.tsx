import type { NextApiRequest, NextApiResponse } from 'next';
import {getPosts} from "../../lib/atlas";

export default async function handler(

req: NextApiRequest,
res: NextApiResponse
) {

	const posts = await getPosts();
	res.status(200).json(posts);
}