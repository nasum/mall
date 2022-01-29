import React from 'react'
import styled from 'styled-components'

export default function App() {
  return (
    <>
      <Base>
        <div className="container mx-auto max-w-full h-full bg-white">
          <h1>Hello, world!</h1>
        </div>
      </Base>
      <webview style={WebViewStyle} src="https://electronjs.org"></webview>
    </>
  )
}

const Base = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`
const WebViewStyle = {
  border: 'none',
  height: '100%',
  width: '100%',
}
