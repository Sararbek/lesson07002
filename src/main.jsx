import { createRoot } from 'react-dom/client'
import './index.css'
import { lazy } from 'react'
import { BrowserRouter } from 'react-router-dom'
import SuspenseContainer from './utils/SuspenseContainer'
import { Provider } from 'react-redux'
import { store } from '@/redux/Index'
const App = lazy(() => import('@/App'))

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <SuspenseContainer>
        <App />
      </SuspenseContainer>
    </Provider>
  </BrowserRouter>
)
