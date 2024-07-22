import { useEffect, useState } from "react";
import { PillMinHead, CustomBtn, ScrollAnimParaWrap, VideoCardsWrap, CardItems, CardTop, CategoryBullets, CardBottom, MidHeadingCTA, CTAWithContentBar, } from "../../assets/css/globalStyle.js";
import { Link } from "react-router-dom";
// import { ScrollTriggerConf, SmoothScroller, } from "../../components/SmoothScroll";
import { gsap, ScrollTrigger } from "gsap/all";
import { LoaderAnimation, LoaderFunction, ScrollToTop, SectionTopSpace, TextRevealScroll, TextSplitSpans } from "../../utils/contants.js";
import { HoverEnter, HoverLeave, CustomCursorAnim, } from "../../components/HoverInteract";

import MarqueeSlide from "../../components/MarqueeSlide";
import IconHeadingListCardsWrapper from "../../components/IconHeadingListCardsWrapper";
import TestimonialsWrapper from "../../components/TestimonialsWrapper";
import { TestimonialsSection } from "../../components/TestimonialsWrapper/styled.js";
import FAQsWrapper from "../../components/FAQsWrapper";
import { FAQsSection } from "../../components/FAQsWrapper/styled.js";
import { marqueeList, carouselSlideList, clientLogosList, worksList, loaderSlider } from "../../utils/apisList.js";

import { HomeHeroSection, HomeHeroWrap, GridFreeAnimCarousel, CarouselWrap, SlideItems, ClientsLogoWrap, LogosWrap, LogoItem, FeaturedWorkSection, FeaturedWorkWrap, MarqueeStripSection, MiddleContentSection, MiddleContentWrap, MiddleContentImage, ServicesSection, ProductsImgTile, BgElemOne, BgElemTwo, AboutSection } from "./styled.js";

import OnScrollContentAnimation from "../../components/OnScrollContentAnimation/index.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from "swiper/modules";
import LoadingAnimation from "../../components/LoadingAnimation/index.jsx";
import BeforeFooterCtaWrapper from "../../components/BeforeFooterCtaWrapper/index.jsx";



