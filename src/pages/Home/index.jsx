import { useEffect, useState } from "react";
import { PillMinHead, CustomBtn, ScrollAnimParaWrap, VideoCardsWrap, CardItems, CardTop, CategoryBullets, CardBottom, MidHeadingCTA, } from "../../assets/css/globalStyle.js";
import { Link } from "react-router-dom";
// import { ScrollTriggerConf, SmoothScroller, } from "../../components/SmoothScroll";
import { gsap, ScrollTrigger } from "gsap/all";
import { LoaderFunction, SectionTopSpace, TextSplitSpans } from "../../utils/contants.js";
import { HoverEnter, HoverLeave, CustomCursorAnim, } from "../../components/HoverInteract";

import MarqueeSlide from "../../components/MarqueeSlide";
import IconHeadingListCardsWrapper from "../../components/IconHeadingListCardsWrapper";
import TestimonialsWrapper from "../../components/TestimonialsWrapper";
import { TestimonialsSection } from "../../components/TestimonialsWrapper/styled.js";
import FAQsWrapper from "../../components/FAQsWrapper";
import { FAQsSection } from "../../components/FAQsWrapper/styled.js";
import { marqueeList, carouselSlideList, clientLogosList, worksList } from "../../utils/apisList.js";

import { HomeHeroSection, HomeHeroWrap, GridFreeAnimCarousel, CarouselWrap, SlideItems, ClientsLogoWrap, LogosWrap, LogoItem, FeaturedWorkSection, FeaturedWorkWrap, MarqueeStripSection, MiddleContentSection, MiddleContentWrap, MiddleContentImage, ServicesSection, BeforeFooterCtaSection, BeforeFooterCtaWrap, ProductsImgTile, BgElemOne, BgElemTwo, AboutSection } from "./styled.js";

import OnScrollContentAnimation from "../../components/OnScrollContentAnimation/index.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from "swiper/modules";



