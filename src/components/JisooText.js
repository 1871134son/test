import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const JisooText = () => {
    const textRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            textRef.current,
            { y: 0, opacity: 1 },
            {
                y: -400, // 천천히 위로 이동
                opacity: 0, // 서서히 사라지기
                scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top 80%',  // 스크롤을 조금 내리면 시작
                    end: 'top -10%',   // 상단을 벗어나면 사라짐
                    scrub: 1.5,        // 부드럽게 이동
                },
            }
        );
    }, []);

    return (
        <div className="jisoo-container">
            <h1 ref={textRef} className="jisoo-text">
                JISOO
            </h1>
        </div>
    );
};

export default JisooText;
