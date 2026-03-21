import { Canvas, useFrame } from "@react-three/fiber"
import { Stars, Grid } from "@react-three/drei"
import { useRef } from "react"

function StableGrid() {
  const gridRef = useRef()
  let offset = 0

  useFrame((_, delta) => {
    // VERY SLOW motion (illusion only)
    offset += delta * 0.15

    if (gridRef.current) {
      gridRef.current.position.z = offset % 5
    }
  })

  return (
    <Grid
      ref={gridRef}
      position={[0, -2, 0]}
      args={[40, 40]}
      cellSize={1.2}
      cellThickness={0.5}
      cellColor="#22d3ee"
      sectionSize={6}
      sectionThickness={1.2}
      sectionColor="#0ea5e9"
      fadeDistance={20}
      fadeStrength={1}
      /* ❌ infiniteGrid REMOVED */
    />
  )
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 2, 6], fov: 60 }}
        dpr={[1, 1.5]}     // 👈 performance boost
      >
        <ambientLight intensity={0.12} />

        {/* OPTIMIZED STARS (LESS LOAD) */}
        <Stars radius={120} depth={80} count={1400} factor={3} fade speed={0.15} />
        <Stars radius={80} depth={50} count={900} factor={2} fade speed={0.3} />

        {/* STABLE GRID */}
        <StableGrid />
      </Canvas>
    </div>
  )
}
