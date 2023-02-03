import { getAllPosts } from '@/lib/notion'
import { generateRss } from '@/lib/rss'
// import { generateRss } from '@/lib/rssContent'
export async function getStaticProps({ res }) {
  const posts = await getAllPosts({ onlyNewsletter: false })
  const latestPosts = posts.slice(0, 10)
  const xmlFeed = await generateRss(latestPosts)
  return {
    props: {
      xmlFeed
    }
  }
}
const feed = () => null
export default feed
