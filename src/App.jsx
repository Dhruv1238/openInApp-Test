import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  return (
    <div className=' flex flex-col items-center justify-center min-h-screen text-center bg-gray-900 text-white'>
      <img src={reactLogo} className='h-60 pointer-events-none' alt='react' />
      <img src={viteLogo} className='h-60 pointer-events-none' alt='vite' />
      <h1 className='text-6xl font-bold'>Hello Vite + React!</h1>
      <p className='text-xl mt-10'>
        Edit <code>App.jsx</code> and save to test HMR updates.
      </p>
    </div>
  )
}

export default App
