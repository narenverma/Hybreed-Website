import React, { useEffect } from 'react'
import { TestimonialsWrap, CardTop, CardBottom, CardItems, TestimonialsCardSwiper } from './styled.js';
import { gsap, ScrollTrigger } from "gsap/all";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

export default function TestimonialsWrapper() {

    const testimonialsList = [
        {
            itemLogo: "mercer-logo.svg",
            itemLogoAlt: "Mercer",
            itemPara: "It has been a pleasure to work with the Hybreed team! They have been agile and flexible to deliver beyond expectations and within timelines. They have been quick to incorporate feedback and add value to the final deliverable.",
            personName: "Rupali Gupta ",
            personPosition: "ASEAN Talent Solutions Consulting Leader, Mercer Singapore",
            bgColor: "--theme-primary",
            textColor: "--theme-black-primary"
        },
        {
            itemLogo: "privado-capital-logo.svg",
            itemLogoAlt: "Privado",
            itemPara: "I had a great experience working with Hybreed’s team on my website. The team demonstrated a complete understanding of my website goals, providing valuable direction that greatly enhanced its effectiveness. Ajit’s responsiveness was remarkable, always addressing my queries promptly.",
            personName: "Sumit Pachisia",
            personPosition: "Partner",
            bgColor: "--theme-black-secondary",
            textColor: "--theme-white"
        },
        {
            itemLogo: "turbohire-testimonials-logo.svg",
            itemLogoAlt: "TurboHire",
            itemPara: "Hybreed is without doubt one of the best website development teams I have ever worked with.  Ajit, who leads the team, will not only invest himself into the scope of the project but will think on part of his client’s as a business owner and entrepreneur.",
            personName: "Shoan Shinde,",
            personPosition: "CMO",
            bgColor: "--theme-white",
            textColor: "--theme-black-primary"
        },
        {
            itemLogo: "gptw-testimonials-logo.svg",
            itemLogoAlt: "GPTW",
            itemPara: "Hybreed combines an innate instinct for good web design & development with a keen understanding for real world business challenges. Their support for our business is crucial and we have a great working relationship.",
            personName: "Bhavishya Sharma",
            personPosition: "Head - Customer Strategy",
            bgColor: "--theme-white",
            textColor: "--theme-black-primary"
        },
        {
            itemLogo: "ted-x-dharavi-testimonials-logo.svg",
            itemLogoAlt: "TEDxDharavi",
            itemPara: "I’ve worked with Hybreed for over a year now on several projects. They have done a great job in designing the website for Dignite Cancer Care and also on the marketing campaigns for the 2nd edition of TEDxDharavi. Always dependable and proactive in getting work done.",
            personName: "Raghuveer Surupa",
            personPosition: "Founder",
            bgColor: "--theme-primary",
            textColor: "--theme-black-primary"
        },
    ]



    // const checkPosition = () => { 
    //     let cardWrapper =  document.querySelector(".testimonials-row")


    //     if (window.screenY > (cardWrapper.getBoundingClientRect().top - window.innerHeight / 3)) {
    //         cardWrapper.classList.remove("transform-active")
    //     } else {
    //         cardWrapper.classList.add("transform-active")
    //     }
    // }

    // window.addEventListener("scroll", checkPosition)

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);

        if (document.getElementsByClassName("testimonials-row")[0] && window.innerWidth > 992) {

            let getTestimonialCard = document.querySelectorAll(".row.transform-active > div");
            getTestimonialCard.forEach((card) => {

                gsap.from(".row.transform-active > div:nth-last-child(1)", {
                    rotate: "8deg",
                    translate: "-10% -40%",

                })
                gsap.from(".row.transform-active > div:nth-last-child(2)", {
                    rotate: "-8deg",
                    translate: "10% -40%",

                })
                gsap.from(".row.transform-active > div:nth-child(1)", {
                    rotate: "-8deg",
                    translate: "20% 0%",

                })
                gsap.from(".row.transform-active > div:nth-child(3)", {
                    rotate: "8deg",
                    translate: "-20% 0%",
                })

                gsap.to(card, {
                    rotate: "0deg",
                    translate: "0% 0% ",
                    scrollTrigger: {
                        trigger: ".testimonials-row",
                        start: "top 70%",
                        end: "top 20%",
                        scrub: true,
                        // markers: true,
                    }
                })
            })
        }

    }, [])



    return (
        <>
            <TestimonialsWrap>

                {
                    window.innerWidth > 992 &&

                    <div className="row g-5 justify-content-center testimonials-row transform-active"    >
                        {
                            testimonialsList.map((item, index) => (

                                <div className="col-lg-4 col-md-6" key={index}>
                                    <CardItems style={{ "--bgColor": "var(" + item.bgColor + ")", "--textColor": "var(" + item.textColor + ")" }}>
                                        <CardTop>
                                            <div className="text-center">
                                                <img src={require(`../../assets/images/` + item.itemLogo)} alt={item.itemLogoAlt} />
                                            </div>
                                            <p>{item.itemPara}</p>
                                        </CardTop>
                                        <CardBottom>
                                            <h6>{item.personName}</h6>
                                            <p>{item.personPosition}</p>
                                        </CardBottom>
                                    </CardItems>
                                </div>
                            ))
                        }
                    </div>
                }

                {
                    window.innerWidth < 992 &&

                    <TestimonialsCardSwiper>

                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className=""
                    >
                        {
                            testimonialsList.map((item, index) => (

                                <SwiperSlide className="" key={index}>
                                    <CardItems style={{ "--bgColor": "var(" + item.bgColor + ")", "--textColor": "var(" + item.textColor + ")" }}>
                                        <CardTop>
                                            <div className="text-center">
                                                <img src={require(`../../assets/images/` + item.itemLogo)} alt={item.itemLogoAlt} />
                                            </div>
                                            <p>{item.itemPara}</p>
                                        </CardTop>
                                        <CardBottom>
                                            <h6>{item.personName}</h6>
                                            <p>{item.personPosition}</p>
                                        </CardBottom>
                                    </CardItems>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    </TestimonialsCardSwiper>


                }


            </TestimonialsWrap>
        </>
    )
}
