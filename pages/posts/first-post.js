import Link from 'next/link';
import Head from 'next/head';
// import Script from 'next/script';
import Layout from '../../components/layout';

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
                <script />
            </Head>
            {/* <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy='lazyOnload'
                onload={() => console.log(`script loaded`)}
            /> */}
            <h1>First Post</h1>
            <h2>
                <Link href="/">Back2home</Link>
            </h2>
        </Layout>
    );
}