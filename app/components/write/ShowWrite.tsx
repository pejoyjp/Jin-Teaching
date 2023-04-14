import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import React from 'react'

type Props = {
    markdownSource:string
}

const ShowWrite:React.FC<Props> = ({markdownSource}) => {
  return (
    <div className="p-2 h-full bg-slate-200 rounded-lg overflow-y-auto">
        <Markdown className="prose" remarkPlugins={[remarkGfm]}
                    components={{
                    
                    }}
              >
                    {markdownSource}
        </Markdown>
    </div>
  )
}

export default ShowWrite