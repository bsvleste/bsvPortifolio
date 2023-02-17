import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Blog } from './pages/Blog'
import { Home } from './pages/Home'
import { Post } from './pages/Posts'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<DefaultLayout />}>
        <Route path="/blog" element={<Blog />} />
        <Route path="blog/post/:id" element={<Post />} />
      </Route>
    </Routes>
  )
}
