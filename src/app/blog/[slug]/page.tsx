import { posts } from '@/lib/posts'
import Link from 'next/link'
import { notFound } from 'next/navigation'

function processContent(html: string) {
  const headings: { id: string; text: string }[] = []
  const withIds = html.replace(/<h2>(.*?)<\/h2>/g, (_, text) => {
    const id = text.toLowerCase().replace(/\s+/g, '-');
    headings.push({ id, text })
    return `<h2 id="${id}" class="mt-6 text-xl font-bold">${text}</h2>`
  })
  return { html: withIds, headings }
}

export default function PostPage({ params }: any) {
  const post = posts.find(p => p.slug === params.slug)
  if (!post) return notFound()

  const { html, headings } = processContent(post.content)
  const otherPosts = posts.filter(p => p.slug !== post.slug)

  return (
    <div className="container py-8 grid md:grid-cols-4 gap-8">
      <aside className="md:col-span-1 order-last md:order-first">
        <h2 className="font-semibold mb-4">Diğer Yazılar</h2>
        <ul className="space-y-2 text-sm">
          {otherPosts.map(p => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="hover:underline text-accent">
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      <article className="md:col-span-2 prose prose-invert max-w-none">
        <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>

      <aside className="md:col-span-1">
        <h2 className="font-semibold mb-4">İçindekiler</h2>
        <ul className="space-y-2 text-sm">
          {headings.map(h => (
            <li key={h.id}>
              <a href={`#${h.id}`} className="hover:underline">
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  )
}
