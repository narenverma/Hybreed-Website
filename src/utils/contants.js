

export const marqueeHybreedList = [
    {
        itemCategory: 3,
        itemName: "HYBREED.CO",
    }
]

export const TextSplitSpans = ({ text }) => {
    const letters = text.split('');

    return (
        <>
            {letters.map((letter, index) => (
                <span key={index}>{letter}</span>
            ))}
        </>
    );
};



export function SectionTopSpace() {

    let headerH = document.querySelector("header").offsetHeight;

    document.querySelector("main .hero-section").style.height = "auto";
    document.querySelector("main .hero-section").style.paddingTop = headerH + "px";

}


export const scrollHeader = (element) => {
    document.addEventListener("scroll", () => {
        let getElem = document.querySelector(element)
        //  console.log(getElem)
        if (window.scrollY > 30) {
            getElem.classList.add("headerActive")
        } else {
            getElem.classList.remove("headerActive")
        }

    })
}




export const MarqueeDuplicateAndTime = (marqueeWrap, marqueeList, loopVal) => {

    let getCloneWrapper = document.querySelectorAll(marqueeWrap);
    getCloneWrapper.forEach((getCloneWrap) => {



        getCloneWrap.querySelectorAll(marqueeList).forEach((item) => {
            let cloneList = item.cloneNode(true)
            // console.log(cloneList );

            for(let i=0; i<=loopVal; i++){
                
                getCloneWrap.append(cloneList) 
            }


            let getListOfSlide = getCloneWrap.querySelectorAll(marqueeList).length,
                getFirstSlideW = getCloneWrap.offsetWidth;

                // let  sumSize = 0;

                // getCloneWrap.querySelectorAll(marqueeList).forEach((item) => {
                //         // widthList.push(item.offsetWidth); 
                //         sumSize += item.offsetWidth  
                // })
    

            getCloneWrap.style.animationDuration =  getFirstSlideW / (getListOfSlide + 100)     + "s";
            // getCloneWrap.style.animationDuration = (getListOfSlide * (getFirstSlideW / 100) - 10) + "s";

            
             

        })
    })
}




export const LoaderFunction = () => {


    function onReady() {
        let getPillThumbs = document.querySelector(".pill-thumbs-anim"),
            getThumbsLoader = document.querySelector(".page-loader");




        const setPageLoader = () => {

            getThumbsLoader.style.position = "absolute";
            getThumbsLoader.style.top = getPillThumbs.getBoundingClientRect().top + "px";
            getThumbsLoader.style.left = getPillThumbs.getBoundingClientRect().left + "px";
            getThumbsLoader.style.height = getPillThumbs.offsetHeight + "px";
            getThumbsLoader.style.width = getPillThumbs.offsetWidth + "px";
            getThumbsLoader.style.borderRadius = "4rem";
            getThumbsLoader.style.zIndex = 10;
            document.querySelector("#loader").style.opacity = 0;


        }

        setTimeout(() => {
            setPageLoader();

            
            MarqueeDuplicateAndTime('.carousel-wrap ', " div", 2)
            MarqueeDuplicateAndTime('.marquee-strip-list', " div", 4)

        }, 1000)



        let prevWidth = window.innerWidth;
        window.addEventListener('resize', function () {
            if (window.innerWidth !== prevWidth) {
                setPageLoader()
            }
        });


    }




    const loaderTimer = () => {

        const LoaderWrap = document.querySelector("#loader");
        const loadingBar = document.querySelector("#bar");
        const percentText = document.querySelector("#percent");

        let load = 0;
        let timeOut = 90;

        let loadingVal = setInterval(() => {
            load = load + Math.floor(Math.random() * 5 + 1);
            if (load < 100) {
                percentText.textContent = load + "%";
                loadingBar.style.width = `${load}%`;

            } else {
                loadingBar.style.width = `100%`;
                percentText.textContent = "100%";

            }


            if (load > 100) {

                // console.log("Tombola")

                onReady();

                clearInterval(loadingVal);

            }
        }, timeOut);
    }

    if (document.readyState !== "loading") {
        loaderTimer();  
        // document.querySelector(".page-loader video").addEventListener("ready", loaderTimer);

    } else {
        document.addEventListener("DOMContentLoaded", loaderTimer);
        // document.querySelector(".page-loader video").addEventListener("ready", loaderTimer);
    }

}

 
export const headerScrollHide =()=>{

    let didScroll;
    let lastScrollT = 0;
    let delta = 5;
    let siteHeader = document.querySelector('header').offsetHeight;
    
    window.addEventListener('scroll', function(event) {
        didScroll = true;
    });
    
    setInterval(function() {
        if (didScroll) {
            hasScroll();
            didScroll = false;
        }
    }, 250);
    
    function hasScroll() {
        let scrollT = window.scrollY;
        if (Math.abs(lastScrollT - scrollT) <= delta) return;
        if (scrollT > lastScrollT && scrollT > siteHeader) {
            document.querySelector('header').style.transform = 'translateY(-100%)';
        } else {
            if (scrollT + window.innerHeight < document.documentElement.scrollHeight) {
                document.querySelector('header').style.transform = 'translateY(0%)';
            }
        }
        lastScrollT = scrollT;
    }
    
}