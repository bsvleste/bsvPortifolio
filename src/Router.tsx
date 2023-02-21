import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Blog } from './pages/Blog'
import { Home } from './pages/Home'
import { Post } from './pages/Posts'
import { Sobre } from './pages/Sobre'

export function Router() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/blog" element={<DefaultLayout />}>
        <Route index element={<Blog />} />
        <Route path="post/:id" element={<Post />} />
      </Route>
      <Route path="/sobre" element={<DefaultLayout />}>
        <Route index element={<Sobre />} />
      </Route>
    </Routes>
  )
}
