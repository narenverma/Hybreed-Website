import React, { useEffect } from 'react'
import { CaseStudyGlobalStyle, CaseStudyHeroSection, CaseStudyHeroWrap, CategoriesList, BannerAnimationWrap, CaseStudyContentSection, CaseStudyContentWrap, AnimationCards, AnimCardItem, CaseStudyTestimonialSection, CaseStudyTestimonialWrap, TestimonialImg, TestimonialContent } from '../caseStudyStyle.js'
import { SectionTopSpace, TextRevealScroll, TextSplitSpans } from '../../../utils/contants.js';
import { CustomCursorAnim } from '../../../components/HoverInteract/index.jsx';
import BeforeFooterCtaWrapper from '../../../components/BeforeFooterCtaWrapper/index.jsx';
import { ScrollAnimParaWrap } from '../../../assets/css/globalStyle.js';
import OnScrollContentAnimation from '../../../components/OnScrollContentAnimation/index.jsx';


export default function EquizenCaseStudy() {

  useEffect(() => {
    SectionTopSpace();
    TextRevealScroll(".para-reveal-wrap.testimonial-reveal-wrap" , " p span");
    CustomCursorAnim();
    OnScrollContentAnimation();

// window.scrollTo(0, 0);

  }, [])


  return (
    <>
      <CaseStudyGlobalStyle />

      <CaseStudyHeroSection className="hero-section theme-bg-equizen-primary" >
        <div className="container">
          <div className="equal-padding-T  ">
            <CaseStudyHeroWrap>
              <h1 className="h2 section-head">EquiZen’s Journey to a <br /> Modern Digital Identity</h1>
              <CategoriesList className="anim-bottom-box">
                <h6>How did we help: </h6>
                <ul style={{"--list-color": "var(--equizen-cs-secondary)" }}>
                  <li>Branding</li>
                  <li>Website Design</li>
                  <li>Illustrations</li>
                  <li>Website Development</li>
                </ul>
              </CategoriesList>
            </CaseStudyHeroWrap>
          </div>
        </div>
        <BannerAnimationWrap className="anim-bottom-box">
          <img src={require("../../../assets/images/case-study-images/equizen-case-study-hero-banner-img-1.png")} alt="Case Study Banner" />
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
                    <p className="sub-head mb-0">EquiZen is a distinguished financial advisory firm founded on the principles of transparency and client-centricity. Led by Sanjay Parikh, a seasoned CA and CFA with over three decades of experience, EquiZen provides holistic financial solutions tailored to individual goals and aspirations. The firm stands out by prioritizing client suitability over product sales, offering services ranging from investment and financial planning to management consultancy and educational programs for financial certifications.</p>
                  </div>
                </div>
              </div>

              <AnimationCards>
                <div className="row g-5">
                  <div className="col-lg-12 anim-bottom-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/equizen-case-study-banner-img-1.svg").default} alt="images" />
                    </AnimCardItem>
                  </div>
                  <div className="col-sm-6 anim-left-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/equizen-case-study-card-img-2.svg").default} alt="images" />
                    </AnimCardItem>
                  </div>
                  <div className="col-sm-6 anim-right-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/equizen-case-study-card-img-3.svg").default} alt="images" />
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
                    <p className="sub-head mb-0">EquiZen required a new website to better reflect their expertise and client-focused approach. Their existing site did not effectively communicate their comprehensive range of services and lacked the modern design and functionality needed to attract and engage potential clients. They needed a digital presence that conveyed trust, expertise, and a commitment to client empowerment.</p>
                  </div>
                </div>
              </div>
              <div className="equal-padding-B col-lg-11 mx-auto">
                <div className="row gy-4">
                  <div className="col-xl-5 col-lg-6 anim-left-box">
                    <h4>Challenges</h4>
                  </div>
                  <div className="col-xl-7 col-lg-6 anim-right-box">
                    <p className="sub-head mb-0">The primary challenges included creating a design that balanced professionalism with approachability, ensuring seamless navigation to highlight their diverse service offerings, and integrating features that would enhance user engagement and trust. Additionally, the site needed to be optimized for SEO to improve visibility.</p>
                  </div>
                </div>
              </div>
              <div className="equal-padding-B col-lg-11 mx-auto">
                <div className="row gy-4">
                  <div className="col-xl-5 col-lg-6 anim-left-box">
                    <h4>Our solutions</h4>
                  </div>
                  <div className="col-xl-7 col-lg-6 anim-right-box">
                    <p className="sub-head mb-0">We collaborated with EquiZen to develop a website that encapsulates their brand ethos and extensive expertise. The new design features a clean, modern aesthetic with intuitive navigation, allowing users to easily explore the range of services. We implemented SEO strategies to improve search engine rankings and created content that resonates with EquiZen’s target audience, emphasizing their unique value propositions.</p>
                  </div>
                </div>
              </div>

              <AnimationCards>
                <div className="row g-5">
                  <div className="col-lg-12 anim-bottom-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/equizen-case-study-banner-img-2.png")} alt="images" />
                    </AnimCardItem>
                  </div>
                  <div className="col-lg-6 anim-left-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/equizen-case-study-card-img-4.svg").default} alt="images" />
                    </AnimCardItem>
                  </div>
                  <div className="col-lg-6 anim-right-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/equizen-case-study-card-img-5.svg").default} alt="images" />
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
                    <p className="sub-head mb-0">Our team conducted in-depth research to understand EquiZen’s target audience and market positioning. We developed a comprehensive information architecture that organized content logically and ensured a user-friendly experience. The IA focused on making it easy for visitors to find relevant information about EquiZen’s services and expertise.</p>
                  </div>
                </div>
              </div>
              <div className="equal-padding-T equal-padding-B col-lg-11 mx-auto">
                <div className="row gy-4 ">
                  <div className="col-xl-5 col-lg-6 anim-left-box">
                    <h4>Wireframes</h4>
                  </div>
                  <div className="col-xl-7 col-lg-6 anim-right-box">
                    <p className="sub-head mb-0">We designed detailed wireframes to establish the layout and structure of the website. These wireframes provided a clear visual representation of the site’s framework, ensuring that all elements were strategically placed to optimize user flow and engagement before moving into the design phase.</p>
                  </div>
                </div>
              </div>



              <AnimationCards>
                <div className="row g-5">
                  <div className="col-lg-12 anim-bottom-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/equizen-case-study-banner-img-3.svg").default} alt="images" />
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
                    <p className="sub-head mb-0">We created a moodboard to define the visual direction, incorporating colors, fonts, and imagery that reflect EquiZen’s brand identity. A design system was then developed to ensure consistency across all visual elements, reinforcing the brand’s professionalism and commitment to quality.</p>
                  </div>
                </div>
              </div>

              <AnimationCards>
                <div className="row g-5"> 
                  <div className="col-lg-12 anim-bottom-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/equizen-case-study-banner-img-4.svg").default} alt="images" />
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
                    <p className="sub-head mb-0">The UI design focused on creating an engaging and professional interface that resonates with EquiZen’s target audience. We utilized responsive design techniques to ensure optimal performance across devices. The visual output is a sophisticated, user-friendly website that effectively showcases EquiZen’s services and expertise, building trust and encouraging client interaction.</p>
                  </div>
                </div>
              </div>

              <AnimationCards>
                <div className="row g-5">
                  <div className="col-lg-12 anim-bottom-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/equizen-case-study-banner-img-5.png")} alt="images" />
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
