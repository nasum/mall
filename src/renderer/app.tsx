import React, { useState } from 'react'
import URLForm from './URLForm'
import Websites from './Websites'
import { Website } from './types'

export default function App() {
  const [websites, setWebsite] = useState<Website[]>([])

  function handleSetWebsite(website: string) {
    setWebsite([...websites, { url: website }])
  }

  return (
    <>
      <div className="container mx-auto max-w-full h-full bg-white p-5">
        <h1 className="text-2xl">Mall</h1>
        <p>Enter your favorite website.</p>
        <p>
          <URLForm handleSetWebsite={handleSetWebsite} />
        </p>
        <p>
          <Websites sites={websites} />
        </p>
      </div>
    </>
  )
}
