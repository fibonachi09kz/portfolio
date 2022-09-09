import { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Mask, useGLTF, Bounds, OrbitControls, Float } from '@react-three/drei'


export function AtomAnim() {
    const maskRef = useRef()
    return (
        <Canvas shadows>
            <directionalLight position={[1, 3, 2]} castShadow />
            <hemisphereLight intensity={1.5} groundColor="red" />
            <Suspense fallback={null}>
                <group ref={maskRef}>
                    <Mask id={1} position={[0, 0, 0]}>
                        <circleBufferGeometry args={[0.8, 64]} />
                    </Mask>
                </group>
                <Bounds fit clip observe>
                    <Float speed={10} floatingRange={[0.2, 0]}>
                        <Atom invert />
                    </Float>
                </Bounds>
            </Suspense>
            <OrbitControls makeDefault enableZoom={false} />
        </Canvas>
    )
}

function Atom({props}) {
    const { nodes } = useGLTF('/react-transformed.glb')
    return (
        <mesh castShadow receiveShadow geometry={nodes.atom.geometry} {...props} dispose={null}>
            <meshPhongMaterial color="#22d3ee"/>
        </mesh>
    )
}