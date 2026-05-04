import App from './App'
import ErrorPage from './components/errorPage'

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/cart',
    element: <div>Cart</div>,
  },
  {
    path: '/shop',
    element: <div>Shop</div>,
  },
]

export default routes
