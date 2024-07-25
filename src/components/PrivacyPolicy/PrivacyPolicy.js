import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div>
      <section>
        <div className='container-fluid'>
          <div className="privacymain container-fluid">
            <p className="privacyhead">Privacy Policy</p>
            <div className="MiddlePart"></div>
            <div className="privacyletters">
              This privacy statement outlines the confidentiality procedures adopted by Shavinya Technologies LLP
              Operated by mytradejournal ("us", "we", or "our"), www.mytradejournal.in is committed to protecting your privacy
              and personal data.
              This page elucidates our policies concerning the gathering, utilization, and disclosure of personal information
              when you engage with our Service, along with the options available to you regarding that data.
              Your data is employed to enhance and furnish the Service. By utilizing the Service, you consent to the
              collection and utilization of information as outlined in this policy.

              <p>This privacy notice is exclusively applicable to information collected through this website. It will apprise
                you of the following: <br />
                1. The nature of personally identifiable information gathered from you via the website, its utilization, and
                the parties with whom it might be shared. <br />
                2. The choices at your disposal concerning the usage of your data. <br />
                3. The security measures in effect to safeguard against the misuse of your information. <br />
                4. The process for rectifying any inaccuracies in the information. <br />
              </p>

              <h6 className="privacypart2">Information Collection, Utilization, and Sharing:</h6>
              <p>We are the sole proprietors of the information gathered on this site. We solely access/collect information
                that you voluntarily provide when using the site. Under no circumstances will we sell or lease this
                information to any party.
                Your information is utilized to render the services of the site. We refrain from sharing your information
                with any third party outside our organization, unless it is imperative to fulfill your request.
                Unless you instruct otherwise, we may contact you via email in the future to inform you about promotions,
                new products or services, or revisions to this privacy policy.
                We compile statistical data on web traffic through a third-party web analytics service; this may involve the
                use of a cookie on your device, however, no user-identifiable information is ever shared with this third
                party, apart from "standard" web analytics such as IP address, browser, etc.
                Under no circumstances will your individual data be disclosed to any entity, nor will any personally
                identifiable information be shared or linked with any of the data.
              </p>

              <h6 className="part2">Your Access to and Control Over Information:</h6>
              <p>You have the prerogative to opt out of any future communications from us at any time. You can execute the
                following actions at any time by contacting us via email at support@tradezella.com: <br />
                • Request the deletion of any data we possess about you. <br />
                • Express any concerns you may have regarding our use of your data.
              </p>

              <h6 className="part2">Security</h6>
              <p>We implement precautions to safeguard your information. When you submit sensitive information via the
                website, it is protected both online and offline.
                Any sensitive information we collect (such as your trade data) is encrypted and securely transmitted to us.
                Should you believe that we are not adhering to this privacy policy, please promptly contact us via email at
                support@mytradejournal.in.
              </p>

              <h6 className="part2">Refunds and Cancellations</h6>
              <p>mytradejournal operates a strict no-refund policy after sign-up. All payments made are considered final and
                non-refundable.
                We are not liable for ongoing subscriptions if a customer forgets to cancel their account. It is the
                customer's responsibility to confirm the cancellation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
