import React, {useEffect, useRef} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const aboutRef = useRef(null);

    useEffect(() => {
        gsap.from(aboutRef.current, {
            scrollTrigger: {
                trigger: aboutRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            },
            opacity: 0,
            y: 50,
            duration: 1.5,
            ease: 'power2.out',
        });
    }, []);

    return (
        <section id="about" className="h-screen bg-gray-900 flex items-center justify-center">
            <div ref={aboutRef} className="text-center px-6">
                <h2 className="text-4xl font-bold mb-4">About Me</h2>
                <p className="text-lg text-gray-300 leading-7">
                    I create immersive digital experiences with a focus on interaction and design.
                </p>
            </div>
        </section>
    );
};

export default About;
