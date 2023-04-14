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
    <div className='h-full overflow-scroll text-white w-full pl-2'>
       
        {
          
          isLoading?<ReactLoading type='balls' color='#fff'/>:  
              <Markdown className="prose" children={data?.content} remarkPlugins={[remarkGfm]}
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
        }
          
    </div>
  )
}

export default Feed