import Head from 'next/head';
import Link from 'next/link';

import Racer from '../src/classes/Racer.js';


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {new Racer().Name}
      <Link href="posts/first-post"><a>Post</a></Link>
    </div>
  )
}
