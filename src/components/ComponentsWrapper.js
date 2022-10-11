import React from 'react'
import { MDXProvider } from "@mdx-js/react"

const ExternalLink = props => {
	if (props.href.includes('brggs.co.uk') || props.href[0] === '/') {
		return <a href={props.href}>{props.children}</a>
	}
	return (
		<a href={props.href} target="_blank" rel="noopener noreferrer">
			{props.children}
		</a>
	)
}

const components = {
	a: ExternalLink,
}

const ComponentsWrapper = ({ children }) => {
  return (
    <MDXProvider components={components}>{children}</MDXProvider>
  )
}

export default ComponentsWrapper