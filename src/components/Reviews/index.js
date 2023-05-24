import React from "react";





const Reviews = () => {
    return (
        <body>
            <div className="container">
                <div className="board">
                    <h2 className="text-light">Parenting Mindset</h2>
                    <p className="text-light">What it's like.....</p>
                    <div className="swiper">
                        {/* <!-- Additional required wrapper --> */}
                        <div className="swiper-wrapper">
                            {/* <!-- Slides --> */}
                            <div className="swiper-slide">
                                <div className="flex">
                                    <div className="comments">
                                        "Jaxson got shots yesterday. Now today he is crabby."

                                    </div>
                                    <div className="profile">
                                        {/* <img src="" alt=""> */}
                                        <span className="comment-from">-Father of Jaxson</span>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">Slide 2</div>
                            <div className="swiper-slide">Slide 3</div>
                        </div>

                        {/* <!-- If we need pagination --> */}
                        <div className="swiper-pagination"></div>

                        {/* <!-- If we need navigation buttons --> */}
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </div>
                </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
            <script src="main.js"></script>
        </body>

    )
};


export default Reviews;
