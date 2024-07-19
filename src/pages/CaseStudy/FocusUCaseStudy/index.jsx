import React, { useEffect } from 'react'
import { CaseStudyGlobalStyle, CaseStudyHeroSection, CaseStudyHeroWrap, CategoriesList, BannerAnimationWrap, CaseStudyContentSection, CaseStudyContentWrap, AnimationCards, AnimCardItem, CaseStudyTestimonialSection, CaseStudyTestimonialWrap, TestimonialImg, TestimonialContent } from '../caseStudyStyle.js'
import { SectionTopSpace, TextRevealScroll, TextSplitSpans } from '../../../utils/contants.js';
import { CustomCursorAnim } from '../../../components/HoverInteract/index.jsx';
import BeforeFooterCtaWrapper from '../../../components/BeforeFooterCtaWrapper/index.jsx';
import { ScrollAnimParaWrap } from '../../../assets/css/globalStyle.js';
import OnScrollContentAnimation from '../../../components/OnScrollContentAnimation/index.jsx';


export default function FocusUCaseStudy() {

  useEffect(() => {
    SectionTopSpace();
    TextRevealScroll(".para-reveal-wrap.testimonial-reveal-wrap" , " p span");
    CustomCursorAnim();
    OnScrollContentAnimation();

window.scrollTo(0, 0);

  }, [])


  return (
    <>
      <CaseStudyGlobalStyle />

      <CaseStudyHeroSection className="hero-section theme-bg-focusu-primary" >
        <div className="container">
          <div className="equal-padding-T  ">
            <CaseStudyHeroWrap>
              <h1 className="h2 section-head">Revitalizing Corporate Learning: <br />
                FocusU's New Digital Presence</h1>
              <CategoriesList className="anim-bottom-box">
                <h6>How did we help: </h6>
                <ul>
                  <li>Website Design</li>
                  <li>Illustrations</li>
                  <li>Website Development</li>
                  <li>SEO </li>
                </ul>
              </CategoriesList>
            </CaseStudyHeroWrap>
          </div>
        </div>
        <BannerAnimationWrap className="anim-bottom-box">
          <img src={require("../../../assets/images/case-study-images/demo-focusu-case-study-hero-banner.png")} alt="Case Study Banner" />
        </BannerAnimationWrap>
      </CaseStudyHeroSection>

      <CaseStudyContentSection className="next-section-curve curve-bg-black-secondary ">
        <div className="container">
          <div className="equal-padding-T equal-padding-B">
            <CaseStudyContentWrap>
              <div className="equal-padding-B col-lg-11 mx-auto">

                <div className="row gy-4">
                  <div className="col-xl-5 col-lg-6 anim-left-box">
                    <h4>About the client</h4>
                  </div>
                  <div className="col-xl-7 col-lg-6 anim-right-box">
                    <p className="sub-head mb-0">FocusU is one of India's leading names in the field of corporate learning and engagement. They specialize in crafting bespoke programs that drive organizational change, team building, and leadership development. With a robust portfolio of innovative workshops and training sessions, FocusU partners with businesses to enhance employee skills, foster teamwork, and build a thriving corporate culture.</p>
                  </div>
                </div>
              </div>

              <AnimationCards>
                <div className="row g-5">
                  <div className="col-lg-12 anim-bottom-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/demo-focusu-banner.svg").default} alt="images" />
                    </AnimCardItem>
                  </div>
                  <div className="col-sm-6 anim-left-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/demo-focusu-card-img-1.svg").default} alt="images" />
                    </AnimCardItem>
                  </div>
                  <div className="col-sm-6 anim-right-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/demo-focusu-card-img-2.svg").default} alt="images" />
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
                    <p className="sub-head mb-0">FocusU needed a website that reflected its dynamic approach to corporate training. Their existing site was outdated, lacked modern design elements, and was not optimized for search engines. They required a digital presence that could effectively showcase their offerings and attract potential clients through improved SEO.</p>
                  </div>
                </div>
              </div>
              <div className="equal-padding-B col-lg-11 mx-auto">
                <div className="row gy-4">
                  <div className="col-xl-5 col-lg-6 anim-left-box">
                    <h4>Challenges</h4>
                  </div>
                  <div className="col-xl-7 col-lg-6 anim-right-box">
                    <p className="sub-head mb-0">The main challenges included creating a visually appealing, user-friendly design and ensuring the site was optimized for SEO to increase organic traffic. We also needed to align the new website with FocusU's brand identity.</p>
                  </div>
                </div>
              </div>
              <div className="equal-padding-B col-lg-11 mx-auto">
                <div className="row gy-4">
                  <div className="col-xl-5 col-lg-6 anim-left-box">
                    <h4>Our solutions</h4>
                  </div>
                  <div className="col-xl-7 col-lg-6 anim-right-box">
                    <p className="sub-head mb-0">We partnered with FocusU to revamp their website, focusing on a clean, modern design that enhances user experience. We implemented SEO best practices to improve search engine rankings, ensuring that the content was both engaging and keyword-rich. The redesign aimed to highlight FocusU's services and success stories better, making it easier for potential clients to understand their offerings.</p>
                  </div>
                </div>
              </div>

              <AnimationCards>
                <div className="row g-5">
                  <div className="col-lg-6 anim-left-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/demo-focusu-card-img.svg").default} alt="images" />
                    </AnimCardItem>
                  </div>
                  <div className="col-lg-6 anim-right-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/demo-focusu-card-img-3.svg").default} alt="images" />
                    </AnimCardItem>
                  </div>
                  <div className="col-lg-12 anim-bottom-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/demo-focusu-card-banner-img-1.svg").default} alt="images" />
                    </AnimCardItem>
                  </div>
                </div>
              </AnimationCards>
              <div className="equal-padding-T equal-padding-B col-lg-11 mx-auto">
                <div className="row gy-4 ">
                  <div className="col-xl-5 col-lg-6 anim-left-box">
                    <h4>Research, IA</h4>
                  </div>
                  <div className="col-xl-7 col-lg-6 anim-right-box">
                    <p className="sub-head mb-0">Our team conducted thorough research into FocusU's target audience and competitors. We developed an information architecture that prioritized user-friendly navigation and clear content categorization, ensuring visitors could easily find relevant information.</p>
                  </div>
                </div>
              </div>

              <AnimationCards>
                <div className="row g-5">
                  <div className="col-lg-6 anim-left-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/demo-focusu-card-img-4.png")} alt="images" />
                    </AnimCardItem>
                  </div>
                  <div className="col-lg-6 anim-right-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/demo-focusu-card-img-5.svg").default} alt="images" />
                    </AnimCardItem>
                  </div>
                </div>
              </AnimationCards>

              <div className="equal-padding-T equal-padding-B col-lg-11 mx-auto">
                <div className="row gy-4">
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
                  <div className="col-lg-12 anim-bottom-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/demo-focusu-card-banner-img-2.svg").default} alt="images" />
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
                  <div className="col-lg-6 anim-left-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/demo-focusu-card-img-6.svg").default} alt="images" />
                    </AnimCardItem>
                  </div>
                  <div className="col-lg-6 anim-right-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/demo-focusu-card-img-7.svg").default} alt="images" />
                    </AnimCardItem>
                  </div>
                  <div className="col-lg-12 anim-bottom-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/demo-focusu-card-img-8.png")} alt="images" />
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
                      <img src={require("../../../assets/images/case-study-images/demo-focusu-card-banner-img-3-v3.svg").default} alt="images" />
                    </AnimCardItem>
                  </div>
                  <div className="col-lg-6 anim-left-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/demo-focusu-card-img-9.svg").default} alt="images" />
                    </AnimCardItem>
                  </div>
                  <div className="col-lg-6 anim-right-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/demo-focusu-card-img-10.svg").default} alt="images" />
                    </AnimCardItem>
                  </div>
                </div>
              </AnimationCards>

            </CaseStudyContentWrap>

          </div>
        </div>
      </CaseStudyContentSection>

      <CaseStudyTestimonialSection className="theme-bg-black-secondary next-section-curve curve-bg-primary ">
        <div className="container">
          <div className="  equal-padding-B">
            <CaseStudyTestimonialWrap>
              <div className="row gy-4">
                <div className="col-lg-4 anim-left-box">
                  <TestimonialImg>
                    <img src={require("../../../assets/images/case-study-images/team-focus-u-image.png")} alt="profile-img" />
                  </TestimonialImg>
                </div>
                <div className="col-lg-8  ">
                  <TestimonialContent>

                    <ScrollAnimParaWrap className='para-reveal-wrap testimonial-reveal-wrap'>
                      <p className="text-start theme-text-white">
                         “Hybreed has been our indispensable IT partner for two years. The team is patient, responsive, and deeply understands our business. Our newly designed website perfectly captures our identity and exceeds expectations. Their recommendations consider our needs and budget, and they helped us achieve ISO 27001 certification. We greatly appreciate their commitment and look forward to continued collaboration.“ 
                         
                      </p> 


                    </ScrollAnimParaWrap>


                    {/* <h6>“Hybreed is without doubt one of the best website development teams I have ever worked with. Their commitment and perseverance brilliantly compliments the technical expertise they brought in on each of the projects we have collaborated on“</h6> */}

                    <p className="text-end"> &mdash; Team FocusU </p>

                  </TestimonialContent>
                </div>
              </div>


            </CaseStudyTestimonialWrap>
          </div>
        </div>
      </CaseStudyTestimonialSection>

      <BeforeFooterCtaWrapper />

    </>
  )
}
