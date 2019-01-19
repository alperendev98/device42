//Twitter Feeds v2 widget

import React, { Component, Fragment } from 'react';
import { Badge } from 'reactstrap';
import Slider from "react-slick";

const twitterFeeds = [
   {
      id: 1,
      userAvatar: require("assets/avatars/user-1.jpg"),
      tweets: "Contrary to popular belief"
   },
   {
      id: 2,
      userAvatar: require("assets/avatars/user-1.jpg"),
      tweets: "Contrary to popular belief"
   },
   {
      id: 3,
      userAvatar: require("assets/avatars/user-1.jpg"),
      tweets: "Contrary to popular belief"
   }
]

export default class TwitterFeedsV2 extends Component {
   render() {
      const settings = {
         dots: false,
         infinite: true,
         speed: 500,
         arrows:false,
         slidesToShow: 1,
         slidesToScroll: 1,
         autoplay: false,
      };
      return (
         <Fragment>
            <Slider {...settings}>
               {twitterFeeds && twitterFeeds.map((twitter, key) => (
                  <div className="twitter-content" key={twitter.id}>
                     <div className="avatar-wrap d-flex align-itmes-start justify-content-center">
                        <div className="overlay-wrap">
                           <img src={twitter.userAvatar} alt="user-avatar" height="80" width="80" className="img-fluid rounded-circle" />
                           <div className="overlay-content">
                              <Badge color="primary" className="p-0 rounded-circle d-flex align-items-center justify-content-center">
                                 <i className="zmdi zmdi-twitter"></i>
                              </Badge>
                           </div>
                        </div>
                     </div>
                     <div className="text-center px-20">
                        <p className="mb-0" dangerouslySetInnerHTML={{ __html: twitter.tweets }} />
                     </div>
                  </div>
               ))}
            </Slider>
         </Fragment>
      )
   }
}
