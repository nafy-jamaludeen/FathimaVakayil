"use client"

import { Canvas } from "@react-three/fiber"
import { ShaderPlane, EnergyRing } from "./ui/background-paper-shaders"

interface ScenicBackgroundProps {
  color1?: string
  color2?: string
}

export default function ScenicBackground({
  color1 = "#021C1B", // Brand Dark Green
  color2 = "#1F4D3A", // Brand Forest Green
}: ScenicBackgroundProps) {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden bg-brand-dark" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 1.2], fov: 75 }}
        style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}
      >
        <ambientLight intensity={0.5} />
        
        {/* Main interactive, moving shader plane colored perfectly to match Fathima's visual palette */}
        <ShaderPlane 
          position={[0, 0, 0]} 
          color1={color1} 
          color2={color2} 
        />
        
        {/* Decorative soft spinning energy rings on the side to give an ultra-premium depth feeling */}
        <EnergyRing radius={1.2} position={[-0.8, 0.4, -0.2]} />
        <EnergyRing radius={1.5} position={[0.8, -0.5, -0.3]} />
      </Canvas>
      
      {/* Subtle vignettes and grid overlays to retain the prestigious editorial structure */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#021C1B]/60 via-[#021C1B]/20 to-[#021C1B]/80 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(2,28,27,0.7)_100%)] pointer-events-none" />
    </div>
  )
}
