import { useEffect } from 'react'

// Sets document title and meta description per page.
export default function useSeo(title, description) {
  useEffect(() => {
    if (title) document.title = `${title} | Amica Digital`
    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', description)
    }
  }, [title, description])
}
