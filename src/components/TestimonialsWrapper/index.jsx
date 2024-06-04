import React, { useEffect } from 'react'
import { TestimonialsWrap, CardTop, CardBottom, CardItems } from './styled.js';
import { gsap, ScrollTrigger } from "gsap/all";

export default function TestimonialsWrapper() {

    const testimonialsList = [
        {
            itemLogo: "mercer-logo.svg",
            itemLogoAlt: "Mercer",
            itemPara: "“Hybreed Agency transformed our brand with their exceptional design and digital marketing expertise. Their creative solutions and strategic approach have significantly boosted our online presence, resulting in increased engagement and conversions. Highly recommend!!!",
            personName: "Name of the Person",
            personPosition: "Position",
            bgColor: "--theme-white",
            textColor: "--theme-black-primary"
        },
        {
            itemLogo: "mercer-logo.svg",
            itemLogoAlt: "Mercer",
            itemPara: "“Hybreed Agency transformed our brand with their exceptional design and digital marketing expertise. Their creative solutions and strategic approach have significantly boosted our online presence, resulting in increased engagement and conversions. Highly recommend!!!",
            personName: "Name of the Person",
            personPosition: "Position",
            bgColor: "--theme-primary",
            textColor: "--theme-black-primary"
        },
        {
            itemLogo: "privado-capital-logo.svg",
            itemLogoAlt: "Mercer",
            itemPara: "“Hybreed Agency transformed our brand with their exceptional design and digital marketing expertise. Their creative solutions and strategic approach have significantly boosted our online presence, resulting in increased engagement and conversions. Highly recommend!!!",
            personName: "Name of the Person",
            personPosition: "Position",
            bgColor: "--theme-black-secondary",
            textColor: "--theme-white"
        },
        {
            itemLogo: "mercer-logo.svg",
            itemLogoAlt: "Mercer",
            itemPara: "“Hybreed Agency transformed our brand with their exceptional design and digital marketing expertise. Their creative solutions and strategic approach have significantly boosted our online presence, resulting in increased engagement and conversions. Highly recommend!!!",
            personName: "Name of the Person",
            personPosition: "Position",
            bgColor: "--theme-white",
            textColor: "--theme-black-primary"
        },
        {
            itemLogo: "mercer-logo.svg",
            itemLogoAlt: "Mercer",
            itemPara: "“Hybreed Agency transformed our brand with their exceptional design and digital marketing expertise. Their creative solutions and strategic approach have significantly boosted our online presence, resulting in increased engagement and conversions. Highly recommend!!!",
            personName: "Name of the Person",
            personPosition: "Position",
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

            </TestimonialsWrap>
        </>
    )
}
