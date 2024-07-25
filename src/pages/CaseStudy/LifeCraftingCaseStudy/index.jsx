import React, { useEffect } from 'react'
import { CaseStudyGlobalStyle, CaseStudyHeroSection, CaseStudyHeroWrap, CategoriesList, BannerAnimationWrap, CaseStudyContentSection, CaseStudyContentWrap, AnimationCards, AnimCardItem, CaseStudyTestimonialSection, CaseStudyTestimonialWrap, TestimonialImg, TestimonialContent } from '../caseStudyStyle.js'
import { SectionTopSpace, TextRevealScroll, TextSplitSpans } from '../../../utils/contants.js';
import { CustomCursorAnim } from '../../../components/HoverInteract/index.jsx';
import BeforeFooterCtaWrapper from '../../../components/BeforeFooterCtaWrapper/index.jsx';
import { ScrollAnimParaWrap } from '../../../assets/css/globalStyle.js';
import OnScrollContentAnimation from '../../../components/OnScrollContentAnimation/index.jsx';


export default function LifeCraftingCaseStudy() {

  useEffect(() => {
    SectionTopSpace();
    TextRevealScroll(".para-reveal-wrap.testimonial-reveal-wrap", " p span");
    CustomCursorAnim();
    OnScrollContentAnimation(); 

  }, [])


  return (
    <>
      <CaseStudyGlobalStyle />

      <CaseStudyHeroSection className="hero-section theme-bg-lifecrafting-primary" >
        <div className="container">
          <div className="equal-padding-T  ">
            <CaseStudyHeroWrap>
              <h1 className="h2 section-head">Shaping Lifecrafting's Unique <br /> Idea with Aesthetic Visuals</h1>
              <CategoriesList className="anim-bottom-box dark-list">
                <h6>How did we help: </h6>
                <ul style={{ "--list-color": "var(--lifecrafting-cs-secondary)" }}>
                  <li>Website Design</li>
                  <li>Illustrations</li>
                  <li>Website Development</li>
                  <li>SEO</li>
                </ul>
              </CategoriesList>
            </CaseStudyHeroWrap>
          </div>
        </div>
        <BannerAnimationWrap className="anim-bottom-box">
          <img src={require("../../../assets/images/case-study-images/lifecrafting-case-study-hero-banner-img.svg").default} alt="Case Study Banner" />
        </BannerAnimationWrap>
      </CaseStudyHeroSection>

      <CaseStudyContentSection className="next-section-curve curve-bg-primary ">
        <div className="container">
          <div className="equal-padding-T equal-padding-B">
            <CaseStudyContentWrap>
              <div className="equal-padding-B col-lg-11 mx-auto">

                <div className="row gy-4">
                  <div className="col-xl-5 col-lg-6 anim-left-box">
                    <h4>About the client</h4>
                  </div>
                  <div className="col-xl-7 col-lg-6 anim-right-box">
                    <p className="sub-head mb-0">The Lifecrafting Project, is an ambitious initiative aiming to create the world's largest and most diverse intergenerational canvas of pods. The project's primary objective is to bring together voices from all corners of the world, from the unjaded curiosity of a 6-year-old to the profound wisdom of a 102-year-old and everyone in between, all sharing their unique perspectives on navigating life's experiences. The project's ultimate goal is to inspire, transform, and connect people from various backgrounds through the power of storytelling.</p>
                  </div>
                </div>
              </div>

              <AnimationCards>
                <div className="row g-5">
                  <div className="col-lg-12 anim-bottom-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/lifecrafting-case-study-banner-img-1.svg").default} alt="images" />
                    </AnimCardItem>
                  </div>
                  <div className="col-sm-6 anim-left-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/lifecrafting-case-study-card-img-1.svg").default} alt="images" />
                    </AnimCardItem>
                  </div>
                  <div className="col-sm-6 anim-right-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/lifecrafting-case-study-card-img-2.svg").default} alt="images" />
                    </AnimCardItem>
                  </div>
                </div>
              </AnimationCards>

              <div className="equal-padding-T equal-padding-B col-lg-11 mx-auto">
                <div className="row gy-4">
                  <div className="col-xl-5 col-lg-6 anim-left-box">
                    <h4>Problem</h4>
                  </div>
                  <div className="col-xl-7 col-lg-6 anim-right-box">
                    <p className="sub-head mb-0">Lifecrafting needed a website that will communicate their vision with aesthetic and youthful visuals. They needed a colourful visual elements that will motivate people to respond to their questions and also it will make them feel happy and joyful. The website’s ultimate goal is to inspire, transform, and connect people from various backgrounds through the power of storytelling.</p>
                  </div>
                </div>
              </div>
              <div className="equal-padding-B col-lg-11 mx-auto">
                <div className="row gy-4">
                  <div className="col-xl-5 col-lg-6 anim-left-box">
                    <h4>Challenges</h4>
                  </div>
                  <div className="col-xl-7 col-lg-6 anim-right-box">
                    <p className="sub-head mb-0">The main challenge was to create a website which is visually appealing, but also will have user-friendly design and ensuring the site will provide great user experience.</p>
                  </div>
                </div>
              </div>
              <div className="equal-padding-B col-lg-11 mx-auto">
                <div className="row gy-4">
                  <div className="col-xl-5 col-lg-6 anim-left-box">
                    <h4>Our solutions</h4>
                  </div>
                  <div className="col-xl-7 col-lg-6 anim-right-box">
                    <p className="sub-head mb-0">We partnered with Lifecrafting to design their website from scratch, focusing on a clean, visually-appealing design that enhances user experience. The website aimed to highlight Lifecrafting’s services in a visually-appealing way and stories better, making it easier for people to understand their vision better.</p>
                  </div>
                </div>
              </div>

              <AnimationCards>
                <div className="row g-5">
                  <div className="col-lg-6 anim-left-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/lifecrafting-case-study-card-img-3.svg").default} alt="images" />
                    </AnimCardItem>
                  </div>
                  <div className="col-lg-6 anim-right-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/lifecrafting-case-study-card-img-4.svg").default} alt="images" />
                    </AnimCardItem>
                  </div>
                  <div className="col-lg-12 anim-bottom-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/lifecrafting-case-study-banner-img-2.svg").default} alt="images" />
                    </AnimCardItem>
                  </div>
                </div>
              </AnimationCards>
              <div className="equal-padding-T   col-lg-11 mx-auto">
                <div className="row gy-4 ">
                  <div className="col-xl-5 col-lg-6 anim-left-box">
                    <h4>Research, IA</h4>
                  </div>
                  <div className="col-xl-7 col-lg-6 anim-right-box">
                    <p className="sub-head mb-0">Our team conducted in-depth research to understand Lifecrafting’s target audience. We developed a comprehensive information architecture that organised content logically and ensured a user-friendly experience. The IA focused on making it easy for visitors to find relevant information about Lifecrafting’s services and expertise.</p>
                  </div>
                </div>
              </div>
              <div className="equal-padding-T equal-padding-B col-lg-11 mx-auto">
                <div className="row gy-4 ">
                  <div className="col-xl-5 col-lg-6 anim-left-box">
                    <h4>Wireframes</h4>
                  </div>
                  <div className="col-xl-7 col-lg-6 anim-right-box">
                    <p className="sub-head mb-0">We created detailed wireframes to map out the website’s structure and layout. These wireframes served as a blueprint, allowing us to visualize the placement of key elements and ensure a seamless user experience before moving on to the design phase.</p>
                  </div>
                </div>
              </div>



              <AnimationCards>
                <div className="row g-5">
                  <div className="col-lg-6 anim-left-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/lifecrafting-case-study-card-img-5.svg").default} alt="images" />
                    </AnimCardItem>
                  </div>
                  <div className="col-lg-6 anim-right-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/lifecrafting-case-study-card-img-6.svg").default} alt="images" />
                    </AnimCardItem>
                  </div>
                </div>
              </AnimationCards>

              <div className="equal-padding-T equal-padding-B col-lg-11 mx-auto">
                <div className="row gy-4">
                  <div className="col-xl-5 col-lg-6 anim-left-box">
                    <h4>Moodboard, Design System</h4>
                  </div>
                  <div className="col-xl-7 col-lg-6 anim-right-box">
                    <p className="sub-head mb-0">A moodboard was developed to capture the visual direction, including color schemes, typography, and imagery. We then created a comprehensive design system that established guidelines for consistent branding across the site, ensuring a cohesive and professional look.</p>
                  </div>
                </div>
              </div>

              <AnimationCards>
                <div className="row g-5">
                  <div className="col-lg-12 anim-bottom-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/lifecrafting-case-study-banner-img-3.svg").default} alt="images" />
                    </AnimCardItem>
                  </div>
                </div>
              </AnimationCards>

              <div className="equal-padding-T equal-padding-B col-lg-11 mx-auto">
                <div className="row gy-4">
                  <div className="col-xl-5 col-lg-6 anim-left-box">
                    <h4>UI, Visual Output</h4>
                  </div>
                  <div className="col-xl-7 col-lg-6 anim-right-box">
                    <p className="sub-head mb-0">The UI design focused on clean lines, intuitive navigation, and engaging visuals. We incorporated interactive elements to enhance user engagement and utilized responsive design techniques to ensure the site looked and performed well on all devices. The visual output was a modern, professional website that effectively showcased FocusU’s expertise and offerings.</p>
                  </div>
                </div>
              </div>

              <AnimationCards>
                <div className="row g-5">
                  <div className="col-lg-12 anim-bottom-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/lifecrafting-case-study-banner-img-4.svg").default} alt="images" /> 
                    </AnimCardItem>
                  </div>
                  <div className="row g-5">
                  <div className="col-lg-6 anim-left-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/lifecrafting-case-study-card-img-7.svg").default} alt="images" />
                    </AnimCardItem>
                  </div>
                  <div className="col-lg-6 anim-right-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/lifecrafting-case-study-card-img-8.svg").default} alt="images" />
                    </AnimCardItem>
                  </div>
                </div>
                </div>
              </AnimationCards>

            </CaseStudyContentWrap>

          </div>
        </div>
      </CaseStudyContentSection>

      {/* <CaseStudyTestimonialSection className="theme-bg-black-secondary next-section-curve curve-bg-primary ">
        <div className="container">
          <div className="  equal-padding-B">
            <CaseStudyTestimonialWrap>
              <div className="row gy-4">
                <div className="col-lg-4 anim-left-box">
                  <TestimonialImg>
                    <img src={require("../../../assets/images/case-study-images/case-study-sanjay-parekh-img.png")} alt="profile-img" />
                  </TestimonialImg>
                </div>
                <div className="col-lg-8  ">
                  <TestimonialContent>

                    <ScrollAnimParaWrap className='para-reveal-wrap testimonial-reveal-wrap'>
                      <p className="text-start theme-text-white">
                         “Hybreed has been our indispensable IT partner for two years. The team is patient, responsive, and deeply understands our business. Our newly designed website perfectly captures our identity and exceeds expectations. Their recommendations consider our needs and budget, and they helped us achieve ISO 27001 certification. We greatly appreciate their commitment and look forward to continued collaboration.“ 
                         
                      </p> 


                    </ScrollAnimParaWrap>
 

                    <p className="text-end"> &mdash; Team FocusU </p>

                  </TestimonialContent>
                </div>
              </div>


            </CaseStudyTestimonialWrap>
          </div>
        </div>
      </CaseStudyTestimonialSection> */}

      <BeforeFooterCtaWrapper />

    </>
  )
}
