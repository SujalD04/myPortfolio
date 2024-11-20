import React from 'react';
import { useGLTF, useTexture } from '@react-three/drei';

const HackerRoom = (props) => {
    const { nodes, materials } = useGLTF('/models/hacker-room.glb');

    // Load textures
    const monitorTexture = useTexture('textures/desk/monitor.png');
    const screenTexture = useTexture('textures/desk/screen.png');

    // Ensure textures are oriented correctly
    monitorTexture.flipY = false;
    screenTexture.flipY = false;

    return (
        <group {...props} dispose={null}>
            {/* Screen */}
            <mesh geometry={nodes.screen_screens_0.geometry} material={materials.screens}>
                <meshBasicMaterial transparent={true} color="black" toneMapped={false} />
            </mesh>

            {/* Screen glass */}
            <mesh geometry={nodes.screen_glass_glass_0.geometry} material={materials.glass} />

            {/* Table */}
            <mesh geometry={nodes.table_table_mat_0_1.geometry} material={materials.table_mat} />
            {/* Computer */}
            <mesh geometry={nodes.table_table_mat_0_2.geometry} material={materials.computer_mat}>
                <meshBasicMaterial map={monitorTexture} toneMapped={false} />
            </mesh>

            {/* Other components */}
            <mesh geometry={nodes.table_table_mat_0_3.geometry} material={materials.server_mat} />
            <mesh geometry={nodes.table_table_mat_0_4.geometry} material={materials.vhsPlayer_mat} />
            <mesh geometry={nodes.table_table_mat_0_5.geometry} material={materials.stand_mat} />
            <mesh geometry={nodes.table_table_mat_0_6.geometry} material={materials.mat_mat} />
            <mesh geometry={nodes.table_table_mat_0_7.geometry} material={materials.arm_mat} />

            {/* TV */}
            <mesh geometry={nodes.table_table_mat_0_8.geometry} material={materials.tv_mat}>
                <meshBasicMaterial map={monitorTexture} toneMapped={false} />
            </mesh>

            {/* Miscellaneous */}
            <mesh geometry={nodes.table_table_mat_0_9.geometry} material={materials.cables_mat} />
            <mesh geometry={nodes.table_table_mat_0_10.geometry} material={materials.props_mat} />
            <mesh geometry={nodes.table_table_mat_0_11.geometry} material={materials.ground_mat} />
            <mesh geometry={nodes.table_table_mat_0_12.geometry} material={materials.key_mat} />
        </group>
    );
};

// Preload the GLTF model
useGLTF.preload('/models/hacker-room.glb');

export default HackerRoom;
