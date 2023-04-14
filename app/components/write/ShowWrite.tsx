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
    <Markdown className="prose" children={markdownSource} remarkPlugins={[remarkGfm]}
                    components={{
                    code({ node, inline, className, children, style,...props }) {
                        const match = /language-(\w+)/.exec(className || "");
            
                        return !inline && match ? (
                        <SyntaxHighlighter
                            style={oneDark} 
                            PreTag="div"
                            language={match[1]}
                            children={String(children).replace(/\n$/, "")}
                            {...props}
                        />
                        ) : (
                        <code className={className ? className : ""} {...props}>
                            {children}
                        </code>
                        );
                    }
                }}
        />
    </div>
  )
}

export default ShowWrite