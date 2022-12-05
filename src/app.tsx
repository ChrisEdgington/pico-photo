import { createRoot } from 'react-dom/client';

function App() {
  return (
    <h1 className="text-3xl font-bold underline text-green-500">Hello World!</h1>
  )
}

const originalContainer = document.getElementById('app')
const reactRoot = createRoot(originalContainer)
reactRoot.render(<App/>, )
