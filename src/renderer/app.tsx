import React, { useState, useEffect } from 'react'
import { ContextBridge } from '../preload/index'
import { Website } from '../preload/types'

import URLForm from './URLForm'
import Websites from './Websites'

// eslint-disable-next-line
// @ts-ignore
const api: ContextBridge = window.api

export default function App() {
  const [websites, setWebsite] = useState<Website[]>([])

  function handleSetWebsite(website: string) {
    api.setWebsite(website)
    setWebsite([...websites, { url: website }])
  }

  useEffect(() => {
    ;(async () => {
      const rows: Website[] = await api.getWebsites()
      setWebsite(rows)
    })()
  }, [websites])

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
