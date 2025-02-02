import React, {useEffect, useRef} from 'react';
import {gsap} from 'gsap';

const Hero = () => {
    const titleRef = useRef(null);

    useEffect(() => {
        gsap.from(titleRef.current, {
            opacity: 0,
            y: 50,
            duration: 1.5,
            ease: 'power3.out',
        });
    }, []);

    return (
        <section
            id="hero"
            className="h-screen flex items-center justify-center bg-cover bg-center"
            style={{backgroundImage: "url('https://source.unsplash.com/random')"}}
        >
            <h1
                ref={titleRef}
                className="text-6xl md:text-8xl font-extrabold tracking-tight"
            >
                Building Connections
            </h1>
        </section>
    );
};

export default Hero;
