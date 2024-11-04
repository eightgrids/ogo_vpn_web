// pages/privacy.js

import React from "react";
import LayoutBasic from "../components/Layout/LayoutBasic";

const PrivacyPolicy = () => {

  return (
    <LayoutBasic>
      <h1 >Privacy Policy</h1>
      <p><strong>Effective Date:</strong> November 1, 2024</p>

      <h2>Introduction</h2>
      <p>
        This Privacy Policy outlines how <strong>Eightgrid Limited</strong>, the operator of OgoVPN,
        collects, uses, and protects your personal information. We are committed to
        safeguarding your privacy in compliance with global standards, including GDPR and CCPA.
      </p>

      <h2>1. Data We Collect</h2>
      <h3>General Information</h3>
      <p>
        OgoVPN collects minimal information needed to provide VPN services. This may include
        device ID and operating system
        We do not store IP addresses or browsing histories.
      </p>

      <h3>Account Information</h3>
      <p>
        For VIP services, we may collect an email address for account management.
        You may use a pseudonym if desired.
      </p>

      <h3>Connection Logs</h3>
      <p>
        We retain temporary connection logs, such as timestamps and protocol types,
        solely to monitor service quality. These logs are deleted after 48 hours.
      </p>

      <h2>2. Payment Information</h2>
      <p>
        Payment details, including subscription status and transaction IDs, are stored
        for verification purposes. We do not store credit card information.
      </p>

      <h2>3. Use of Cookies</h2>
      <p>
        Cookies are used on our website to store preferences. For more information, see
        our Cookie Policy.
      </p>

      <h2>4. Data Security</h2>
      <p>
        OgoVPN uses strong encryption and data protection practices to safeguard your
        information from unauthorized access, alteration, or disclosure.
      </p>

      <h2>5. Your Rights</h2>
      <h3>Access, Modification, and Deletion</h3>
      <p>
        You have the right to access, correct, or delete your personal information.
        Requests can be made by contacting us at <a href="mailto:support@ogovpn.com">support@ogovpn.com</a>.
      </p>

      <h3>Data Portability</h3>
      <p>
        If required, we can provide your data in a portable format (e.g., CSV) within 45 days.
      </p>

      <h2>6. Country-Specific Regulations</h2>
      <h3>European Union</h3>
      <p>
        OgoVPN complies with GDPR and provides full rights to users in the EU, including the
        right to be forgotten, data portability, and restriction of processing.
      </p>

      <h3>California (CCPA)</h3>
      <p>
        Under CCPA, we provide California residents with rights to access, delete, or restrict
        data usage, and we do not sell personal data.
      </p>

      <h3>Nevada</h3>
      <p>
        OgoVPN does not sell personal data of any users, including Nevada residents.
      </p>

      <h2>7. Children’s Data</h2>
      <p>
        Our services are not intended for anyone under 18. We do not knowingly collect data from minors.
      </p>

      <h2>8. Changes to Privacy Policy</h2>
      <p>
        This Privacy Policy may be updated periodically. Continued use of our Services after updates
        constitutes acceptance of the revised policy.
      </p>

      <h2>Contact Us</h2>
      <p>
        For any questions or concerns, contact us at: <a href="mailto:support@ogovpn.com">support@ogovpn.com</a>.
      </p>
    </LayoutBasic>
  );
};

export default PrivacyPolicy;
