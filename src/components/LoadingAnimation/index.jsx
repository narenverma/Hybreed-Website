import React from 'react'
import { LoadingAnimationStyle } from './styled'
import { loaderSlider } from '../../utils/apisList';

export default function LoadingAnimation() {

  const loadingQuotesList = [

    <>
      Good UI can raise your website's conversion rate by <strong>200%</strong> <span>📈</span>
    </>,
    <>
      <strong>88%</strong> of online consumers are less likely to return to a site after a bad experience.
      <strong className='d-block mt-4'>[Sweor]</strong>
    </>,
    <>
      A well-designed user interface could raise your website’s conversion rate by up to <strong>200%</strong>, and better UX design could yield conversion rates up to <strong>400%</strong>.
      <strong className='d-block mt-4'>[Forrester]</strong>
    </>,
    <>
      <strong>74%</strong> of people are likely to return to a website if it is optimized for mobile.
      <strong className='d-block mt-4'>[Adobe]</strong>
    </>,
    <>
      <strong>94%</strong> of first impressions relate to your site’s web design.
      <strong className='d-block mt-4'>[Sweor]</strong>
    </>,
    <>
      <strong>75%</strong> of consumers admit to making judgments on a company’s credibility based on the company’s website design.
      <strong className='d-block mt-4'>[Stanford Web Credibility Research]</strong>
    </>,
    <>
      Companies that invest in UX see a lower customer acquisition cost (by up to <strong>50%</strong>) and see increased revenues (up to <strong>15%</strong>).
      <strong className='d-block mt-4'>[Forrester]</strong>
    </>,
    <>
      <strong>52%</strong> of users are less likely to engage with a company due to a bad mobile experience.
      <strong className='d-block mt-4'>[Think with Google]</strong>
    </>,
    <>
      <strong>48%</strong> of people cited a website’s design as the number one factor in deciding the credibility of a business.
      <strong className='d-block mt-4'>[Blue Corona]</strong>
    </>,

  ];
  // const loadingQuotesList = [ 

  //   <>
  //   Good UI can raise your website's conversion rate by <span className="counter"  data-count-start="0" data-count-end="200" data-speed="10">0%</span>  <span>📈</span>
  //   </>,
  //   <>
  //   <span className="counter"  data-count-start="0" data-count-end="88" data-speed="10">0%</span> of online consumers are less likely to return to a site after a bad experience. [Sweor]
  //   </>,
  //   <>
  //   A well-designed user interface could raise your website’s conversion rate by up to <span className="counter"  data-count-start="0" data-count-end="200" data-speed="10">0%</span>, and better UX design could yield conversion rates up to <span className="counter"  data-count-start="0" data-count-end="400" data-speed="10">0%</span>. [Forrester]
  //   </>,
  //   <>
  //   <span className="counter"  data-count-start="0" data-count-end="74" data-speed="10">0%</span> of people are likely to return to a website if it is optimized for mobile. [Adobe]
  //   </>,
  //   <>
  //   <span className="counter"  data-count-start="0" data-count-end="94" data-speed="10">0%</span> of first impressions relate to your site’s web design. [Sweor]
  //   </>,
  //   <>
  //   <span className="counter"  data-count-start="0" data-count-end="75" data-speed="10">0%</span> of consumers admit to making judgments on a company’s credibility based on the company’s website design. [Stanford Web Credibility Research]
  //   </>,
  //   <>
  //   Companies that invest in UX see a lower customer acquisition cost (by up to <span className="counter"  data-count-start="0" data-count-end="50" data-speed="10">0%</span>) and see increased revenues (up to <span className="counter"  data-count-start="0" data-count-end="15" data-speed="10">0%</span>). [Forrester]
  //   </>,
  //   <>
  //   <span className="counter"  data-count-start="0" data-count-end="52" data-speed="10">0%</span> of users are less likely to engage with a company due to a bad mobile experience. [Think with Google]
  //   </>,
  //   <>
  //   <span className="counter"  data-count-start="0" data-count-end="48" data-speed="10">0%</span> of people cited a website’s design as the number one factor in deciding the credibility of a business. [Blue Corona]
  //   </>,

  // ];



  return (
    <>
      <LoadingAnimationStyle />
      <section className="loading-anim">
      <div className="hero-imgs">
            {
              loaderSlider.map((slide, i) => (

                <img
                  src={require("../../assets/images/loader-images/" + slide.itemImg)} alt="slides"
                  key={i}
                />
              ))
            }
          </div>
        <div className="pre-loader">

          <div className="container col-lg-9 mx-auto">


            <h5 className="load-min-head mb-3"><em>Did you know?</em></h5>
            <h4 className="h3"> {loadingQuotesList[Math.floor(Math.random() * loadingQuotesList.length)]} {""}

            </h4>
          </div>

          <div className="loader-counter">
            <p>
              Loading {""}
              <span className="counter">
                <span className="digit-1">
                  <span className="num">0</span>
                  <span className="num offset">1</span>
                </span>
                <span className="digit-2">
                  <span className="num">0</span>
                  <span className="num offset">1</span>
                  <span className="num">2</span>
                  <span className="num">3</span>
                  <span className="num">4</span>
                  <span className="num">5</span>
                  <span className="num">6</span>
                  <span className="num">7</span>
                  <span className="num">8</span>
                  <span className="num">9</span>
                  <span className="num">0</span>
                </span>
                <span className="digit-3">
                  <span className="num">0</span>
                  <span className="num">1</span>
                  <span className="num">2</span>
                  <span className="num">3</span>
                  <span className="num">4</span>
                  <span className="num">5</span>
                  <span className="num">6</span>
                  <span className="num">7</span>
                  <span className="num">8</span>
                  <span className="num">9</span>
                  <span className="num">0</span>
                </span>
                <span className="digit-4">%</span>
              </span>
            </p>
            <div className="progress-bar"></div>
          </div>
        </div>

      </section>
    </>
  )
}
