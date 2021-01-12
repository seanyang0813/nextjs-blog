---
title: 'First blog post'
date: '2021-01-11'
---
This is my first blog post. **Learning in public** seems to be a really great way to gain a deeper understanding of the knowledge, so I will try my best to write something when I learn it.

I came across the article by arunoda's video on [how to learn next](https://www.youtube.com/watch?v=SEcIbuYDzvU) I also read his article on how to learn next. The general approach is to learn the basic, build, and then try to teach. 

I tried out Next.js with the [Next.js learn](https://nextjs.org/learn/basics/create-nextjs-app) and [getstarted.sh](https://getstarted.sh/) as suggested by the article. 
## My thoughts on next so far
I like the way pages correspond to the url structure. This makes organization much easier. In the getstarted course, I found learned a couple of new libraries. Note that they aren't limited to next, but they do support next. Next auth is quite easy to use with the useSession hook. It handles the whole authentication flow for us and can check the status with useSession. I also quite like SWR which allows caching,fetching, and mutating data easy.

Next's best part is its support for server side rendering and static site generation. 


## prerendering
To me the most powerful feature of Next.js is **pre rendering**. Read more at [next prerendering](https://nextjs.org/learn/basics/data-fetching/pre-rendering). To sum to up, normally you would have to render everything with react on client side. prerendering lets you send prerendered html which makes page load faster.

## ssg vs ssr
Before learning Next, I thought all it did is server side rendering. However ssg and ssr are two ways to prerender.
[two forms of prerendering](https://nextjs.org/learn/basics/data-fetching/two-forms)

For example, we got a blog post that doesn't require us to always have the most up to date data. SSG would be a good fit because all users see same data on same page.

However we can't statically generate something like user's dashboard because we serve different things to different user. We can either work with SSG with client side fetching or SSR.

Use SSG as much as we can because being able to cache making it faster. ssr has to wait for server's response to render which takes time. Also doing ssr would make more request to server since it fetches every time. SSG feels more powerful to me when both can be used
## Data getting updated
For ssr this is no issue because the server makes request to fetch data on every request before sending it to client. However, this takes time

Site being static doesn't mean it never changes. We can revalidate with ssg on interval. How it works is that when someone visits the page, it tells the server to rebuild the page if it's more than however many seconds. Any request after that would yield the new page. One thing to note is that the request that triggered the rebuild would be returned with outdated data which is one thing to be aware of.