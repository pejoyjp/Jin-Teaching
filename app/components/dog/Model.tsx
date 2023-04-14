import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber"

interface GLTFResult {
  nodes: {
    [key: string]: any;
  };
  materials: {
    [key: string]: any;
  };
}

export function Model(props:any) {
  const gltf = useGLTF("/dog.gltf") as unknown as GLTFResult; // 使用 GLTFResult 类型定义
  const group:any = useRef()
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.01;
    }
  });

  return (
    <group {...props} dispose={null} scale={0.6} ref={group}>
      {/* 使用 gltf.nodes 的属性 */}
      <mesh
        castShadow
        receiveShadow
        geometry={gltf.nodes.Plane.geometry}
        material={gltf.materials["Material.001"]}
        position={[-3.4, 0, -2.95]}
        scale={[7.05, 1, 7.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={gltf.nodes.main.geometry}
        material={gltf.materials.palette}
        position={[3.69, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/dog.gltf");
