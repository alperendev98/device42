//Top Headlines widget

import React, { Component,Fragment } from 'react';
import { Badge } from 'reactstrap';
import Button from '@material-ui/core/Button';
import { Scrollbars } from 'react-custom-scrollbars';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// card component
import { RctCardFooter } from 'Components/RctCard';

//Data
const headlinesData = [
]

export default class TopHeadlines extends Component{
   render(){
      return (
         <Fragment>
            <Scrollbars className="rct-scroll" autoHeight autoHeightMin={100} autoHeightMax={571} autoHide>
               <ul className="top-headlines-widget list-unstyled mb-0">
                  {headlinesData && headlinesData.map((headline, key) =>
                     <li className="d-flex align-items-center justify-content-between p-20 border-bottom" key={headline.id}>
                        <div className="news-content d-flex">
                           <div className="img-wrap mr-3">
                              <img src={headline.imgUrl} alt="headlines" height="80" width="80" className="img-fluid" />
                           </div>
                           <div className="text-content">
                              <Badge color={headline.badgeColor} className="mb-2 d-inline-block">{headline.category}</Badge>
                              <h5 className="mb-2">{headline.title}</h5>
                              <div className="d-flex font-xs fw-light text-muted">
                                 <span className="mx-1">{headline.place}</span>
                                 <span className="mx-1">{headline.date}</span>
                              </div>
                           </div>
                        </div>
                        <div className="news-time w-10 text-right">
                           <span className="text-muted font-xs">{headline.time}</span>
                        </div>
                     </li>
                  )}
               </ul>
            </Scrollbars>
            <RctCardFooter customClasses="d-flex justify-content-between align-items-center rounded-bottom">
               <Button  className="text-white bg-success px-3 btn-xs"><IntlMessages id="widgets.addNew" /></Button>
            </RctCardFooter >
         </Fragment>
      )
   }
}