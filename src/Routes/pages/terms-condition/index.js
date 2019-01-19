/**
 * TermsCondition Page
 */
import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
// rct card box
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

export default class TermsCondition extends Component {
  render() {
    return (
      <div className="terms-wrapper p-20" >
        <Helmet>
          <title>Terms & Conditions</title>
          <meta name="description" content="Device42 Blank Page" />
        </Helmet>
        <div className="page-title d-flex align-items-center">
          <IconButton to="/" className="mr-15" aria-label="zmdi-arrow-left" component={Link}>
            <i className="zmdi zmdi-arrow-left"></i>
          </IconButton>
          <h2>Terms & Conditions</h2>
        </div>
        <div className="terms-conditions-rules">
          <RctCollapsibleCard customClasses="p-30">
            <p>Upon joining or viewing BookingKoala services or any of the services BookingKoala is a part of or provides, you are agreeing to be bound by the following terms and conditions (“Terms of Service”) The services that are offered by BookingKoala and it’s affiliates under the Terms of Service include but are not limited to numerous services and or products to help you scale your service type business also not limited to online services (“Online Services”) and or in person (“POS Services”) or the possibility of both. Any services offered by BookingKoala and its affiliates are referred to in these Terms of Services as the “Services”. Any and all new features or tools that are added to the current Services shall also be subject to the Terms of Service. You can view the most current version of the Terms of Service at any time at https: www.bookingkoala.com/terms-of-use/. BookingKoala will reserve the right to update and change the Terms of Service by posting updates and changes to the BookingKoala website.</p>
            <p>We advise to check our Terms of Service occasionally to see if any changes or updates were made that may impact you or your business. You must read, agree and accept all of the terms of conditions contained in this Terms of Service agreement, including BookingKoalas Privacy Policy before you can become a BookingKoala user. For best comprehension of BookingKoala and its services please read the “Terms of Service” completely to understand all legal ramifications. By using the BookingKoala site or any of it’s services, you are in agreement to these terms. Please read over these terms at various times for updates.</p>
          </RctCollapsibleCard>
          <RctCollapsibleCard customClasses="p-30">
            <h2 className="heading">1. Account Terms</h2>
            <ol>
              <li>You should be 18 years or more seasoned or if nothing else the time of dominant part in the locale where you live or from which you utilize this Service.</li>
              <li>To access and utilize the Services, you should enroll for a BookingKoala (“Account”) by giving your full legitimate name, current address, telephone number, a substantial email address, and some other data demonstrated as required. BookingKoala may dismiss your application for an Account, or remove a current Account, for any reason, in our sole caution.</li>
              <li>You recognize that BookingKoala will utilize the email address you give as the essential technique to correspondence.</li>
              <li>	You are in charge of keeping your password secure. BookingKoala can’t and won’t be at risk for any misfortune or harm from your inability to keep up the security of your Account and password.</li>
              <li>You are in charge of all movement and substance, for example, photographs, pictures, recordings, illustrations, composed substance, sound documents, code, data, or information transferred, gathered, created, put away, showed, appropriated, transmitted or displayed on or regarding your Account (“Materials”).</li>
              <li>A rupture or infringement of any term in the Terms of Service, including the AUP, as decided in the sole prudence of BookingKoala will bring about a quick end of your administrations.</li>
            </ol>
          </RctCollapsibleCard>
          <RctCollapsibleCard customClasses="p-30">
            <h2 className="heading">2. Account Activation</h2>
            <h3 className="nest-heading">2.1 BookingKoala Account</h3>
            <ol className="sub-order">
              <li>Subject to area 2.1.2, the individual agreeing to accept the Service will be the contracting party (“Account Owner”) for the reasons for our Terms of Service and will be the individual who is approved to utilize any comparing account we may give to the Account Owner regarding the Service.</li>
              <li>If you are agreeing to accept the Service for the benefit of your boss, your boss should be the Account Owner. On the off chance that you are agreeing to accept the Service for your manager, at that point you speak to and warrant that you have the specialist to tie your boss to our Terms of Service.</li>
            </ol>
            <h3 className="nest-heading">2.2 PayPal Express Checkout and BookingKoala Payments Accounts</h3>
            <ol className="sub-order">
              <li>Endless supply of agree to accept the Service, BookingKoala will make a PayPal Express Checkout account for your benefit, utilizing your email address. Contingent upon your area, BookingKoala may likewise make a BookingKoala Payments account for your sake.</li>
              <li>You recognize that PayPal Express Checkout as well as BookingKoala Payments will be your default installments gateway(s) and that it is your sole obligation as the Account Owner to actuate and keep up these records. In the event that you don’t wish to keep both of the installment accounts dynamic, it is your obligation to deactivate them. For the shirking of uncertainty, PayPal Express Checkout is a Third Party Service, as characterized in Section 16 of these Terms of Service.</li>
            </ol>
          </RctCollapsibleCard>
          <RctCollapsibleCard customClasses="p-30">
            <h2 className="heading">3. General Conditions</h2>
            <h3 className="nest-heading">You must read, agree with and accept all of the terms and conditions contained in these Terms of Service, including the AUP and the Privacy Policy before you may become a member of BookingKoala.</h3>
            <ol>
              <li>Technical support is provided to all Account holders and is only available via email and live chat.</li>
              <li>The Terms of Service should be represented by and translated as per the laws of the State of Illinois and the laws of United States relevant in that, without respect to standards of contentions of laws. The gatherings unalterably and genuinely submit to the elite ward of the courts of the State of Illinois as for any debate or case emerging out of or regarding the Terms of Service. The United Nations Convention on Contracts for the International Sale of Goods won’t matter to these Terms of Service and is thusly explicitly avoided.</li>
              <li>You recognize and concur that BookingKoala may revise these Terms of Service whenever by posting the pertinent corrected and repeated Terms of Service on BookingKoala’s site, accessible at https:www.bookingkoala.com/terms-of-use/ and such alterations to the Terms of Service are successful as of the date of posting. Your proceeded with utilization of the Services after the corrected Terms of Service are presented on BookingKoala’s site constitutes your consent to, and acknowledgment of, the changed Terms of Service. In the event that you don’t consent to any progressions to the Terms of Service, don’t keep on using the Service.</li>
              <li>You may not utilize the BookingKoala benefit for any unlawful or unapproved reason nor may you, in the utilization of the Service, abuse any laws in your locale (counting yet not restricted to copyright laws), the laws appropriate to you in your client’s ward, or the laws of Canada and the Province of Ontario. You will conform to every single pertinent law, guidelines and directions in your utilization of the Service.</li>
              <li>You concur not to recreate, copy, duplicate, offer, exchange or adventure any bit of the Service, utilization of the Service, or access to the Service without the express composed consent by BookingKoala.</li>
              <li>You should not buy web crawler or other pay per click catchphrases, (for example, Google AdWords), or area names that utilization BookingKoala or BookingKoala trademarks as well as varieties and incorrect spellings thereof.</li>
              <li>Questions about the Terms of Service ought to be sent to support@bookingkoala.com.</li>
              <li>You comprehend that your Materials (excluding Visa data), might be exchanged decoded and include (a) transmissions over different systems; and (b) changes to adjust and adjust to specialized necessities of interfacing systems or gadgets. MasterCard data is constantly encoded amid exchange over systems.</li>
              <li>You recognize and concur that your utilization of the Service, including data transmitted to or put away by BookingKoala, is administered by its protection approach.</li>
              <li>The Terms of Service might be accessible in dialects other than English. To the degree of any irregularities or clashes between these English Terms of Service and BookingKoala’s Terms of Service accessible in another dialect, the most current English adaptation of the Terms of Service at https:www.bookingkoala.com/terms-of-use/ will win.</li>
            </ol>
          </RctCollapsibleCard>
        </div>
      </div>
    );
  }
}
