import React from 'react'
import { Website } from './types'

type Props = {
  sites: Website[]
}

export default function Websites(props: Props) {
  return (
    <ul>
      {props.sites.map((site) => (
        <li>{site.url}</li>
      ))}
    </ul>
  )
}
