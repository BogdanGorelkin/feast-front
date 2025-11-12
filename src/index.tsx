import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import '@ant-design/v5-patch-for-react-19'
import { ConfigProvider as AntdConfigProvider } from 'antd'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { defaultTheme } from './utils/theme/antdThemeConfig'
import { Provider } from 'react-redux'
import { persistor, store } from './utils/redux/store'

// Get basename for GitHub Pages (if repo is not at root)
const getBasename = () => {
  // Check if we're on GitHub Pages (not localhost)
  if (typeof window !== 'undefined' && window.location.hostname.includes('github.io')) {
    const pathname = window.location.pathname
    // Extract repo name from path (e.g., /repo-name/ -> /repo-name)
    const pathParts = pathname.split('/').filter(Boolean)
    // If there's a repo name in the path (not just /)
    if (pathParts.length > 0 && !pathParts[0].includes('.')) {
      return `/${pathParts[0]}`
    }
  }
  // For local development or root GitHub Pages, use empty basename
  return ''
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <AntdConfigProvider theme={defaultTheme}>
          <BrowserRouter basename={getBasename()}>
            <App />
          </BrowserRouter>
        </AntdConfigProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
