import React, { useEffect } from 'react'
import { CaseStudyGlobalStyle, CaseStudyHeroSection, CaseStudyHeroWrap, CategoriesList, BannerAnimationWrap, CaseStudyContentSection, CaseStudyContentWrap, AnimationCards, AnimCardItem, CaseStudyTestimonialSection, CaseStudyTestimonialWrap, TestimonialImg, TestimonialContent } from '../caseStudyStyle.js'
import { SectionTopSpace, TextRevealScroll, TextSplitSpans } from '../../../utils/contants.js';
import { CustomCursorAnim } from '../../../components/HoverInteract/index.jsx';
import BeforeFooterCtaWrapper from '../../../components/BeforeFooterCtaWrapper/index.jsx';
import { ScrollAnimParaWrap } from '../../../assets/css/globalStyle.js';
import OnScrollContentAnimation from '../../../components/OnScrollContentAnimation/index.jsx';
import MetaUpdate from '../../../components/MetaUpdate/index.jsx';


export default function MercerCaseStudy() {

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

      <CaseStudyHeroSection className="hero-section theme-bg-mercer-primary" >
        <div className="container">
          <div className="equal-padding-T  ">
            <CaseStudyHeroWrap>
              <h1 className="h2 section-head">Empowering Accountancy with<br/>ISCA’s New Digital Toolkit</h1>
              <CategoriesList className="anim-bottom-box ">
                <h6>How did we help: </h6>
                <ul style={{ "--list-color": "var(--mercer-cs-secondary)" }}>
                 <li>Website Design</li>
                 <li>illustrations</li>
                 <li>Website Development</li>
                 <li>SEO</li>
                </ul>
              </CategoriesList>
            </CaseStudyHeroWrap>
          </div>
        </div>
        <BannerAnimationWrap className="anim-bottom-box">
          <img src={require("../../../assets/images/case-study-images/mercer-case-study-hero-banner-img.svg").default} alt="Case Study Banner" />
        </BannerAnimationWrap>
      </CaseStudyHeroSection>

      <CaseStudyContentSection className="next-section-curve next-section-curve curve-bg-primary">
        <div className="container">
          <div className="equal-padding-T equal-padding-B">
            <CaseStudyContentWrap>
              <div className="equal-padding-B col-lg-11 mx-auto">

                <div className="row gy-4">
                  <div className="col-xl-5 col-lg-6 anim-left-box">
                    <h4>About the client</h4>
                  </div>
                  <div className="col-xl-7 col-lg-6 anim-right-box">
                    <p className="sub-head mb-0">The Institute of Singapore Chartered Accountants (ISCA) is Singapore's national accountancy body, representing over 36,000 members globally. Since its inception in 1963, ISCA has been a key advocate for the profession, driving the advancement of accountancy through regional expertise, knowledge, and networks. The organization administers the Singapore Chartered Accountant Qualification program and is the designated entity to confer the Chartered Accountant of Singapore – CA (Singapore) – designation. As a member of Chartered Accountants Worldwide, ISCA is part of a global community of over 1.8 million Chartered Accountants and students across more than 190 countries.</p>
                  </div>
                </div>
              </div>

              <AnimationCards>
                <div className="row g-5">
                  <div className="col-lg-12 anim-bottom-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/mercer-case-study-card-img-1.svg").default} alt="images" />
                    </AnimCardItem>
                  </div>
                  <div className="col-sm-6 anim-left-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/mercer-case-study-card-img-2.svg").default} alt="images" />
                    </AnimCardItem>
                  </div>
                  <div className="col-sm-6 anim-right-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/mercer-case-study-card-img-3.svg").default} alt="images" />
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
                    <p className="sub-head mb-0">ISCA needed a digital transformation to better support its members and advance the profession. Their existing website was outdated, lacked user-centric features, and was not optimized for modern web standards. Additionally, there was a need to create a comprehensive dashboard (toolkit) to guide employees in transforming their accounting, tax, and audit functions through job redesign. The organization sought a partner to revamp their digital presence and provide solutions that aligned with their strategic goals.</p>
                  </div>
                </div>
              </div>
              <div className="equal-padding-B col-lg-11 mx-auto">
                <div className="row gy-4">
                  <div className="col-xl-5 col-lg-6 anim-left-box">
                    <h4>Challenges</h4>
                  </div>
                  <div className="col-xl-7 col-lg-6 anim-right-box">
                    <p className="sub-head mb-0">Key challenges included designing a user-friendly interface that catered to a diverse, global audience and developing a toolkit that was both informative and intuitive. Ensuring seamless navigation and integrating the latest SEO practices were also critical to the project’s success.</p>
                  </div>
                </div>
              </div>
              <div className="equal-padding-B col-lg-11 mx-auto">
                <div className="row gy-4">
                  <div className="col-xl-5 col-lg-6 anim-left-box">
                    <h4>Our solutions</h4>
                  </div>
                  <div className="col-xl-7 col-lg-6 anim-right-box">
                    <p className="sub-head mb-0">We partnered with ISCA to overhaul their website, focusing on a clean, modern design that enhances usability. We also developed a specialized dashboard (toolkit) to help employees transform their accounting, tax, and audit functions. This toolkit offers step-by-step guidance, ensuring users can easily access the resources they need to drive job redesign. SEO strategies were implemented to improve search engine rankings, making the website more discoverable to potential members and stakeholders.</p>
                  </div>
                </div>
              </div>

              <AnimationCards>
                <div className="row g-5">
                  <div className="col-lg-6 anim-left-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/mercer-case-study-card-img-4.svg").default} alt="images" />
                    </AnimCardItem>
                  </div>
                  <div className="col-lg-6 anim-right-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/mercer-case-study-card-img-5.svg").default} alt="images" />
                    </AnimCardItem>
                  </div>
                </div>
              </AnimationCards>

              <div className="equal-padding-T equal-padding-B col-lg-11 mx-auto">
                <div className="row gy-4">
                  <div className="col-xl-5 col-lg-6 anim-left-box">
                    <h4>Research, IA</h4>
                  </div>
                  <div className="col-xl-7 col-lg-6 anim-right-box">
                    <p className="sub-head mb-0">Our research delved into understanding ISCA’s members and their specific needs. We created an information architecture that prioritized ease of access to critical resources and tools. The IA was designed to facilitate a seamless user experience, ensuring that members could find the information they needed efficiently.</p>
                  </div>
                </div>
              </div>

              <AnimationCards>
                <div className="row g-5">
                  <div className="col-lg-12 anim-bottom-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/mercer-case-study-card-img-6.svg").default} alt="images" />
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
                    <p className="sub-head mb-0">Our research delved into understanding ISCA’s members and their specific needs. We created an information architecture that prioritized ease of access to critical resources and tools. The IA was designed to facilitate a seamless user experience, ensuring that members could find the information they needed efficiently.</p>
                  </div>
                </div>
              </div>

              <AnimationCards>
                <div className="row g-5">
                  <div className="col-lg-12 anim-bottom-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/mercer-case-study-card-img-7.svg").default} alt="images" />
                    </AnimCardItem>
                  </div>
                </div>
              </AnimationCards>

              <div className="equal-padding-T equal-padding-B col-lg-11 mx-auto">
                <div className="row gy-4">
                  <div className="col-xl-5 col-lg-6 anim-left-box">
                    <h4>Moodboard,
                    Design System</h4>
                  </div>
                  <div className="col-xl-7 col-lg-6 anim-right-box">
                    <p className="sub-head mb-0">A moodboard was created to establish the visual direction, focusing on professional yet approachable aesthetics that reflect ISCA’s brand identity. We developed a design system that ensured consistency across all elements, from typography to color schemes, reinforcing the organization’s commitment to excellence.</p>
                  </div>
                </div>
              </div>

              <AnimationCards>
                <div className="row g-5">
                  <div className="col-lg-12 anim-bottom-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/mercer-case-study-card-img-8.svg").default} alt="images" />
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
                    <p className="sub-head mb-0">The UI design focused on creating a responsive, visually appealing website that caters to ISCA’s global audience. The toolkit was designed with user experience in mind, featuring an intuitive interface that simplifies complex processes. The final visual output is a modern, professional website that effectively serves ISCA’s members and supports their professional growth.</p>
                  </div>
                </div>
              </div>

              <AnimationCards>
                <div className="row g-5">
                  <div className="col-lg-12 anim-bottom-box">
                    <AnimCardItem>
                      <img src={require("../../../assets/images/case-study-images/mercer-case-study-card-img-9.svg").default} alt="images" />
                    </AnimCardItem>
                  </div>
                  <div className="row g-5">
                    <div className="col-lg-6 anim-left-box">
                      <AnimCardItem>
                        <img src={require("../../../assets/images/case-study-images/mercer-case-study-card-img-10.svg").default} alt="images" />
                      </AnimCardItem>
                    </div>
                    <div className="col-lg-6 anim-right-box">
                      <AnimCardItem>
                        <img src={require("../../../assets/images/case-study-images/mercer-case-study-card-img-11.svg").default} alt="images" />
                      </AnimCardItem>
                    </div>
                  </div>
                </div>
              </AnimationCards>

            </CaseStudyContentWrap>

          </div>
        </div>
      </CaseStudyContentSection>

{/*       <CaseStudyTestimonialSection className="theme-bg-black-secondary next-section-curve curve-bg-primary ">
        <div className="container">
          <div className="  equal-padding-B">
            <CaseStudyTestimonialWrap>
              <div className="row gy-4">
                <div className="col-lg-4 anim-left-box">
                  <TestimonialImg>
                    <img src={require("../../../assets/images/case-study-images/case-study-bhavna-goyal-img.png")} alt="profile-img" />
                  </TestimonialImg>
                </div>
                <div className="col-lg-8  ">
                  <TestimonialContent>

                    <ScrollAnimParaWrap className='para-reveal-wrap testimonial-reveal-wrap'>
                      <p className="text-start theme-text-white">
                      “Hybreed is without doubt one of the best website development teams I have ever worked with. Their commitment and perseverance brilliantly compliments the technical expertise they brought in on each of the projects we have collaborated on“
                      </p>
                    </ScrollAnimParaWrap>


                    <p className="text-end"> &mdash; Bhavna Goyal, CEO, FocusU</p>

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
