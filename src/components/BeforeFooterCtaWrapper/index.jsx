import React, { useEffect } from 'react'
import { BeforeFooterCtaSection, BeforeFooterCtaWrap } from '../../pages/Home/styled'
import { CustomBtn, MidHeadingCTA, PillMinHead } from '../../assets/css/globalStyle'
import { Link } from 'react-router-dom'

export default function BeforeFooterCtaWrapper() {

    useEffect(() => {
       
        // Magnet Cta

        document.querySelectorAll('.magnet-btn ').forEach(btn => {

            btn.addEventListener('mousemove', (e) => {

                const rect = btn.getBoundingClientRect();
                const h = rect.width / 2;

                const x = e.clientX - rect.left - h;
                const y = e.clientY - rect.top - h;

                const r1 = Math.sqrt(x * x + y * y);
                const r2 = (1 - (r1 / h)) * r1;

                const angle = Math.atan2(y, x);
                const tx = Math.round(Math.cos(angle) * r2 * 100) / 100;
                const ty = Math.round(Math.sin(angle) * r2 * 100) / 100;

                const op = (r2 / r1) + 0.25;

                btn.style.setProperty('--tx', `${tx}px`);
                btn.style.setProperty('--ty', `${ty}px`);
                // btn.style.setProperty('--opacity', `${op}`);
            });

            btn.addEventListener('mouseleave', (e) => {

                btn.style.setProperty('--tx', '0px');
                btn.style.setProperty('--ty', '0px');
                // btn.style.setProperty('--opacity', `${0.25}`);

            });
        })

        // Magnet Cta end
    })


  return (
    <>
                <BeforeFooterCtaSection
                data-scroll-section
                className='theme-bg-primary next-section-curve curve-bg-black-secondary'>
                <div className='container'>
                    <div className=' equal-padding-B'>
                        <BeforeFooterCtaWrap>
                            <PillMinHead className='text-lg-center  '>
                                <p>💬 Available for new projects</p>
                            </PillMinHead>
                            <h2 className='section-head   text-lg-center   '>
                                Interested in <br />
                                working <span className='d-lg-none'>together? </span> {" "}
                                <MidHeadingCTA className="magnet-btn d-lg-inline-block d-none">
                                    <Link to='https://hybreed.co/contact' > <strong className="magnet-btn-text text-white">Let’s connect!!! </strong></Link>
                                </MidHeadingCTA>

                                <CustomBtn className='text-lg-center mt-5  d-lg-none'>
                                    <Link to='https://hybreed.co/contact'   >
                                        <span  >Let’s connect!!!</span>
                                    </Link>
                                </CustomBtn>

                                {" "}
                                <span className="d-lg-inline d-none"> together?</span>
                            </h2>
                        </BeforeFooterCtaWrap>
                    </div>
                </div>
            </BeforeFooterCtaSection>
    </>
  )
}
