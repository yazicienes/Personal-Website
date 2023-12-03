import * as THREE from "three"
import React, { useEffect, useRef, useState } from "react"
import { useGLTF, useAnimations, PerspectiveCamera } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

const color = new THREE.Color()

export default function Model({ scroll, ...props }) {
  const group = useRef()
  const { nodes: ringNodes, materials: ringMaterials, animations: ringAnimations } = useGLTF("/the_one_ring.glb");
  const { nodes: staffNodes, materials: staffMaterials, animations: staffAnimations } = useGLTF("/gandalfs_staff_lord_of_the_rings.glb");
  console.log(ringNodes)
  const { actions } = useAnimations(ringAnimations, group)
  const [hovered, set] = useState()
  const extras = { receiveShadow: true, castShadow: true, "material-envMapIntensity": 0.2 }
  useEffect(() => void (actions["tHE oNE rING|tHE oNE rINGAction"].play().paused = false), [])
  // useEffect(() => {
  //   if (hovered) group.current.getObjectByName(hovered).material.color.set("white")
  //   document.body.style.cursor = hovered ? "pointer" : "auto"
  // }, [hovered])
  // useFrame((state) => {
  //   actions["CameraAction.005"].time = THREE.MathUtils.lerp(actions["CameraAction.005"].time, actions["CameraAction.005"].getClip().duration * scroll.current, 0.05)
  //   group.current.children[0].children.forEach((child, index) => {
  //     child.material.color.lerp(color.set(hovered === child.name ? "tomato" : "#202020"), hovered ? 0.1 : 0.05)
  //     const et = state.clock.elapsedTime
  //   //   child.position.y = Math.sin((et + index * 2000) / 2) * 1
  //   //   child.rotation.x = Math.sin((et + index * 2000) / 3) / 10
  //   //   child.rotation.y = Math.cos((et + index * 2000) / 2) / 10
  //   //   child.rotation.z = Math.sin((et + index * 2000) / 3) / 10
  //   })
  // })

  return (
    <group ref={group} {...props} dispose={null}>
      <group
        > 
        <mesh name="tHE_oNE_rING" geometry={ringNodes.tHE_oNE_rING_Material001_0.geometry} material={ringMaterials.tHE_oNE_rING_Material001_0} position={[0.06, 4.04, 0.35]} scale={[0.75, 0.75, 0.75]} onPointerOver={(e) => (e.stopPropagation(), set(e.object.name))}
        onPointerOut={(e) => (e.stopPropagation(), set(null))}/>
        <mesh name="Staff" geometry={staffNodes['Staff_02_-_Default_0'].geometry} material={staffMaterials['Staff_02_-_Default_0']} position={[0.16, 14.04, 10.35]} scale={[0.05, 0.05, 0.05]} onPointerOver={(e) => (e.stopPropagation(), set(e.object.name))}
        onPointerOut={(e) => (e.stopPropagation(), set(null))} />
       
      </group>
      <group name="Camera" position={[-10.78, 20.04, 20.58]} rotation={[10.62, 10.01, 10.11]}>
        <PerspectiveCamera makeDefault far={100} near={10.1} fov={58} rotation={[-Math.PI / 2, 0, 0]}>
          <directionalLight
            castShadow
            position={[10, 20, 15]}
            shadow-camera-right={8}
            shadow-camera-top={8}
            shadow-camera-left={-8}
            shadow-camera-bottom={-8}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            intensity={2}
            shadow-bias={-0.0001}
          />
        </PerspectiveCamera>
      </group>
    </group>
  )
}

// useGLTF.preload("/model.glb")
