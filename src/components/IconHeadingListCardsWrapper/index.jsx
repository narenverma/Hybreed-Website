import React from 'react'
import { CheckIconList, CTAWithContentBar, CustomBtn } from "../../assets/css/globalStyle.js"
import { IconHeadingListCardsWrap, IconHeadingListCards, ContentTop, ContentBottom } from "./styled.js"
import { Link } from "react-router-dom"

import ThemeLottiePlayer from "../ThemeLottiePlayer";

export default function IconHeadingListCardsWrapper() {
    return (
        <>
            <IconHeadingListCardsWrap>
                <div className="row gx-0 gy-4  ">
                    <div className="col-lg-4">
                        <IconHeadingListCards>
                            <ContentTop>
                            <ThemeLottiePlayer animationData = {require("../../assets/lotties/services/design-icon-anim.json")} />
                                <h5>Design</h5>
                                <p>We craft intuitive experiences where the aesthetics and functionality seamlessly guide users to delight.</p>
                            </ContentTop>
                            <ContentBottom>
                                <CheckIconList>
                                    <li>User research and testing</li>
                                    <li>Information Architecture</li>
                                    <li>Wireframing and Prototyping</li>
                                    <li>Visual Design- Design System</li>
                                    <li>Responsive Design</li>
                                    <li>Accessibility</li>
                                    <li>Transition & Animations</li>
                                    <li>Micro interaction</li>
                                    <li>Design support & Maintenance</li>
                                    <li>Design Audit & redesign</li>
                                </CheckIconList>
                            </ContentBottom>
                        </IconHeadingListCards>
                    </div>
                    <div className="col-lg-4">
                        <IconHeadingListCards>
                            <ContentTop>
                            <ThemeLottiePlayer animationData = {require("../../assets/lotties/services/engineering-icon-anim.json")} />
                                <h5>Engineering</h5>
                                <p>Through clean code and seamless UX, we engineer immersive digital solutions that intrigue audiences and drive action.</p>
                            </ContentTop>
                            <ContentBottom>
                                <CheckIconList>
                                    <li>Custom business applications</li>
                                    <li>Custom animation</li>
                                    <li>E-commerce (Shopify, Woo)</li>
                                    <li>Webflow Development</li>
                                    <li>Marketing landing pages </li>
                                    <li>Mobile Apps(Flutter)</li>
                                    <li>Maintenance - A/B Testing</li>
                                    <li>A/B Testing</li>
                                    <li>Google insights & SEO</li>
                                    <li>Third party integration</li>
                                </CheckIconList>
                            </ContentBottom>
                        </IconHeadingListCards>
                    </div>
                    <div className="col-lg-4">
                        <IconHeadingListCards>
                            <ContentTop>
                            <ThemeLottiePlayer animationData = {require("../../assets/lotties/services/branding-icon-anim.json")} />
                                <h5>Branding Assets</h5>
                                <p>We incorporate your brand’s core values & unique voice into your branding assets that resonate with global audiences.</p>
                            </ContentTop>
                            <ContentBottom>
                                <CheckIconList>
                                    <li>Logo Design</li>
                                    <li>Animated Logos</li>
                                    <li>Illustrations (2D)</li>
                                    <li>Social Media Kit</li>
                                    <li>Copy Writing</li>
                                    <li>Rebranding</li>
                                    <li>Brand Guidelines</li>
                                    <li>Brand Naming</li>
                                </CheckIconList>
                            </ContentBottom>
                        </IconHeadingListCards>
                    </div>
                </div>
            </IconHeadingListCardsWrap>

            <CTAWithContentBar className='theme-bg-black-secondary mt-5 mx-lg-3'>
                <div className="row g-5 align-items-center">
                    <div className="col-lg-8">
                        <h4 className="mb-2 theme-text-white">Are you interested in a quoted project?</h4>
                        <p className="theme-text-gray">If you have specific ideas, requirements, or questions about our services/ process, feel free to share them, and we can provide assistance or guidance accordingly!</p>
                    </div>
                    <div className="col-lg-4">
                        <CustomBtn className="text-lg-end"><Link to="/" className='light-btn'>Send inquiry</Link>  </CustomBtn>
                    </div>
                </div>
            </CTAWithContentBar>

        </>
    )
}
