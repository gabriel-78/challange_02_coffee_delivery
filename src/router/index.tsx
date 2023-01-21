import { Routes, Route } from 'react-router-dom'
import { Checkout } from '../pages/Checkout'
import { Error404 } from '../pages/Error404'
import { Home } from '../pages/Home'
import { Success } from '../pages/Success'

export const Router = () => {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<Home />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/success" element={<Success />} />
      </Route>

      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}
