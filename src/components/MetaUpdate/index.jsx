import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function MetaUpdate(props) {
    return (
        <Helmet>
            <title>{props.pageTitle}</title>
            <meta name="description"
                content={props.pageDesc} />

            <meta name="twitter:title" content={props.pageTitle} />
            <meta name="twitter:description"
                content={props.pageDesc} />
            <meta property="og:title" content={props.pageTitle} />
            <meta property="og:description"
                content={props.pageDesc} />
            <meta property="og:url" content={props.pageUrl} />
            <link rel="canonical" href={props.pageUrl} />
        </Helmet>
    )
}
