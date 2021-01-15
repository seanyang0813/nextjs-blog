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
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I am <strong>Sean Yang</strong> 杨天啸. I am a Computer Science major at the University of Maryland, College Park.</p>
        <p>I am interested in front-end development and loves to learn by building. Check out my github at <a href="https://github.com/seanyang0813" target="_blank">seanyang0813</a></p>
      </section>
      <section className={utilStyles.headingMd}>
        <div className="text-center">
          <h2 className={utilStyles.headingXl}>Projects</h2>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2">
              <Card content={{image:"/images/code-documentation.png",title:"Code Documentation Tool", link:"https://github.com/seanyang0813/code-documentation", width: 800, height: 400}}>A tool to create sql templates with documentations. It has a built in editor and allows code insertion into the editor directly. It aims to lower the barrier to use code for non technical people</Card>
              <Card content={{image:"/images/back-of-zoom.png", title:"Back of Zoom", link:"https://github.com/seanyang0813/backofzoom", width: 400, height: 400}}>A real time chat app that lets student enter the zoom url they are in to chat with others in the meeting without distracting other in the actual zoom chat</Card>
              <Card content={{image:"/images/page-flip.png",title:"Flip Pages with Facial Expression", link:"https://github.com/seanyang0813/facial-expression-keyboard-action-simulator", width: 600, height: 400}}>A desktop app that simulates keyboard actions based on facial expression to flip pages on e-books</Card>
              <Card content={{image:"/images/common.png",title:"Common.gg", link:"https://common.gg/", width: 400, height: 400}}>I am on the Engineering team at common.gg, a social media network focused on the game teamfight tactics</Card>
            </div>
        </div>
        
      </section>
    </Layout>
  )
}
