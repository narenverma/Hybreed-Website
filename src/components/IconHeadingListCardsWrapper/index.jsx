import React from 'react'
import { CheckIconList } from "../../assets/css/globalStyle.js"
import { IconHeadingListCardsWrap, IconHeadingListCards, ContentTop, ContentBottom, IconCardsSwiper } from "./styled.js"
import { Link } from "react-router-dom"

import ThemeLottiePlayer from "../ThemeLottiePlayer";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';

import { Pagination } from 'swiper/modules';

export default function IconHeadingListCardsWrapper() {


    const iconHeadingCardList = [
        {
            cardLottie: "design-icon-anim.json",
            cardHead: "Design",
            cardPara: "We craft intuitive experiences where the aesthetics and functionality seamlessly guide users to delight.",
            cardList: [
                "User research and testing",
                "Information Architecture",
                "Wireframing and Prototyping",
                "Visual Design- Design System",
                "Responsive Design",
                "Accessibility",
                "Transition & Animations",
                "Micro interaction",
                "Design support & Maintenance",
                "Design Audit & redesign"
            ],
        },
        {
            cardLottie: "engineering-icon-anim.json",
            cardHead: "Engineering",
            cardPara: "Through clean code and seamless UX, we engineer immersive digital solutions that intrigue audiences and drive action.",
            cardList: [
                "Custom business applications",
                "Custom animation",
                "E-commerce (Shopify, Woo)",
                "Webflow Development",
                "Marketing landing pages",
                "Mobile Apps(Flutter)",
                "Maintenance - A/B Testing",
                "A/B Testing",
                "Google insights & SEO",
                "Third party integration"
            ],
        },
        {
            cardLottie: "branding-icon-anim.json",
            cardHead: "Branding Assets",
            cardPara: "We incorporate your brand’s core values & unique voice into your branding assets that resonate with global audiences.",
            cardList: [
                "Logo Design",
                "Animated Logos",
                "Illustrations (2D)",
                "Social Media Kit",
                "Copy Writing",
                "Rebranding",
                "Brand Guidelines",
                "Brand Naming",
            ],
        },

    ];

    const TabNames = ["Design", "Engineering", "Branding Assets"];
    const pagination = {
        el: ".swiper-bullets-tab",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' +  TabNames[index] + '</span>';
        },
    };

    return (
        <>
            <IconHeadingListCardsWrap>

                {
                    window.innerWidth > 992 &&

                    <div className="row gx-0 gy-4  ">
                        {


                            iconHeadingCardList.map((item, index) => (

                                <div className="col-lg-4" key={index}>
                                    <IconHeadingListCards >
                                        <ContentTop>
                                            <ThemeLottiePlayer animationData={require("../../assets/lotties/services/" + item.cardLottie)} />
                                            <h5>{item.cardHead}</h5>
                                            <p>{item.cardPara}</p>
                                        </ContentTop>
                                        <ContentBottom>
                                            <CheckIconList>
                                                {
                                                    item.cardList.map((listItem, listIndex) => (
                                                        <li key={listIndex}>{listItem}</li>
                                                    ))
                                                }
                                            </CheckIconList>
                                        </ContentBottom>
                                    </IconHeadingListCards>
                                </div>
                            ))
                        }
                    </div>
                }

                {
                    window.innerWidth < 992 &&
                    <>
                    <IconCardsSwiper>

                    <div className="swiper-bullets-tab"></div>
                    <Swiper
                        pagination={pagination}
                        modules={[Pagination]}
                        className=""
                    >
                        {


                            iconHeadingCardList.map((item, index) => (

                                <SwiperSlide   key={index}>
                                    <IconHeadingListCards >
                                        <ContentTop>
                                            <ThemeLottiePlayer animationData={require("../../assets/lotties/services/" + item.cardLottie)} />
                                            <h5>{item.cardHead}</h5>
                                            <p>{item.cardPara}</p>
                                        </ContentTop>
                                        <ContentBottom>
                                            <CheckIconList>
                                                {
                                                    item.cardList.map((listItem, listIndex) => (
                                                        <li key={listIndex}>{listItem}</li>
                                                    ))
                                                }
                                            </CheckIconList>
                                        </ContentBottom>
                                    </IconHeadingListCards>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    </IconCardsSwiper>
                    </>
                }

            </IconHeadingListCardsWrap>


        </>
    )
}
