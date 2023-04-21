'use client'

import useMaterial from '@/hooks/useMaterial'
import { useParams } from 'next/navigation'
import React from 'react'
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import ReactLoading from "react-loading";


type Props = {
  
}
const Feed:React.FC<Props> = () => {
  const params = useParams()
  const {data,isLoading}:any = useMaterial(params.studentId,params.materialId)
  return (
    <div className=' text-neutral-200 w-full bg-black '>
        {
          isLoading?<ReactLoading type='balls' color='#fff'/>:  
          <div  
                className='p-2 h-full overflow-scroll bg-neutral-200 text-black prose'>
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
                      style={oneDark}
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
                {data?.content}
          </Markdown>
          </div>
        }
          
    </div>
  )
}

export default Feed