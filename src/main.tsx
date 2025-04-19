import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { AuthProvider } from './context/AuthContext/AuthContext'
import { SidebarProvider } from './context/SidebarContext/SidebarContext'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <SidebarProvider>
        <Provider store={store}>
          <App/>
        </Provider>
      </SidebarProvider>
    </AuthProvider>
  </StrictMode>,
)
