import React, { useEffect } from 'react'
import { CaseStudyGlobalStyle, CaseStudyHeroSection, CaseStudyHeroWrap, CategoriesList, BannerAnimationWrap, CaseStudyContentSection, CaseStudyContentWrap, AnimationCards, AnimCardItem, CaseStudyTestimonialSection, CaseStudyTestimonialWrap, TestimonialImg, TestimonialContent } from '../caseStudyStyle.js'
import { SectionTopSpace, TextRevealScroll, TextSplitSpans } from '../../../utils/contants.js';
import { CustomCursorAnim } from '../../../components/HoverInteract/index.jsx';
import BeforeFooterCtaWrapper from '../../../components/BeforeFooterCtaWrapper/index.jsx';
import { ScrollAnimParaWrap } from '../../../assets/css/globalStyle.js';
import OnScrollContentAnimation from '../../../components/OnScrollContentAnimation/index.jsx';
import MetaUpdate from '../../../components/MetaUpdate/index.jsx';
import ThreeDMobileScroll from '../../../components/ThreeDMobileScroll/index.js';


export default function FourPCapitalCaseStudy() {

  useEffect(() => {
    SectionTopSpace();
    TextRevealScroll(".para-reveal-wrap.testimonial-reveal-wrap", " p span");
    CustomCursorAnim();
    OnScrollContentAnimation(); 

  }, [])


  return (
    <>
    <MetaUpdate
      pageTitle="Hybreed.co | 4P Capital Case Study" 
      pageDesc="4P Capital Partners is India based investment platform that partners with visionary entrepreneurs to build legendary businesses for India and for the world." 
      pageUrl={window.window.location.href}
       />
      <CaseStudyGlobalStyle />

      <CaseStudyHeroSection className="hero-section theme-bg-4pcapital-primary" >
        <div className="container">
          <div className="equal-padding-T  ">
            <CaseStudyHeroWrap>
              <h1 className="h2 section-head">Empowering Visionary Entrepreneurs
              to Build Legendary Businesses Globally</h1>
              <CategoriesList className="anim-bottom-box  ">
                <h6>How did we help: </h6>
                <ul style={{ "--list-color": "var(--4pcapital-cs-secondary)" }}>
                  <li>Website Design</li>
                  <li>Logo Design</li>
                  <li>Website Development</li> 
                </ul>
              </CategoriesList>
            </CaseStudyHeroWrap>
          </div>
        </div> 
        {/* <ThreeDMobileScroll textureImage ="4p-capital-mobiel-screen-ui-image.png"/>  */}
        <BannerAnimationWrap className="anim-bottom-box  ">
          <img src={require("../../../assets/images/case-study-images/4pcapital-case-study-hero-banner-img.png")} alt="Case Study Banner" />
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
                    <p className="sub-head mb-0">4P Capital Partners is India based investment platform that partners with visionary entrepreneurs to build legendary businesses for India and for the world.</p>
                  </div>
                </div>
              </div>

              <AnimationCards>
                <div className="row g-5">
                  <div className="col-lg-12 anim-bottom-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/4pcapital-case-study-banner-img-1.svg").default} alt="images" />
                    </AnimCardItem>
                  </div>
                  <div className="col-sm-6 anim-left-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/4pcapital-case-study-card-img-1.png")} alt="images" />
                    </AnimCardItem>
                  </div>
                  <div className="col-sm-6 anim-right-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/4pcapital-case-study-card-img-2.png")} alt="images" />
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
                    <p className="sub-head mb-0">4P Capital Partners needed a website that communicates their commitment to supporting visionary entrepreneurs in building legendary businesses for India and the world. They invest their own capital and develop strong, trust-based relationships with their founder partners, acting as value-adding allies as they build transformational businesses.</p>
                  </div>
                </div>
              </div>
              <div className="equal-padding-B col-lg-11 mx-auto">
                <div className="row gy-4">
                  <div className="col-xl-5 col-lg-6 anim-left-box">
                    <h4>Challenges</h4>
                  </div>
                  <div className="col-xl-7 col-lg-6 anim-right-box">
                    <p className="sub-head mb-0">The primary challenge was to design a visually appealing website with user-friendly features, prioritizing a great user experience.</p>
                  </div>
                </div>
              </div>
              <div className="equal-padding-B col-lg-11 mx-auto">
                <div className="row gy-4">
                  <div className="col-xl-5 col-lg-6 anim-left-box">
                    <h4>Our solutions</h4>
                  </div>
                  <div className="col-xl-7 col-lg-6 anim-right-box">
                    <p className="sub-head mb-0">We collaborated with 4P Capital Partners to create their website from the ground up, with a focus on a sleek and visually appealing design to enhance user experience. The main goal of the website was to showcase Investment Features.</p>
                  </div>
                </div>
              </div> 
              <div className="equal-padding-B  col-lg-11 mx-auto">
                <div className="row gy-4 ">
                  <div className="col-xl-5 col-lg-6 anim-left-box">
                    <h4>Research, IA</h4>
                  </div>
                  <div className="col-xl-7 col-lg-6 anim-right-box">
                    <p className="sub-head mb-0">Our team conducted in-depth research to understand the target audience of 4P Capital Partners. We developed a comprehensive information architecture that organised content logically and ensured a user-friendly experience. The information architecture focused on making it easy for visitors to find relevant information about investments.</p>
                  </div>
                </div>
              </div>
              <AnimationCards>
                <div className="row g-5">
                  <div className="col-lg-6 anim-left-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/4pcapital-case-study-card-img-3.svg").default} alt="images" />
                    </AnimCardItem>
                  </div>
                  <div className="col-lg-6 anim-right-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/4pcapital-case-study-card-img-4.svg").default} alt="images" />
                    </AnimCardItem>
                  </div>
                </div>
              </AnimationCards>
              <div className="equal-padding-T equal-padding-B col-lg-11 mx-auto">
                <div className="row gy-4 ">
                  <div className="col-xl-5 col-lg-6 anim-left-box">
                    <h4>Wireframes</h4>
                  </div>
                  <div className="col-xl-7 col-lg-6 anim-right-box">
                    <p className="sub-head mb-0">We designed detailed wireframes to outline the structure and layout of the website. These wireframes acted as a guide, helping us to see where important elements should go and guarantee a smooth user experience before we started the design process.</p>
                  </div>
                </div>
              </div>



              <AnimationCards>
                <div className="row g-5">
                  <div className="col-lg-12 anim-bottom-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/4pcapital-case-study-banner-img-2.svg").default} alt="images" />
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
                    <p className="sub-head mb-0">A moodboard was created to capture the visual direction, including color schemes, typography, and imagery. Subsequently, a comprehensive design system was established to provide guidelines for consistent branding across the site, ensuring a cohesive and professional look.</p>
                  </div>
                </div>
              </div>

              <AnimationCards>
                <div className="row g-5">
                  <div className="col-lg-12 anim-bottom-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/4pcapital-case-study-banner-img-3.svg").default} alt="images" />
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
                    <p className="sub-head mb-0">The UI design was created with clean, intuitive navigation, and engaging visuals in mind. We included interactive elements to increase user engagement and used responsive design techniques to ensure the site looked and worked well on all devices. The end result was a modern, professional website that effectively showcased 4P Capital Partners' expertise and offerings.</p>
                  </div>
                </div>
              </div>

              <AnimationCards>
                <div className="row g-5">
                  <div className="col-lg-12 anim-bottom-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/4pcapital-case-study-banner-img-4.png")} alt="images" /> 
                    </AnimCardItem>
                  </div>
                  <div className="row g-5">
                  <div className="col-lg-6 anim-left-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/4pcapital-case-study-card-img-5.png")} alt="images" />
                    </AnimCardItem>
                  </div>
                  <div className="col-lg-6 anim-right-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/4pcapital-case-study-card-img-6.png")} alt="images" />
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
