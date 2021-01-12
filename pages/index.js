import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date.js'
import Card from '../components/card.js'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      {/* Keep the existing code here */}
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I am <strong>Sean Yang</strong> 杨天啸. I am a Computer Science major at the University of Maryland, College Park.</p>
        <p>I am mostly interested in web development. Check out my github at <a href="https://github.com/seanyang0813" target="_blank">seanyang0813</a></p>
      </section>
      <section className={utilStyles.headingMd}>
        <div className="text-center">
          <h2 className={utilStyles.headingXl}>Projects</h2>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2">
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
            </div>
        </div>
        
      </section>
    </Layout>
  )
}
