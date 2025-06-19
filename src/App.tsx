import { useState } from 'react'
import './App.css'
import { Button } from '@/components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  const sakuzyo = () => {
    const kazu = count;
  }
  return (
    <>
      <div className="p-4">
        <Button onClick={sakuzyo} variant="default">タスクを追加</Button>
      </div>

    </>
  )
}

export default App
