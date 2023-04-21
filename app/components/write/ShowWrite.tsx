import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {
  oneLight,
} from 'react-syntax-highlighter/dist/cjs/styles/prism'

import React from 'react'

type Props = {
    markdownSource:string
}

const ShowWrite:React.FC<Props> = ({markdownSource}) => {
  return (
    <div className="p-2 h-full bg-slate-200 rounded-lg overflow-y-auto prose">
        <Markdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  language={match[1]}
                  PreTag="div"
                  {...props}
                  style={oneLight}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            },
          }}
        >
          {markdownSource}
      </Markdown>
    </div>
  )
}

export default ShowWrite