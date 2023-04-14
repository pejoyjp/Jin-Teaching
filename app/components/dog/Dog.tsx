'use client'
import React from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from './Model';

type Props = {}

const Dog = (props: Props) => {
  return (
    <div className=' w-[300px] h-[250px] mt-20'>
        <Canvas > 
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={0.8} />
            <directionalLight position={[0,0,0]} intensity={1}/>
            <Model/>
        </Canvas>
    </div>
    
  )
}

export default Dog