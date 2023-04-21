'use client'

import useMaterial from '@/hooks/useMaterial'
import { useParams } from 'next/navigation'
import React from 'react'
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import { oneLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import ReactLoading from "react-loading";


type Props = {
  
}
const Feed:React.FC<Props> = () => {
  const params = useParams()
  const {data,isLoading}:any = useMaterial(params.studentId,params.materialId)
  return (
    <div className='h-full overflow-scroll text-white w-full p-2 bg-gray-200 '>
       
        {
          
          isLoading?<ReactLoading type='balls' color='#fff'/>:  
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
                {data?.content}
          </Markdown>
        }
          
    </div>
  )
}

export default Feed