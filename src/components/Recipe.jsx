import React from 'react'
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'

export default function Recipe(props) {
    return (
        <section className="generated-recipe" aria-live="polite">
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
}
