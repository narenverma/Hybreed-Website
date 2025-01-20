import React from 'react'
import { PillMinHead } from "../../assets/css/globalStyle"
import { FAQsWrap } from "./styled.js"

export default function FAQsWrapper() {


    const faqsList = [
        {
            faqHeading: "What are Hybreed's areas of expertise as a design & development agency?",
            faqContent: <>
                <p>A. Hybreed is a full-service digital agency focused on crafting immersive web and mobile experiences since 2015.</p>
                <p>Our expertise spans:</p>
                <ul>
                    <li>Visual design</li>
                    <li>Branding</li>
                    <li>UI/UX design</li>
                    <li>Front-end and Back-end Development </li>
                </ul>
                <p>Our years of experience & technological prowess help us develop robust:</p>
                <ul>
                    <li>Websites & Web applications</li>
                    <li>E-commerce stores</li>
                    <li>Enterprise platforms </li>
                    <li>Mobile apps, and much more</li>
                </ul>
                <p>Hybreed’s talented team of designers, developers, & marketers collaborates closely with clients to understand their needs & deliver end-to-end digital solutions.</p>
            </>
        },
        {
            faqHeading: "What is the design & development process you follow at Hybreed?",
            faqContent: <>
                <p>A. At Hybreed, we like to keep things simple. This is why we have adopted a straightforward approach towards delivering services.</p>
                <p><strong>Ask: </strong>We ask the right questions to understand your business & expectations.</p>
                <p><strong>Ideate: </strong>This stage is about research, analysis, & brainstorming. We narrow down the best, most practical, & innovative ideas.</p>
                <p><strong>Strategize: </strong>Using insights from our research & analysis, we craft a strategy that fits your requirements.</p>
                <p><strong>Design: </strong>Our talented designers put in all their creativity to create stunning designs that match your brand's core values and personality. </p>
                <p><strong>Develop: </strong>Our developers work on bringing your designs to life with code.</p>
                <p><strong>Support: </strong>Even after your digital product is made live, we provide prompt support when needed.</p>
            </>
        },
        {
            faqHeading: "How is Hybreed different from other agencies?",
            faqContent: <>
                <p>Hybreed’s USP lies in our hyper-focus on delivering measurable business impact. </p>
                <p>Key factors that set us apart include:</p>
                <ol>
                    <li>User experience is at the core of our creative engineering process </li>
                    <li>The services we offer, branding, design, & full-stack development, are result-driven </li>
                    <li>We aim to establish long-term digital partnerships with our client </li>
                    <li>Cross-industry experience that enables us to develop specific solutions</li>
                    <li>Delivering pixel-perfect interfaces and scalable platforms driving tangible results</li>
                </ol>
            </>
        },
        {
            faqHeading: "What are the models of engagement that you have?",
            faqContent: <>
                <p>A. We work closely with our clients to choose the model that aligns best with their objectives, ensuring a collaborative and effective design and development journey.</p>
                <h6>Retainer-based Collaboration:</h6>
                <p>This model is perfect for clients that have ongoing design and development needs. This model ensures clients get dedicated resources and timely updates throughout the product through a fixed monthly retainer. </p>
                <p>Retainer-based engagement model is best-suited for businesses seeking continuous support and flexibility in resource allocation.</p>
                <h6>Agile Development Sprint:</h6>
                <p>Designed for dynamic projects, the ‘Agile Sprint’ model divides work into short iterative cycles. </p>
                <p>In this engagement model, you, as the clients, can review progress at the end of each sprint. You can also provide feedback for adjustments which can be included at that time itself. </p>
                <p>This approach is effective for iterative development, software applications, and projects with evolving requirements.</p>
                <h6>Customized Hybrid Model:</h6>
                <p>For clients that unique project requirements, Hybreed’s customized hybrid model combines elements from various engagement models. </p>
                <p>It gives you the flexibility of tailoring our services to your specific needs. With this approach, you get flexibility in billing, project structure, and collaboration methods. </p>
                <p>Customized hybrid models are suited for projects that do not fit neatly into conventional models.</p>
                <p>Contact our team to know more.</p>
            </>
        },
        {
            faqHeading: "How does Hybreed go about providing Branding services? ",
            faqContent: <>
                <p>A. At Hybreed, we help brands showcase their most authentic side.</p>
                <p>To make your brand a unique identity, we help you in: </p>
                <p><strong>Brand Discovery - </strong>Our team immerses in your brand’s landscape through audits and research. We take stakeholder inputs to define unique positioning and messaging for your brand.</p>
                <p><strong>Visual Identity - </strong>Now, we start crafting logos and defining brand colours and typography that aesthetically reflects desired brand attributes and archetypes. </p>
                <p><strong>Brand Storytelling - </strong>We now focus on articulating ethos and personality through compelling copy and tone of voice guidelines.</p>
                <p><strong>Touchpoint Integration - </strong>We implement visuals and content cohesively across digital and physical brand applications.</p>
            </>
        },
        {
            faqHeading: "How does Hybreed ensure my digital solution reflects my vision?",
            faqContent: <>
                <p>A. At Hybreed, ensuring your vision manifests into a digital solution as per your expectations is our priority. </p>
                <p>We facilitate open communication & iterative feedback loops throughout the development process. To make sure that your team is updated about the progress of your solution, clear and transparent communication is maintained.</p>
                <p>Our client-centric approach means we actively involve you in decision-making. We believe that insights from our clients refine our work. </p>
                <p>Additionally, after thoroughly understanding your needs and requirements, we create design prototypes and mockups that include all the features you need.</p>
                <p>All of this combined makes sure that the final outcome resonates with your envisioned digital solution.</p>
            </>
        },
        {
            faqHeading: "How does your team successfully redesign enterprise & legacy products?",
            faqContent: <>
                <p>Hybreed takes a user-centric approach to redesigning enterprise and legacy products.</p>
                <ol>
                    <li>We conduct extensive user research including stakeholder interviews, surveys, contextual inquiries, and usability studies to develop deep empathy and insights into user needs. </li>
                    <li>Armed with an understanding of existing product capabilities and pain points, we leverage modern design thinking to reimagine intuitive user journeys and flows.</li>
                    <li>We create prototypes and gather real user feedback through rapid, iterative testing.</li>
                    <li>Refining ideas based on input from users, we arrive at optimal designs that balance innovation with familiarity.</li>
                </ol>
                <p>This allows us to transform complex legacy products into solutions users quickly adopt and love, while emphasizing accessibility, internationalization, reliability and other critical attributes. </p>
            </>
        },
        {
            faqHeading: "How can I contact you?",
            faqContent: <>
                <p>You can fill up the form <a href="https://hybreed.co/contact">here</a> or  message with Ajit RG <a href="tel:+919833572299">here</a>.</p>
            </>
        },
    ]


    return (
        <>
            <FAQsWrap>
                <div className="row">
                    <div className="col-lg-6">
                    <div  style={window.innerWidth > 992 ? {position: "sticky", top: "100px"} : {}}>

                        <PillMinHead className="  light-pill">
                            <p>❓ FAQ</p>
                        </PillMinHead>
                        <h2 className="section-head mb-5   theme-text-white">Answers to <br />
                            common questions</h2>
                    </div>
                    </div>
                    <div className="col-lg-6">

                        <div className="accordion" id="themeAccordion">
                            {
                                faqsList.map((item, index) => (

                                    <div className="accordion-item" key={index}>
                                        <h6 className="accordion-header" id={"heading" + (index + 1)}>
                                            <button className={"accordion-button   collapsed"} type="button" data-bs-toggle="collapse" data-bs-target={"#panelsStayOpen-collapse" + (index + 1)} aria-expanded={ "false"} aria-controls={"panelsStayOpen-collapse" + (index + 1)}>
                                                {item.faqHeading}
                                            </button>
                                        </h6>
                                        <div id={"panelsStayOpen-collapse" + (index + 1)} className={"accordion-collapse collapse "} aria-labelledby={"heading" + (index + 1)} data-bs-parent="#themeAccordion">
                                            <div className="accordion-body">
                                                {item.faqContent}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            {/* {
                                faqsList.map((item, index) => (

                                    <div className="accordion-item" key={index}>
                                        <h6 className="accordion-header" id={"heading" + (index + 1)}>
                                            <button className={"accordion-button " + ((index + 1) === 1 ? "" : " collapsed")} type="button" data-bs-toggle="collapse" data-bs-target={"#panelsStayOpen-collapse" + (index + 1)} aria-expanded={(index + 1) === 1 ? "true" : "false"} aria-controls={"panelsStayOpen-collapse" + (index + 1)}>
                                                {item.faqHeading}
                                            </button>
                                        </h6>
                                        <div id={"panelsStayOpen-collapse" + (index + 1)} className={"accordion-collapse collapse " + ((index + 1) === 1 ? "show" : "")} aria-labelledby={"heading" + (index + 1)} data-bs-parent="#themeAccordion">
                                            <div className="accordion-body">
                                                {item.faqContent}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            } */}

                        </div>

                    </div>
                </div>
            </FAQsWrap>
        </>
    )
}
