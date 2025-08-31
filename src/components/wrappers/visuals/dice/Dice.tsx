import { Canvas } from '@react-three/fiber';

function D12Mesh() {
  return (
    <mesh rotation={[0.4, 0.4, 0]}>
      {/* Геометрия D12 — додекаэдр */}
      <dodecahedronGeometry args={[1, 0]} />
      {/* Материал */}
      <meshStandardMaterial color="orange" flatShading />
    </mesh>
  );
}

export default function D12Scene() {
  return (
    <Canvas camera={{ position: [3, 3, 3] }}>
      {/* Свет */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      {/* Наш D12 */}
      <D12Mesh />
    </Canvas>
  );
}
