import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.pid}
      <br />
      {postData.date}
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  console.log('getStaticProps', params)
  const postData = getPostData(params.pid)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  console.log('getStaticPaths')
  const paths = getAllPostIds()
  console.log({
    paths,
    fallback: false
  })
  return {
    paths,
    fallback: false
  }
}