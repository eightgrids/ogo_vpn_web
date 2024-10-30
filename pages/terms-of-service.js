// pages/terms.js

import React from "react";
import LayoutBasic from "../components/Layout/LayoutBasic";

const TermsOfService = () => {
  const styles = {
    h1: {
        color: '#333',
        marginBottom: '20px',
        fontSize: '2.5rem',
    },
    h2: {
        color: '#4CAF50',
        marginBottom: '15px',
        fontSize: '2rem',
    },
    h3: {
        color: '#4CAF50',
        marginBottom: '10px',
        fontSize: '1.5rem',
    },
    p: {
        marginBottom: '15px',
        color: '#555',
        fontSize: '1rem',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
        padding: '20px',
        backgroundColor: '#f5f5f5',
    },
    header: {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '10px 0',
        textAlign: 'center',
    },
    title: {
        margin: 0,
    },
  }

  return (
    <LayoutBasic>
      <h1 style={styles.h1}>Terms of Service</h1>
      <p style={styles.p}><strong>Effective Date:</strong> November 1, 2024</p>

      <h2>Introduction</h2>
      <p>
        These Terms of Service (“Terms”) govern your access to and use of OgoVPN,
        provided by <strong>Eightgrid Limited</strong>, a company based in the United Kingdom.
        By downloading, accessing, or using OgoVPN on Android or iOS, you acknowledge and
        agree to these Terms, as well as our Privacy Policy. If you do not agree, please do not use
        our services.
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By using OgoVPN, you confirm you are of legal age or have obtained the
        consent of a legal guardian. Use of our services implies your acceptance
        of these Terms and our Privacy Policy, including all updates and
        amendments.
      </p>

      <h2>2. Modifications to Terms</h2>
      <p>
        We may update these Terms at any time. If changes are made, we will
        post the new version on our website or app. Continued use of OgoVPN
        after updates indicates acceptance of the revised Terms.
      </p>

      <h2>3. Services Provided</h2>
      <p>
        OgoVPN provides Virtual Private Network (VPN) services aimed at securing your online
        data and privacy. By using OgoVPN, you agree to not misuse our services
        for illegal activities, including but not limited to data theft, unauthorized access,
        or any violations of applicable laws in your jurisdiction.
      </p>

      <h2>4. User Conduct</h2>
      <p>
        You agree not to misuse our Services or engage in any activities that
        may harm the functionality of the VPN or interfere with other users. Any
        misuse of the Services, including, but not limited to, spam, hacking,
        or unauthorized access attempts, will result in immediate termination of
        your access.
      </p>

      <h2>5. Intellectual Property Rights</h2>
      <p>
        All content, trademarks, logos, and intellectual property associated with OgoVPN are
        owned by Eightgrid Limited. No rights are granted to use any of our intellectual property
        except as specifically stated in these Terms.
      </p>

      <h2>6. Subscription and Payment Terms</h2>
      <p>
        OgoVPN offers free and paid VIP services. VIP services grant access to premium servers
        and extended features. Payment for VIP services is processed through third-party providers
        and is subject to their terms. Refunds are only offered in cases outlined by local
        consumer protection laws.
      </p>

      <h2>7. Privacy and Data Collection</h2>
      <p>
        Our collection and use of personal information is detailed in our Privacy Policy. By using
        OgoVPN, you agree to the terms of our Privacy Policy.
      </p>

      <h2>8. Disclaimer of Warranties</h2>
      <p>
        OgoVPN is provided "as is" without any warranty or guarantee of availability, performance, or
        effectiveness for any specific purpose. We are not responsible for any loss resulting from
        downtime, errors, or network issues.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        Eightgrid Limited is not liable for any indirect, incidental, special, or consequential damages,
        including, but not limited to, data loss, loss of profits, or interruptions to service.
      </p>

      <h2>10. Governing Law</h2>
      <p>
        These Terms are governed by and construed under the laws of the United Kingdom.
        Any disputes will be resolved in the courts of the United Kingdom, unless stated otherwise
        under local laws.
      </p>

      <h2>11. Contact Information</h2>
      <p>
        For questions or concerns regarding these Terms, contact us at: <a href="mailto:support@ogovpn.com">support@ogovpn.com</a>.
      </p>
    </LayoutBasic>
  );
};

export default TermsOfService;
