import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Portfolio } from './pages/Portfolio'
import { Home } from './pages/Home'
import { Post } from './pages/Posts'
import { Sobre } from './pages/Sobre'

export function Router() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/portfolio" element={<DefaultLayout />}>
        <Route index element={<Portfolio />} />
        <Route path="post/:id" element={<Post />} />
      </Route>
      <Route path="/sobre" element={<DefaultLayout />}>
        <Route index element={<Sobre />} />
      </Route>
    </Routes>
  )
}
