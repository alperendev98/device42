//Top News Widget

import React, { Component } from 'react'
import Slider from "react-slick";

//Helper
import { textTruncate} from "Helpers/helpers";


const newsData = [
]

export default class TopNews extends Component {
   state = {
      settings1: undefined,
      settings2: undefined
   }
   componentDidMount() {
      this.setState({
         settings1: this.settings1,
         settings2: this.settings2
      })
   }
   render() {
      const settings1 = {
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: false,
         fade: true,
         adaptiveHeight: true,
         ref: (slider) => (this.settings1 = slider),
         asNavFor: this.state.settings2,
      };
      const settings2 = {
         slidesToShow: 4,
         slidesToScroll: 1,
         dots: false,
         autoplay: true,
         speed: 2000,
         infinite: true,
         cssEase: "linear",
         focusOnSelect: true,
         ref: (slider) => (this.settings2 = slider),
         asNavFor: this.state.settings1,
         rtl: false,
         adaptiveHeight: true,
         responsive: [
            {
               breakpoint: 1200,
               settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
               }
            },
            {
               breakpoint: 991,
               settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
               }
            }
         ]
      };
      return (
         <div className="top-news-wrap rct-block">
            <Slider {...settings1} className="main-slider-wrap">
               {newsData && newsData.map((news, key) => (
                  <div key={news.id} className="main-slider-item overlay-wrap">
                     <img src={news.newsSrc} alt="top-news" height="300" width="700" className="img-fluid  rounded-top"/>
                     <div className="overlay-content d-flex justify-content-end align-items-end rounded-top">
                        <div className="overlay-holder p-3 mb-50 w-50">
                           <h4 className="mb-2 text-white">{news.newsTitle}</h4>
                           <div className="meta-info d-flex align-items-center font-xs text-white">
                              <span className="mx-2">
                                 <i className="zmdi zmdi-thumb-up mr-2"></i>
                                 <span>{news.likes}</span>
                              </span>
                              <span className="mx-2">
                                 <i className="zmdi zmdi-eye mr-2"></i>
                                 <span>{news.views}</span>
                              </span>
                              <span className="mx-2">
                                 <i className="zmdi zmdi-comment-text mr-2"></i>
                                 <span>{news.comments}</span>
                              </span>
                           </div>
                           <p className="mb-0 mt-2 font-xs text-white">{textTruncate(news.newsContent,100)}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </Slider>
            <Slider {...settings2} className="slider-btn-wrap">
               {newsData && newsData.map((news, key) => (
                  <div key={news.id} className="slider-btn my-2">
                     <img src={news.newsSrc} alt="top-news" height="90" width="175" className="img-fluid mx-auto" />
                  </div>
               ))}
            </Slider>
         </div>
      )
   }
}
