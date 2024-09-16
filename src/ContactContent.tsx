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
      <div className= "icons" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <SiGmail color="white" className="icon" />
        <CiCloudOn color="white" className="icon" />
        <CiInstagram color="white" className="icon" />
        <CiLinkedin  color="white" className="icon" />
      </div>
    </div>
  );
}

export default ContactContent;
