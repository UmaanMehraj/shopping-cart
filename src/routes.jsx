import App from './App'
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
    element: <div>Cart</div>,
  },
  {
    path: '/shop',
    element: <Store />,
  },
]

export default routes
