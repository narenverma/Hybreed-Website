import React from 'react'
import { PillMinHead } from "../../assets/css/globalStyle"
import { FAQsWrap } from "./styled.js"

export default function FAQsWrapper() {


    const faqsList = [
        {
            faqHeading: "What are the models of engagement that you have?",
            faqContent: "We work closely with our clients to choose the model that aligns best with their objectives, ensuring a collaborative and effective design and development journey."
        },
        {
            faqHeading: "What are Hybreed's areas of expertise as a design & development agency?",
            faqContent: "We work closely with our clients to choose the model that aligns best with their objectives, ensuring a collaborative and effective design and development journey."
        },
        {
            faqHeading: "What is the design & development process you follow at Hybreed?",
            faqContent: "We work closely with our clients to choose the model that aligns best with their objectives, ensuring a collaborative and effective design and development journey."
        },
        {
            faqHeading: "How is Hybreed different from other agencies?",
            faqContent: "We work closely with our clients to choose the model that aligns best with their objectives, ensuring a collaborative and effective design and development journey."
        },
        {
            faqHeading: "How does Hybreed go about providing Branding services?",
            faqContent: "We work closely with our clients to choose the model that aligns best with their objectives, ensuring a collaborative and effective design and development journey."
        },
        {
            faqHeading: "How can I contact you?",
            faqContent: "We work closely with our clients to choose the model that aligns best with their objectives, ensuring a collaborative and effective design and development journey."
        },
    ]


    return (
        <>
            <FAQsWrap>
                <div className="row">
                    <div className="col-lg-6">
                        <PillMinHead className="  light-pill">
                            <p>❓ FAQ</p>
                        </PillMinHead>
                        <h2 className="section-head mb-5   theme-text-white">Answers to <br />
                            common questions</h2>
                    </div>
                    <div className="col-lg-6">

                        <div className="accordion" id="accordionPanelsStayOpenExample">
                            {
                                faqsList.map((item, index) => (

                                    <div className="accordion-item" key={index}>
                                        <h6 className="accordion-header" id={"heading" + (index + 1)}>
                                            <button className={"accordion-button " + ((index + 1) === 1 ? "" : " collapsed")} type="button" data-bs-toggle="collapse" data-bs-target={"#panelsStayOpen-collapse" + (index + 1)} aria-expanded={(index + 1) === 1 ? "true" : "false"} aria-controls={"panelsStayOpen-collapse" + (index + 1)}>
                                                {item.faqHeading}
                                            </button>
                                        </h6>
                                        <div id={"panelsStayOpen-collapse" + (index + 1)} className={"accordion-collapse collapse " + ((index + 1) === 1 ? "show" : "")} aria-labelledby={"heading" + (index + 1)}>
                                            <div className="accordion-body">
                                                <p>{item.faqContent}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>

                    </div>
                </div>
            </FAQsWrap>
        </>
    )
}
