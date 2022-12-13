import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, Bounds, OrbitControls, Float } from '@react-three/drei'


export const AtomAnim = React.memo( function AtomAnim() {
    
    return (
        <Canvas>
            <directionalLight position={[1, 3, 2]} />
            <hemisphereLight intensity={1.2} groundColor="#ffffff" />
            <Suspense fallback={null}>
                <Bounds fit clip observe>
                    <Float speed={10} floatingRange={[0.2, 0]}>
                        <Atom />
                    </Float>
                </Bounds>
            </Suspense>
            <OrbitControls makeDefault enableZoom={false} enablePan={false} />
        </Canvas>
    )
})

function Atom() {
    const { nodes } = useGLTF('/react-transformed.glb')
    return (
        <mesh geometry={nodes.atom.geometry} >
            <meshPhongMaterial color="#006fe6" emissive="#000000" specular="#00c0f0" shininess="0"/>
        </mesh>
    )
}
