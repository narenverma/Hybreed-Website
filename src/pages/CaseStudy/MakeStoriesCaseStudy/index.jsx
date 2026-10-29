import React, { useEffect } from 'react'
import { CaseStudyGlobalStyle, CaseStudyHeroSection, CaseStudyHeroWrap, CategoriesList, BannerAnimationWrap, CaseStudyContentSection, CaseStudyContentWrap, AnimationCards, AnimCardItem, CaseStudyTestimonialSection, CaseStudyTestimonialWrap, TestimonialImg, TestimonialContent } from '../caseStudyStyle.js'
import { SectionTopSpace, TextRevealScroll, TextSplitSpans } from '../../../utils/contants.js';
import { CustomCursorAnim } from '../../../components/HoverInteract/index.jsx';
import BeforeFooterCtaWrapper from '../../../components/BeforeFooterCtaWrapper/index.jsx';
import { ScrollAnimParaWrap } from '../../../assets/css/globalStyle.js';
import OnScrollContentAnimation from '../../../components/OnScrollContentAnimation/index.jsx';
import MetaUpdate from '../../../components/MetaUpdate/index.jsx'; 


export default function MakeStoriesCaseStudy() {

  useEffect(() => {
    SectionTopSpace();
    TextRevealScroll(".para-reveal-wrap.testimonial-reveal-wrap", " p span");
    CustomCursorAnim();
    OnScrollContentAnimation(); 

  }, [])


  return (
    <>
    {/* <MetaUpdate
      pageTitle="Hybreed.co | 4P Capital Case Study" 
      pageDesc="4P Capital Partners is India based investment platform that partners with visionary entrepreneurs to build legendary businesses for India and for the world." 
      pageUrl={window.window.location.href}
       /> */}
      <CaseStudyGlobalStyle />

      <CaseStudyHeroSection className="hero-section theme-bg-white" >
        <div className="container">
          <div className="equal-padding-T  ">
            <CaseStudyHeroWrap>
              <h1 className="h2 section-head">Transform Ideas into Interactive Web Stories with MakeStories!</h1>
              <CategoriesList className="anim-bottom-box  dark-list">
                <h6>How did we help: </h6>
                <ul style={{ "--list-color": "var(--makestories-cs-secondary)" }}>
                  <li>Product application design</li>
                  <li>Mobile App Design</li>
                  <li>Website design</li>
                  <li>WebStories templates design</li>
                  <li>User Research</li>
                  <li>User Experience</li>
                  <li>User Interface</li>
                  <li>User Testing</li>
                  <li>UX Writing</li> 
                </ul>
              </CategoriesList>
            </CaseStudyHeroWrap>
          </div>
        </div>  
        <BannerAnimationWrap className="anim-bottom-box  ">
          <img src={require("../../../assets/images/case-study-images/makestories-case-study-hero-banner-img.png")} alt="Case Study Banner" />
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
                    <p className="sub-head ">MakeStories is a drag-and-drop visual editor designed for creating stunning web stories quickly and easily. It empowers marketers, content creators, and designers to build engaging, responsive stories for websites, without needing any coding skills.</p>
                    <p className="sub-head mb-0">With its intuitive interface, rich media integration, and SEO optimisation tools, MakeStories simplifies the creation of immersive digital experiences that drive audience interaction and enhance storytelling across platforms.</p>
                  </div>
                </div>
              </div>

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
              <AnimationCards>
                <div className="row g-5">
                  <div className="col-lg-12 anim-left-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/makestories-case-study-banner-img-1.png")} alt="images" />
                    </AnimCardItem>
                  </div>
                  <div className="col-lg-12 anim-right-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/makestories-case-study-banner-img-2.png")} alt="images" />
                    </AnimCardItem>
                  </div>
                  <div className="col-lg-12 anim-left-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/makestories-case-study-banner-img-3.png")} alt="images" />
                    </AnimCardItem>
                  </div>
                  <div className="col-lg-12 anim-right-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/makestories-case-study-banner-img-4.png")} alt="images" />
                    </AnimCardItem>
                  </div>
                </div>
              </AnimationCards>
              <div className="equal-padding-T equal-padding-B  col-lg-11 mx-auto">
                <div className="row gy-4 ">
                  <div className="col-xl-5 col-lg-6 anim-left-box">
                    <h4>Research, IA</h4>
                  </div>
                  <div className="col-xl-7 col-lg-6 anim-right-box">
                    <p className="sub-head mb-0">We conducted in-depth research and crafted a strategic information architecture for MakeStories, focusing on optimising user experience and content flow to ensure seamless navigation and enhanced engagement.</p>
                  </div>
                </div>
              </div>
              <AnimationCards>
                <div className="row g-5">
                  <div className="col-lg-6 anim-left-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/makestories-case-study-card-img-1.svg").default} alt="images" />
                    </AnimCardItem>
                  </div>
                  <div className="col-lg-6 anim-right-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/makestories-case-study-card-img-2.svg").default} alt="images" />
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
                    <p className="sub-head mb-0">We developed a streamlined and user-centric wireframe for MakeStories, focusing on intuitive navigation and clear content hierarchy to enhance user engagement and optimize the storytelling experience.</p>
                  </div>
                </div>
              </div>

              <AnimationCards>
                <div className="row g-5">
                  <div className="col-lg-6 anim-left-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/makestories-case-study-card-img-3.svg").default} alt="images" />
                    </AnimCardItem>
                  </div>
                  <div className="col-lg-6 anim-right-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/makestories-case-study-card-img-4.svg").default} alt="images" />
                    </AnimCardItem>
                  </div>
                </div>
              </AnimationCards>

              <div className="equal-padding-T equal-padding-B col-lg-11 mx-auto">
                <div className="row gy-4">
                  <div className="col-xl-5 col-lg-6 anim-left-box">
                    <h4>Design System</h4>
                  </div>
                  <div className="col-xl-7 col-lg-6 anim-right-box">
                    <p className="sub-head mb-0">We developed a comprehensive Design System for MakeStories, ensuring consistent visual elements, Colors, typography, and components across their platform. This system enhances user experience, streamlines design workflows, and maintains brand integrity throughout.</p>
                  </div>
                </div>
              </div>

              <AnimationCards>
                <div className="row g-5">
                  <div className="col-lg-12 anim-bottom-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/makestories-case-study-banner-img-5.svg").default} alt="images" />
                    </AnimCardItem>
                  </div>
                  <div className="col-lg-6 anim-left-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/makestories-case-study-card-img-5.svg").default} alt="images" />
                    </AnimCardItem>
                  </div>
                  <div className="col-lg-6 anim-right-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/makestories-case-study-card-img-6.svg").default} alt="images" />
                    </AnimCardItem>
                  </div>
                </div>
              </AnimationCards>

              <div className="equal-padding-T equal-padding-B col-lg-11 mx-auto">
                <div className="row gy-4">
                  <div className="col-xl-5 col-lg-6 anim-left-box">
                    <h4>Product Application Design</h4>
                  </div>
                  <div className="col-xl-7 col-lg-6 anim-right-box">
                    <p className="sub-head mb-0">We crafted an Product Application design for the MakeStories client, Focuses on delivering an intuitive user experience that enhances storytelling through interactive web stories. The design incorporates visually engaging elements, user-friendly navigation, and seamless integration of multimedia features, enabling creators to craft compelling narratives effortlessly. This application is tailored to empower users, fostering creativity and innovation in digital storytelling.</p>
                  </div>
                </div>
              </div>

              <AnimationCards>
                <div className="row g-5">
                  <div className="col-lg-12 anim-bottom-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/makestories-case-study-banner-img-6.png")} alt="images" /> 
                    </AnimCardItem>
                  </div>
                  <div className="col-lg-6 anim-left-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/makestories-case-study-card-img-7.png")} alt="images" />
                    </AnimCardItem>
                  </div>
                  <div className="col-lg-6 anim-right-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/makestories-case-study-card-img-8.png")} alt="images" />
                    </AnimCardItem>
                  </div>
                </div>
              </AnimationCards>

              <div className="equal-padding-T equal-padding-B col-lg-11 mx-auto">
                <div className="row gy-4">
                  <div className="col-xl-5 col-lg-6 anim-left-box">
                    <h4>Mobile App Design</h4>
                  </div>
                  <div className="col-xl-7 col-lg-6 anim-right-box">
                    <p className="sub-head mb-0">We crafted an intuitive and visually engaging mobile app design for the MakeStories Client, enhancing user experience with a seamless interface and interactive features. The design prioritizes usability while maintaining a modern aesthetic, enabling users to create and share stories effortlessly. Through a cohesive color palette and dynamic layouts, the app empowers users to express their creativity in a user-friendly environment.</p>
                  </div>
                </div>
              </div>

              <AnimationCards>
                <div className="row g-5">
                  <div className="col-lg-12 anim-bottom-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/makestories-case-study-banner-img-7.png")} alt="images" /> 
                    </AnimCardItem>
                  </div>
                  <div className="col-lg-6 anim-left-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/makestories-case-study-card-img-9.png")} alt="images" />
                    </AnimCardItem>
                  </div>
                  <div className="col-lg-6 anim-right-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/makestories-case-study-card-img-10.png")} alt="images" />
                    </AnimCardItem>
                  </div>
                </div>
              </AnimationCards>

              <div className="equal-padding-T equal-padding-B col-lg-11 mx-auto">
                <div className="row gy-4">
                  <div className="col-xl-5 col-lg-6 anim-left-box">
                    <h4>Website Design</h4>
                  </div>
                  <div className="col-xl-7 col-lg-6 anim-right-box">
                    <p className="sub-head mb-0">We crafted an engaging and user-friendly website for MakeStories, focusing on a modern aesthetic and intuitive navigation. The design incorporates vibrant visuals and interactive elements that enhance user experience, making storytelling seamless and enjoyable. With a responsive layout, the site ensures optimal performance across all devices, inviting users to explore and create captivating stories effortlessly.</p>
                  </div>
                </div>
              </div>

              <AnimationCards>
                <div className="row g-5">
                  <div className="col-lg-12 anim-bottom-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/makestories-case-study-banner-img-8.png")} alt="images" /> 
                    </AnimCardItem>
                  </div> 
                </div>
              </AnimationCards>
              
              <div className="equal-padding-T equal-padding-B col-lg-11 mx-auto">
                <div className="row gy-4">
                  <div className="col-xl-5 col-lg-6 anim-left-box">
                    <h4>WebStories Templates Design</h4>
                  </div>
                  <div className="col-xl-7 col-lg-6 anim-right-box">
                    <p className="sub-head mb-0">We crafted 100+ WebStories templates for the MakeStories Client. Each template is designed to captivate audiences with stunning visuals and dynamic storytelling, ensuring a seamless and interactive experience for users.</p>
                  </div>
                </div>
              </div>

              <AnimationCards>
                <div className="row g-5">
                  <div className="col-lg-12 anim-bottom-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/makestories-case-study-banner-img-9.png")} alt="images" /> 
                    </AnimCardItem>
                  </div> 
                </div>
              </AnimationCards>
              
              <div className="equal-padding-T equal-padding-B col-lg-11 mx-auto">
                <div className="row gy-4">
                  <div className="col-xl-5 col-lg-6 anim-left-box">
                    <h4>Won Awards</h4>
                  </div>
                  <div className="col-xl-7 col-lg-6 anim-right-box">
                    <p className="sub-head mb-0">We are thrilled to announce that our work for the MakeStories Client has been recognized with the prestigious UI Design, UX Design, and Innovation Design Awards. This achievement reflects our commitment to creating exceptional user experiences and innovative design solutions that resonate with users and drive engagement.</p>
                  </div>
                </div>
              </div>

              <AnimationCards>
                <div className="row g-5">
                  <div className="col-lg-12 anim-bottom-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/makestories-case-study-banner-img-10.png")} alt="images" /> 
                    </AnimCardItem>
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
