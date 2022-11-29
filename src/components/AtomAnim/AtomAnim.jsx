import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, Bounds, OrbitControls, Float } from '@react-three/drei'


export function AtomAnim() {
    
    return (
        <Canvas shadows>
            <directionalLight position={[1, 3, 2]} castShadow />
            <hemisphereLight intensity={1.5} groundColor="#ffffff" />
            <Suspense fallback={null}>
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
            <meshPhongMaterial color="#006fe6" emissive="#000000" specular="#00c0f0" shininess="0" wireframe/>
        </mesh>
    )
}
