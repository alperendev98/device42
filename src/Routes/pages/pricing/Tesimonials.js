/**
 * Testimonial Slider Component
 */
import React, { Component } from "react";
import Slider from "react-slick";
import { connect } from 'react-redux';

// api
import api from 'api';

class TestimonialSlider extends Component {

  state = {
    testimonials: null
  }

  componentDidMount() {
    this.getTestimonials();
  }

  // get testimonials
  getTestimonials() {
    api.get('testimonials.js')
      .then((response) => {
        this.setState({ testimonials: response.data });
      })
      .catch(error => {
        // error handling
      })
  }

  render() {
    const { rtlLayout } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      rtl: rtlLayout
    };
    const { testimonials } = this.state;
    return (
      <div className="col-sm-12 col-md-10 mx-auto testimonial-slider">
        <Slider {...settings}>
          {testimonials && testimonials.map((testimonial, key) => (
            <div className="media" key={key}>
              <img src={testimonial.avatar} alt="user profile" className="rounded-circle mr-50 pull-left" width="137" height="137" />
              <div className="media-body">
                <p>“{testimonial.body}“</p>
                <div className="user-meta">
                  <span className="fw-bold d-block">{testimonial.name}</span>
                  <span className="small">{testimonial.designation}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

// map state to props
const mapStateToProps = ({ settings }) => {
  return settings;
}

export default connect(mapStateToProps)(TestimonialSlider);
