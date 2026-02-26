import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <h1>Git Practice App</h1>
      <p>Use this app to practice Git commands!</p>

      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          Count: {count}
        </button>
      </div>

      <div className="instructions">
        <h2>Git Commands to Try:</h2>
        <ul>
          <li><code>git init</code> - Initialize repository</li>
          <li><code>git add .</code> - Stage all files</li>
          <li><code>git commit -m "message"</code> - Commit changes</li>
          <li><code>git branch feature-name</code> - Create branch</li>
          <li><code>git checkout branch-name</code> - Switch branch</li>
          <li><code>git merge branch-name</code> - Merge branch</li>
        </ul>
      </div>
    </div>
  )
}

export default App
