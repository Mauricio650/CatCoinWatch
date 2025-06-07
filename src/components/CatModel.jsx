import { Suspense} from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import "../assets/cat.css"



function Cat () {
    const gltf = useGLTF("/models/Cat.glb")
    return (
    <primitive
      object={gltf.scene}
      scale={[12, 12, 12]}
      position={[0, 0, 0]}
       rotation={[0, Math.PI / 1.7, 0]}
      castShadow 
    />
  )
}


function OverheadLightEffect() {
  return (
    <mesh position={[0, 3, 0]} rotation={[-Math.PI / 70, 0, 0]}>
      <coneGeometry args={[2.8, 9.8, 32]} />
      <meshBasicMaterial color="white" transparent opacity={0.03} />
    </mesh>
  )
}



export function CatModel () {
    return (
      <Canvas >
       <ambientLight intensity={2.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Cat />
          <OverheadLightEffect />
        </Suspense>
         <OrbitControls enableZoom={false} />
      </Canvas>
    )
}