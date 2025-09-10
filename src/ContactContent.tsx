
import { useState } from "react";

import { CiInstagram, CiLinkedin, CiCloudOn } from "react-icons/ci";
import { SiGmail } from "react-icons/si";
import { BiCopy, BiCheck } from "react-icons/bi";

function ContactContent() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const contactMethods = [
    {
      name: "Gmail",
      icon: <SiGmail />,
      href: "mailto:Anthonygoldhammer03@gmail.com",
      email: "Anthonygoldhammer03@gmail.com",
      color: "#EA4335",
      description: "Primary email",
    },
    {
      name: "iCloud",
      icon: <CiCloudOn />,
      href: "mailto:Anthony.goldhammer@icloud.com",
      email: "Anthony.goldhammer@icloud.com",
      color: "#007AFF",
      description: "Alternative email",
    },
    {
      name: "LinkedIn",
      icon: <CiLinkedin />,
      href: "https://www.linkedin.com/in/anthony-goldhammer-0bb7aa2b5",
      color: "#0A66C2",
      description: "Professional network",
    },
    {
      name: "Instagram",
      icon: <CiInstagram />,
      href: "https://www.instagram.com/anthony.gold3?igsh=MTZlNWlweTMzMW84dA%3D%3D&utm_source=qr",
      color: "#E4405F",
      description: "Personal updates",
    },
  ];

  const copyToClipboard = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return (
    <div className="contact_column">
      <div className="contact_header_section">
        <h1 className="contact_header">Get In Touch</h1>
        <p className="contact_subtitle">
          Let's connect and discuss opportunities, projects, or just have a
          friendly chat!
        </p>
      </div>

      <div className="contact_grid">
        {contactMethods.map((method, index) => (
          <div key={index} className="contact_card">
            <div className="contact_card_header">
              <div
                className="contact_icon_wrapper"
                style={{
                  backgroundColor: `${method.color}15`,
                  borderColor: `${method.color}30`,
                }}
              >
                <span className="contact_icon" style={{ color: method.color }}>
                  {method.icon}
                </span>
              </div>
              <div className="contact_info">
                <h3 className="contact_method_name">{method.name}</h3>
                <p className="contact_description">{method.description}</p>
              </div>
            </div>

            <div className="contact_actions">
              {method.email && (
                <div className="email_section">
                  <code className="email_display">{method.email}</code>
                  <button
                    className="copy_button"
                    onClick={() => copyToClipboard(method.email)}
                    title="Copy email address"
                  >
                    {copiedEmail === method.email ? (
                      <>
                        <BiCheck /> Copied!
                      </>
                    ) : (
                      <>
                        <BiCopy /> Copy
                      </>
                    )}
                  </button>
                </div>
              )}

              <a
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact_button"
                style={{ backgroundColor: method.color }}
              >
                <span className="contact_button_icon">{method.icon}</span>
                <span>
                  {method.email
                    ? "Send Email"
                    : method.name === "LinkedIn"
                    ? "Connect"
                    : "Follow"}
                </span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="contact_footer">
        <div className="availability_status">
          <div className="status_indicator available"></div>
          <span>Available for opportunities</span>
        </div>
        <p className="contact_note">
          Currently seeking internship and full-time opportunities in software
          development. Feel free to reach out – I'd love to hear from you!
        </p>
      </div>
    </div>
  );
}

export default ContactContent;
