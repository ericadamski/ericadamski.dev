import React from 'react'

export default function Emoji(props) {
  return <span role="img" aria-label={props.alt}>{props.children}</span>
}
