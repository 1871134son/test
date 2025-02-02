import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import JisooText from './components/JisooText';
import './App.css';
import sampleImage from './sample.png';
import backgroundImage from './main.png';
import dummy1 from './dummy1.png';
import dummy2 from './dummy2.png';
import dummy3 from './dummy3.png';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const blackBoxRef = useRef(null);

  useEffect(() => {
    const blackBox = blackBoxRef.current;

    // 1️⃣ 점점 불투명해짐 (스크롤 내리기 시작할 때)
    gsap.to(blackBox, {
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',        // 페이지 시작 지점
        end: '30% center',       // 30% 스크롤 시 완전 불투명
        scrub: true,
        markers: true            // 디버깅용 마커 표시
      },
      opacity: 1,                 // 완전히 불투명해짐
      ease: 'none'
    });

    // 2️⃣ 완전한 검은색 유지 구간
    gsap.to(blackBox, {
      scrollTrigger: {
        trigger: document.body,
        start: '30% center',     // 완전히 불투명해진 상태 유지
        end: '50% center',       // 50% 스크롤 지점까지 유지
        scrub: true,
        markers: true
      },
      opacity: 1,                 // 계속 불투명 상태 유지
      ease: 'none'
    });

    // 3️⃣ 다시 투명해짐 (스크롤 더 내릴 때)
    gsap.to(blackBox, {
      scrollTrigger: {
        trigger: document.body,
        start: '50% center',     // 중앙 지점부터 다시 투명해지기 시작
        end: 'bottom bottom',    // 페이지 끝까지
        scrub: true,
        markers: true
      },
      opacity: 0,                 // 다시 투명해짐
      ease: 'none'
    });
  }, []);

  return (
      <div className="app-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <Navbar />
        <Hero />

        {/* 고정 이미지 */}
        <div className="image-container">
          <img src={sampleImage} alt="Hover Example" className="hover-image" />
        </div>

        {/* JISOO 텍스트 */}
        <JisooText />

        {/* 화면 전체를 덮는 검은색 박스 */}
        <div ref={blackBoxRef} className="full-screen-black-box">
        </div>

        {/* 메인 콘텐츠 */}
        <main className="main-content">
          <Portfolio />
        </main>

        {/* 더미 이미지 섹션 (Footer 바로 위로 이동) */}
        <section className="dummy-images">
          <img src={dummy1} alt="Dummy 1" className="dummy-image" />
          <img src={dummy2} alt="Dummy 2" className="dummy-image" />
          <img src={dummy3} alt="Dummy 3" className="dummy-image" />
        </section>

        <Footer />
      </div>
  );
};

export default App;
