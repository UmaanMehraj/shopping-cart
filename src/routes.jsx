import App from './App'
import Cart from './components/cartPage'
import ErrorPage from './components/errorPage'
import Store from './components/storePage'

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/shop',
    element: <Store />,
  },
]

export default routes
