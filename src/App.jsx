import { BrowserRouter } from 'react-router-dom'
import reactLogo from './assets/signinPage/react.svg'
import viteLogo from '/vite.svg'
import { Router } from './Router'

function App() {
  return (
    <>
    <div className=' overflow-x-clip'>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
