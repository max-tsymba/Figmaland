import React from 'react'
import { ILinkProps } from './types'

const Link = ({name, url}: ILinkProps) => {
    return (
        <a className="text-sm leading-18 tracking-wider inline-block text-white" href={url}>
            {name}
        </a>
    )
}

export default Link;