import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiCloudOn } from "react-icons/ci";
import { SiGmail } from "react-icons/si";
function ContactContent() {
  return (
    <div className="contact_column">
      <div className="contact_row">
        <h1 className="contact_header">Contact</h1>
      </div>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap:"30px", paddingTop:"50px", paddingLeft:"350px", position:"relative" }}>
        <SiGmail size={390} color="white" />
        <CiCloudOn size={470} color="white" />
        <CiInstagram size={400} color="white" />
        <CiLinkedin size={400} color="white" />
      </div>
    </div>
  );
}

export default ContactContent;
