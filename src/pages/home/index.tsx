import { useState } from 'react'

export default function HomePage() {
  const [counter, setCounter] = useState<number>(0)

  return (
    <div className='bg-zinc-900 w-full h-dvh overflow-hidden flex flex-col items-center gap-6 justify-center'>
      <h2 className='text-4xl font-bold text-white'>HEV 🔥 Stack</h2>
      <button
        onClick={() => setCounter(counter + 1)}
        className='h-10 w-24 bg-zinc-800 rounded-md border border-zinc-800 hover:border-blue-300/70 text-white transition-colors'
      >
        {counter}
      </button>
      <span className='text-white'>
        Edit the{' '}
        <code className='text-white bg-zinc-700 px-1 rounded-md'>
          src/pages/home/index.tsx
        </code>{' '}
        to see changes live
      </span>
    </div>
  )
}
