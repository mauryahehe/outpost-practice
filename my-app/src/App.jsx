import { useState } from 'react'

export default function App() {
  const [missionComplete, setMissionComplete] = useState(false)

  return (
    <div style={{ backgroundColor: '#111827', color: 'white', minHeight: '100vh', padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>🚀 Space Mission Tracker</h1>
      <div style={{ background: '#1f2937', padding: '24px', borderRadius: '12px', marginTop: '20px', maxWidth: '400px' }}>
        <h2>Mission: Fix the Hyperdrive</h2>
        <p style={{ margin: '16px 0', fontSize: '18px' }}>
          Status: {missionComplete ? '✅ Completed' : '❌ Pending'}
        </p>
        <button 
          onClick={() => setMissionComplete(!missionComplete)}
          style={{ 
            padding: '10px 16px', 
            backgroundColor: missionComplete ? '#10b981' : '#2563eb', 
            color: 'white', 
            border: 'none', 
            borderRadius: '6px', 
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          {missionComplete ? 'Reset Mission' : 'Mark as Complete'}
        </button>
      </div>
    </div>
  )
}