export default function Home() {


    useEffect(() => {
        SectionTopSpace(); 

        OnScrollContentAnimation();

        CustomCursorAnim();

        TextRevealScroll(".para-reveal-wrap" , " p span");

        LoaderFunction();

        LoaderAnimation();
        




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



        // setTimeout(() => {


        // }, 500)






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
            {/* <div className="page-loader">
                <video
                    loop muted  webkit-playsinline={"true"} playsInline autoPlay
                    preload={'auto'}
                type={'video/webm'}
                    src={require("../../assets/videos/banner-animation-v2.4.webm")}>
                    <source
                        src={require("../../assets/videos/banner-animation-v2.4.webm")}
                        type='video/webm'></source>
                </video>


                <div id="loader">
                    <div id="bar"><span id="percent"></span></div>
                </div>

            </div> */}

            <LoadingAnimation />


            <HomeHeroSection className="  hero-section next-section-curve curve-bg-black-secondary"
                data-scroll-section
            >
                <div className='container'>
                    <div className='equal-padding-T equal-padding-B'>
                        <HomeHeroWrap>
                            <PillMinHead className='text-lg-center hero-pill-text'>
                                <p>
                                    👋 WE ARE CREATIVE AGENCY BASED IN TWIN CITY OF MUMBAI
                                </p>
                            </PillMinHead>
                            <h1 className='hero-head text-lg-center mb-4'>
                                Your in-house design & engineering <span className=" d-lg-none">team</span> {" "}
                                <span className="pill-thumbs-anim" ></span>

                                {" "}
                                <span className="d-lg-inline d-none"> team</span>
                            </h1>
                            {/* <h1 className='hero-head text-lg-center mb-4'>
                                Your in-house design & engineering <span className=" d-lg-none">team</span> {" "}
                                <img src={require("../../assets/images/pill-image-hero.png")} alt='Pill thumbs' className="pill-thumbs-anim" />
                                {" "}
                                <span className="d-lg-inline d-none"> team</span>
                            </h1> */}
                            <p className='text-lg-center mb-5 theme-fw-300 hero-para'>
                                Together, we can transform forward-thinking
                                ideas into futuristic <br /> solutions with our
                                robust technology & our scalable design
                                approach.
                            </p>
                            <CustomBtn className='text-lg-center hero-cta'>
                                <Link to='https://hybreed.co/contact'>Let's Talk</Link>{" "}
                            </CustomBtn>

                            <BgElemOne><img src={require("../../assets/images/blur-yellow-circle-element-illus.svg").default} alt='BG Elems' /></BgElemOne>
                            <BgElemTwo><img src={require("../../assets/images/blur-orange-circle-element-illus.svg").default} alt='BG Elems' /></BgElemTwo>
                        </HomeHeroWrap>
                    </div>
                </div>
                <div className=' grid-free-anim-carousel'>
                    <GridFreeAnimCarousel>
                        <CarouselWrap className="carousel-wrap">
                            {carouselSlideList.map((item, index) => (

                                <SlideItems key={index}>
                                    <img
                                        src={require("../../assets/images/our-work-images-v2/" + item.itemImg)}
                                        alt={item.itemTitle}
                                    />
                                </SlideItems>

                            ))}
                            {carouselSlideList.map((item, index) => (

                                <SlideItems key={index}>
                                    <img
                                        src={require("../../assets/images/our-work-images-v2/" + item.itemImg)}
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
                            <LogosWrap className='row row-cols-lg-5 row-cols-2 align-items-center justify-content-center '>
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

                    <div className="container col-lg-7 mx-auto  ">
                        <div className='  equal-padding-B'>
                            <div className=''>
                                <div className="para-reveal-wrapper"  >

                                    <ScrollAnimParaWrap className='para-reveal-wrap'>
                                        <p className="theme-text-black-secondary">
                                            We work with people that challenge us creatively.  Who let us think without walls to arrive at the best possible creative solution. Partnerships are based on trust and this can only happen when both parties share the same vision and are driven to succeed.
                                        </p>
                                        <p className="theme-text-black-secondary">
                                            This is what we call the <strong>HYBREED PARTNERSHIP</strong>.
                                        </p>


                                    </ScrollAnimParaWrap>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className='bottom-image-wrap text-center'
                        style={{ transform: "translateY(5px)" }}>
                        <img src={require("../../assets/images/hybreed-family-group-image.svg").default} alt='Hybreed Family' className="w-100" />
                    </div>


                </div>
            </HomeHeroSection>

            {/*<AboutSection className='  next-section-curve curve-bg-black-secondary overflow-visible'>
                <div className="container col-lg-7 mx-auto px-lg-5">
                     <div className='  equal-padding-B'>
                        <div className=''>
                            <div className="para-reveal-wrapper"  >

                                <ScrollAnimParaWrap className='para-reveal-wrap'>
                                    <p>
                                        <TextSplitSpans text={
                                    "We work with people that challenge us creatively.  Who let us think without walls to arrive at the best possible creative solution. Partnerships are based on trust and this can only happen when both parties share the same vision and are driven to succeed."
                                        }/>
                                    </p>
                                    <p>
                                        <TextSplitSpans text={
                                            "This is what we call the HYBREED PARTNERSHIP."
                                        } />
                                    </p>

                                    {/* <p>
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
                    
                </div>
            </AboutSection>*/}

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
                                    <CardItems key={index}
                                        onMouseEnter={() =>
                                            item.itemLink === "" ?
                                                HoverEnter("Coming <br> Soon!")
                                                :
                                                HoverEnter("Know <br> More")
                                        }
                                        onMouseLeave={() => HoverLeave()}
                                    >
                                        <Link to={item.itemLink === "" ? "/" : item.itemLink}  >

                                            <CardTop className="scroll-anim-card">
                                                <CategoryBullets>
                                                    <span>{item.itemCategory}</span>
                                                </CategoryBullets>
                                                {/* <video 
                                                loop={true}
                                                autoPlay={true}
                                                preload='true' 
                                                muted={true}
                                                src={"http://hybclient.com/hybreed-cdn-assets/videos/design-system-demo.mp4"}>
                                                <source
                                                    src={"http://hybclient.com/hybreed-cdn-assets/videos/design-system-demo.mp4"}
                                                    type='video/mp4'></source>
                                            </video> */}
                                                <img src={require("../../assets/images/" + item.itemImg)} alt={item.itemTitle} />
                                            </CardTop>
                                        </Link>
                                        <CardBottom>
                                            <CategoryBullets>
                                                <span>{item.itemCategory}</span>
                                            </CategoryBullets>
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
                                <Link to='https://hybreed.co/contact' className='light-btn ' >
                                Request Portfolio
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


                {/* <ProductsImgTile className="products-img-tile" style={{ left: position.x, top: position.y }}>
                    <img src={require("../../assets/images/gmi-website-design-image.png")} alt="Thumbnails" />
                </ProductsImgTile> */}

            </MarqueeStripSection>

            <MiddleContentSection
                className='theme-bg-white next-section-curve curve-bg-primary '
                data-scroll-section>
                <div className='container'>
                    <div className='  equal-padding-B'>
                        <MiddleContentWrap>
                            <div className='row g-lg-5 g-4 '>
                                <div className='col-lg-7'>
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
                                        We began as a group of passionate individuals with a dream to create something truly remarkable for others. Our journey has been driven by a desire to design user experiences that are not only beautiful but also deeply impactful.</p>
                                    <p> Today, we employ a holistic, process-based approach to ensure that every project we undertake brings genuine value to you, your customers, and your partners.</p>
                                </div>
                                <div className='col-lg-5'>
                                    <MiddleContentImage>
                                        <img src={require("../../assets/images/hybreed-working.svg").default} alt='Hybreed' />
                                    </MiddleContentImage>
                                </div>
                            </div>
                        </MiddleContentWrap>
                    </div>
                </div>
            </MiddleContentSection>

            <ServicesSection
                className='theme-bg-primary next-section-curve curve-bg-yellow-cream  '
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
                        <CTAWithContentBar className='theme-bg-black-secondary mt-5 mx-lg-3'>
                            <div className="row g-5 align-items-center">
                                <div className="col-lg-8">
                                    <h4 className="mb-2 theme-text-white">Are you interested in a quoted project?</h4>
                                    <p className="theme-text-gray">If you have specific ideas, requirements, or questions about our services/ process, feel free to share them, and we can provide assistance or guidance accordingly!</p>
                                </div>
                                <div className="col-lg-4">
                                    <CustomBtn className="text-lg-end"><Link to="https://hybreed.co/contact" className='light-btn'>Send inquiry</Link>  </CustomBtn>
                                </div>
                            </div>
                        </CTAWithContentBar>

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
                className='theme-bg-black-secondary next-section-curve curve-bg-primary overflow-visible'>
                <div className='container'>
                    <div className=' equal-padding-B'>
                        <FAQsWrapper />
                    </div>
                </div>
            </FAQsSection>

            <BeforeFooterCtaWrapper></BeforeFooterCtaWrapper>

            {/* <MarqueeSection  data-scroll-section className="theme-bg-black-secondary">
                <MarqueeSlideV2 />
            </MarqueeSection> */}
        </>
    );
}
