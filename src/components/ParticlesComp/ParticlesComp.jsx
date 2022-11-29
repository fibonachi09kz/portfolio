import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const ParticlesComp = () => {
	const particlesInit = useCallback(async engine => {
		await loadFull(engine);
	}, []);
	
	let particlesCount = window.innerWidth <= 768 ? 50 : 100;
	
	return (
		<Particles
			id="tsparticles"
			init={particlesInit}
			options={{
				background: {
					color: {
						value: "#111827",
					},
				},
				fpsLimit: 120,
				interactivity: {
					events: {
						resize: true,
					},
					modes: {
						push: {
							quantity: 4,
						}
					},
				},
				particles: {
					color: {
						value: "#ffffff",
					},
					collisions: {
						enable: true,
					},
					move: {
						directions: "none",
						enable: true,
						outModes: {
							default: "bounce",
						},
						random: false,
						speed: 0.4,
						straight: false,
					},
					number: {
						value: particlesCount,
					},
					opacity: {
						value: 0.5,
					},
					shape: {
						type: "star"
					},
					size: {
						value: 1,
					},
				},
				detectRetina: true,
			}}
		/>
	);
};

export default ParticlesComp;