export default function Home() {


    useEffect(() => {
        SectionTopSpace();
        OnScrollContentAnimation();

        // let getParas = [...document.querySelectorAll(".para-reveal-wrap p")];
        // let paraSpans = [];

        // getParas.forEach((paraItems) => {
        //     let paraStrings = "";
        //     let paraArray = paraItems.textContent.split("");

        //     for (let i = 0; i < paraArray.length; i++) {
        //         paraStrings += `<span>${paraArray[i]}</span>`;
        //     }

        //     paraItems.innerHTML = paraStrings;
        // });


        // ScrollTriggerConf();
        CustomCursorAnim();

        gsap.registerPlugin(ScrollTrigger);


        // const tl = gsap.timeline({

        //     scrollTrigger: {
        //         trigger: ".para-reveal-wrap",
        //         start: "top 20%",
        //         end: ()=> "+=" + document.querySelector(".para-reveal-wrap").offsetHeight,
        //         // pin: true,
        //         scrub: 0.75,
        //         markers: true,
        //     }
        // })

        // window.addEventListener("DOMContentLoaded", () => {
        //     ScrollTrigger.refresh();
        //   });


        // tl.to(".para-reveal-wrap",{

        //     scrollTrigger: {
        //         trigger: ".para-reveal-wrap",
        //         start: "top 20%",
        //         end:  "+=100%",
        //         pin: true,
        //         scrub: 0.75,
        //     }
        // }) 

        document.querySelectorAll(".para-reveal-wrap").forEach((paraElWrap) => {

            let paraSpans = [...paraElWrap.querySelectorAll(".para-reveal-wrap p span")];

            document.querySelectorAll(".para-reveal-wrapper").forEach((paraElWrapper) => {

                paraElWrapper.style.height = paraElWrapper.querySelector(".para-reveal-wrap").offsetHeight * 3.5 + "px";
            })

            gsap.to(paraSpans, {

                opacity: 1,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: paraElWrap,
                    start: "top " + window.innerHeight / 4,
                    end: () => "+=" + paraElWrap.offsetHeight * 2.7,
                    // pin: true,
                    scrub: 0.75,
                    // markers: true,
                }

            }, 0.4);

        })

        // gsap.to(".para-reveal-wrap",{
        //         yPercent:-50, 
        //         scrollTrigger: {
        //             trigger: ".para-reveal-wrap",
        //             start: "top 50%",
        //             end:  "+=160%",
        //             pin: true,
        //             scrub: 0.75,
        //         }
        //     }) 


        // paraSpans.forEach((spanEl) => {
        //     gsap.from(spanEl, {

        //         scrollTrigger: {
        //             trigger: spanEl,
        //             start: "top 50%",
        //             end: () => "+=160%",
        //             // pin: true,
        //             scrub: 0.75,
        //             // markers: true,
        //         },

        //         opacity: 1,
        //         stagger: 0.1,

        //     }, 0.4);

        // })



        // paraSpans.forEach((spanEl) => {

        //     gsap.to(spanEl, {
        //         scrollTrigger: {
        //             trigger: spanEl,
        //             // scroller: "[data-scroll-container]",
        //             start: "top 50%",
        //             end: "top 20%",
        //             scrub: true,
        //             markers: false,
        //             // pin: true,

        //         },
        //         opacity: 1,
        //         stagger: 0.1,
        //     })

        // })


        // paraSpans.forEach((spanEl)=>{


        // })

        //   const  revealParas=()=>{
        //         for(let i=0; i<paraSpans.length; i++) {
        //             // console.log(paraSpans)
        //             if(paraSpans[i].parentElement.getBoundingClientRect().top < window.innerHeight / 2){
        //                 let {left,top} = paraSpans[i].getBoundingClientRect();
        //                 top = top - (window.innerHeight * .5);
        //                 let paraOpacity = 1 - ((top * 0.1)+(left * 0.001)) < 0.1 ? 0.1 : 1 - ((top * 0.1)+(left * 0.001)).toFixed(3);
        //                 paraOpacity = paraOpacity > 1 ? 1 : paraOpacity.toFixed(3);

        //                 paraSpans[i].style.opacity = paraOpacity;
        //             }
        //         }
        //     }

        //     window.addEventListener("scroll", ()=>{
        //         revealParas()
        //     })
        //     revealParas();




        // Magnet Cta

        document.querySelectorAll('.magnet-btn ').forEach(btn => {

            btn.addEventListener('mousemove', (e) => {

                const rect = btn.getBoundingClientRect();
                const h = rect.width / 2;

                const x = e.clientX - rect.left - h;
                const y = e.clientY - rect.top - h;

                const r1 = Math.sqrt(x * x + y * y);
                const r2 = (1 - (r1 / h)) * r1;

                const angle = Math.atan2(y, x);
                const tx = Math.round(Math.cos(angle) * r2 * 100) / 100;
                const ty = Math.round(Math.sin(angle) * r2 * 100) / 100;

                const op = (r2 / r1) + 0.25;

                btn.style.setProperty('--tx', `${tx}px`);
                btn.style.setProperty('--ty', `${ty}px`);
                // btn.style.setProperty('--opacity', `${op}`);
            });

            btn.addEventListener('mouseleave', (e) => {

                btn.style.setProperty('--tx', '0px');
                btn.style.setProperty('--ty', '0px');
                // btn.style.setProperty('--opacity', `${0.25}`);

            });
        })

        // Magnet Cta end


        setTimeout(() => {

            let getCloneWrapper = document.querySelectorAll('.carousel-wrap, .marquee-strip-list');
            getCloneWrapper.forEach((getCloneWrap) => {



                getCloneWrap.querySelectorAll(" div").forEach((item) => {
                    let cloneList = item.cloneNode(true)
                    // console.log(cloneList );
                    getCloneWrap.append(cloneList)
                    getCloneWrap.append(cloneList)


                    let getListOfSlide = getCloneWrap.querySelectorAll(" div").length,
                        getFirstSlideW = getCloneWrap.querySelectorAll(" div")[0].offsetWidth;


                    getCloneWrap.style.animationDuration = (getListOfSlide * (getFirstSlideW / 100) - 10) + "s";

                })
            })

        }, 300)



        LoaderFunction();





    }, []);

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [showCard, setShowCard] = useState(false);

    // Handle mouse move event to update position
    const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    // // Handle mouse enter and leave events to show/hide the card
    // const handleMouseEnter = () => {
    //     setShowCard(true);
    // };

    // const handleMouseLeave = () => {
    //     setShowCard(false);
    // };








    return (
        <>
            <div className="page-loader">
                <video
                    loop={true}
                    autoPlay={true}
                    preload='true'
                    muted={true}
                    src={require("../../assets/videos/banner-animation.mp4")}>
                    <source
                        src={require("../../assets/videos/banner-animation.mp4")}
                        type='video/mp4'></source>
                </video>


                <div id="loader">
                    <div id="bar"><span id="percent"></span></div>
                </div>

            </div>
            <HomeHeroSection className="next-section-curve curve-bg-yellow-cream hero-section"
                data-scroll-section
            >
                <div className='container'>
                    <div className='equal-padding-T equal-padding-B'>
                        <HomeHeroWrap>
                            <PillMinHead className='text-lg-center'>
                                <p>
                                    👋 We are Creative agency based twin city of
                                    Mumbai
                                </p>
                            </PillMinHead>
                            <h1 className='hero-head text-lg-center mb-4'>
                                Your in-house design & engineering <span className=" d-lg-none">team</span> {" "}
                                <img src={require("../../assets/images/pill-image-hero.png")} alt='Pill thumbs' className="pill-thumbs-anim" />
                                {" "}
                                <span className="d-lg-inline d-none">team</span>
                            </h1>
                            <p className='text-lg-center mb-5 theme-fw-300'>
                                Together, we can transform forward-thinking
                                ideas into futuristic <br /> solutions with our
                                robust technology & our scalable design
                                approach.
                            </p>
                            <CustomBtn className='text-center'>
                                <Link to='/'>Let's Talk</Link>{" "}
                            </CustomBtn>

                            <BgElemOne><img src={require("../../assets/images/blur-yellow-circle-element-illus.svg").default} alt='BG Elems' /></BgElemOne>
                            <BgElemTwo><img src={require("../../assets/images/blur-orange-circle-element-illus.svg").default} alt='BG Elems' /></BgElemTwo>
                        </HomeHeroWrap>
                    </div>
                </div>
                <div className='  equal-padding-B'>
                    <GridFreeAnimCarousel>
                        <CarouselWrap className="carousel-wrap">
                            {carouselSlideList.map((item, index) => (

                                <SlideItems key={index}>
                                    <img
                                        src={require("../../assets/images/our-work-images/" +
                                            item.itemImg)}
                                        alt={item.itemTitle}
                                    />
                                </SlideItems>

                            ))}
                        </CarouselWrap>
                    </GridFreeAnimCarousel>
                </div>

                <div className='container'>
                    <div className=' equal-padding-T equal-padding-B'>
                        <ClientsLogoWrap>
                            <p className='sub-head text-center mb-5'>
                                Driving Digital Experience for{" "}
                                <strong>70+</strong> companies in{" "}
                                <strong>India, Middle East & Singapore!</strong>
                            </p>
                            <LogosWrap className='row row-cols-lg-5 row-cols-2 justify-content-center '>
                                {clientLogosList.map((item, index) => (
                                    <div className='col ' key={index}>
                                        <LogoItem>
                                            <Swiper
                                                effect={'fade'}
                                                slidesPerView={1}
                                                spaceBetween={30}
                                                centeredSlides={true}

                                                allowTouchMove={false}
                                                autoplay={{
                                                    delay: 2500,
                                                    disableOnInteraction: false,
                                                }}
                                                modules={[Autoplay, EffectFade]}
                                            >
                                                {

                                                    item.logosList.map((childItem, index) => (

                                                        <SwiperSlide key={index}>
                                                            <img
                                                                src={require("../../assets/images/" +
                                                                    childItem.logoImg)}
                                                                alt={childItem.logoTitle}
                                                            />
                                                        </SwiperSlide>
                                                    ))
                                                }
                                            </Swiper>
                                        </LogoItem>
                                    </div>
                                ))}
                            </LogosWrap>
                        </ClientsLogoWrap>
                    </div>


                </div>
            </HomeHeroSection>

            <AboutSection className='theme-bg-yellow-cream next-section-curve curve-bg-black-secondary overflow-visible'>
                <div className="container col-lg-7 mx-auto">
                    <div className='  equal-padding-B'>
                        <div className=''>
                                <div className="para-reveal-wrapper"  >

                                    <ScrollAnimParaWrap className='para-reveal-wrap'>
                                        <p>
                                            <TextSplitSpans text="
                                        “Designing India's Tomorrow”
                                        encapsulates our commitment to crafting
                                        design solutions that transcend
                                        aesthetics and make a tangible impact on
                                        India's future.
                                        " />

                                        </p>
                                        <p>
                                            <TextSplitSpans text="
                                    We're not just creating visuals; we're
                                        weaving narratives that contribute to
                                        the evolving tapestry of our nation.
                                        Each design choice is a step toward a
                                        more vibrant, connected, and innovative
                                        India. 
                                        "/>
                                        </p>
                                        <p>
                                            <TextSplitSpans text="
                                        We see ourselves as architects of
                                        change, harnessing the power of design
                                        to shape a brighter and more engaging
                                        tomorrow for India” 
                                        "/>
                                        </p>
                                    </ScrollAnimParaWrap>
                                </div>
                        </div>
                    </div>
                    <div
                        className='bottom-image-wrap text-center'
                        style={{ transform: "translateY(10px)" }}>
                        <img src={require("../../assets/images/group-of-people-image.svg").default} alt='Group of People images' className="w-100" />
                    </div>
                </div>
            </AboutSection>

            <FeaturedWorkSection
                className='theme-bg-black-secondary '
                data-scroll-section>
                <div className='container'>
                    <div className=' equal-padding-B'>
                        <FeaturedWorkWrap>
                            <PillMinHead className='text-center light-pill'>
                                <p>💻 work</p>
                            </PillMinHead>
                            <h2 className='section-head mb-5 text-center theme-text-white'>
                                Featured Work
                            </h2>

                            <VideoCardsWrap>
                                {worksList.map((item, index) => (
                                    <CardItems key={index}>
                                        <CardTop
                                        // onMouseEnter={() =>
                                        //     HoverEnter("View <br> work")
                                        // }
                                        // onMouseLeave={() => HoverLeave()}
                                        >
                                            <CategoryBullets>
                                                <span>{item.itemCategory}</span>
                                            </CategoryBullets>
                                            <video
                                                loop={true}
                                                autoPlay={true}
                                                preload='true'
                                                muted={true}
                                                src={require("../../assets/videos/design-system-demo.mp4")}>
                                                <source
                                                    src={require("../../assets/videos/design-system-demo.mp4")}
                                                    type='video/mp4'></source>
                                            </video>
                                            <img src={require("../../assets/images/" + item.itemImg)} alt={item.itemTitle} />
                                        </CardTop>
                                        <CardBottom>
                                            <h6>
                                                {item.itemTitle} &mdash;{" "}
                                                <span>
                                                    {item.itemDescription}{" "}
                                                </span>
                                            </h6>
                                        </CardBottom>
                                    </CardItems>
                                ))}
                            </VideoCardsWrap>

                            <CustomBtn className='text-center mt-5 '>
                                <Link to='/' className='light-btn ' >
                                    See more work
                                </Link>{" "}
                            </CustomBtn>
                            <p className='text-center mt-4 theme-text-gray'>
                                As a design agency, a significant portion of our
                                projects <br />
                                involves confidential information covered by
                                NDAs.
                            </p>
                        </FeaturedWorkWrap>
                    </div>
                </div>
            </FeaturedWorkSection>
            <MarqueeStripSection
                onMouseMove={handleMouseMove}
                className='theme-bg-black-secondary next-section-curve curve-bg-white'>

                <div className='equal-padding-B '>
                    <MarqueeSlide
                        data={marqueeList}
                    > </MarqueeSlide>
                </div>


                <ProductsImgTile className="products-img-tile" style={{ left: position.x, top: position.y }}>
                    <img src={require("../../assets/images/gmi-website-design-image.png")} alt="Thumbnails" />
                </ProductsImgTile>

            </MarqueeStripSection>

            <MiddleContentSection
                className='theme-bg-white next-section-curve curve-bg-primary '
                data-scroll-section>
                <div className='container'>
                    <div className='  equal-padding-B'>
                        <MiddleContentWrap>
                            <div className='row g-5 '>
                                <div className='col-lg-8'>
                                    {/* <div className="para-reveal-wrapper"  >

                                        <ScrollAnimParaWrap className='para-reveal-wrap'>
                                            <p className="text-start">
                                                <TextSplitSpans text="
                                            Starting as an enthusiastic who wanted
                                        to make something truly great for other
                                        people, we are now designing an user
                                        experience that involves a process based
                                        holistic approach to create value for
                                        you, your customers, and your partners.
                                        " />

                                            </p>
                                        </ScrollAnimParaWrap>
                                    </div> */}
                                    <p>
                                        Starting as an enthusiastic who wanted
                                        to make something truly great for other
                                        people, we are now designing an user
                                        experience that involves a process based
                                        holistic approach to create value for
                                        you, your customers, and your partners.
                                    </p>
                                </div>
                                <div className='col-lg-4'>
                                    <MiddleContentImage>
                                        <img src={require("../../assets/images/heyo-image.svg").default} alt='Heyo' />
                                    </MiddleContentImage>
                                </div>
                            </div>
                        </MiddleContentWrap>
                    </div>
                </div>
            </MiddleContentSection>

            <ServicesSection
                className='theme-bg-primary next-section-curve curve-bg-yellow-cream'
                data-scroll-section>
                <div className='container'>
                    <div className='  equal-padding-B'>
                        <PillMinHead className='text-center  '>
                            <p>👩‍💻 Services</p>
                        </PillMinHead>
                        <h2 className='section-head mb-5 text-center  '>
                            You have the ambition, <br />
                            we have the expertise
                        </h2>

                        <IconHeadingListCardsWrapper />
                    </div>
                </div>
            </ServicesSection>

            <TestimonialsSection
                data-scroll-section
                className='theme-bg-yellow-cream next-section-curve curve-bg-black-secondary'>
                <div className='container'>
                    <div className='  equal-padding-B'>
                        <PillMinHead className='text-center  '>
                            <p>💬 Testimonials</p>
                        </PillMinHead>
                        <h2 className='section-head mb-5 text-center  '>
                            What our clients <br /> say about us
                        </h2>

                        <TestimonialsWrapper />
                    </div>
                </div>
            </TestimonialsSection>

            <FAQsSection
                data-scroll-section
                className='theme-bg-black-secondary next-section-curve curve-bg-primary'>
                <div className='container'>
                    <div className=' equal-padding-B'>
                        <FAQsWrapper />
                    </div>
                </div>
            </FAQsSection>

            <BeforeFooterCtaSection
                data-scroll-section
                className='theme-bg-primary next-section-curve curve-bg-black-secondary'>
                <div className='container'>
                    <div className=' equal-padding-B'>
                        <BeforeFooterCtaWrap>
                            <PillMinHead className='text-center  '>
                                <p>💬 Available for new projects</p>
                            </PillMinHead>
                            <h2 className='section-head mb-5 text-center   '>
                                Interested in <br />
                                working{" "}
                                <MidHeadingCTA className="magnet-btn">
                                    <Link to='/' > <strong className="magnet-btn-text">Let’s connect!!! </strong></Link>
                                </MidHeadingCTA>{" "}
                                together?
                            </h2>
                        </BeforeFooterCtaWrap>
                    </div>
                </div>
            </BeforeFooterCtaSection>

            {/* <MarqueeSection  data-scroll-section className="theme-bg-black-secondary">
                <MarqueeSlideV2 />
            </MarqueeSection> */}
        </>
    );
}
