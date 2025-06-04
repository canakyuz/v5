import Link from 'next/link'
import { posts } from '@/lib/posts'

export default function BlogPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Tüm Yazılar</h1>
      <ul className="space-y-6">
        {posts.map(post => (
          <li key={post.slug} className="border-b border-white/10 pb-4">
            <Link href={`/blog/${post.slug}`} className="text-accent hover:underline text-lg font-semibold">
              {post.title}
            </Link>
            <p className="text-sm text-white/60 mt-1">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
