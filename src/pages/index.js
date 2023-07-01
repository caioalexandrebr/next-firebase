import Head from 'next/head';

import Form from '@/components/Form';
import List from '@/components/List';

export default function Home() {
  return (
    <>
      <Head>
        <title>next-firebase</title>
        <meta name="description" content="next-firebase" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Form />
        <List />
      </main>
    </>
  );
}
