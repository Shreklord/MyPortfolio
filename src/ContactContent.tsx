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
      <a href="mailto:Anthonygoldhammer03@gmail.com" className="icon" target="_blank" rel="noopener noreferrer">
        <SiGmail color="white" className="icon" />
      </a>
      <a href="mailto:Anthony.goldhammer@icloud.com" className="icon" target="_blank" rel="noopener noreferrer">
        <CiCloudOn color="white" className="icon" />
      </a>
      <a href="https://www.instagram.com/anthony.gold3?igsh=MTZlNWlweTMzMW84dA%3D%3D&utm_source=qr" className="icon" target="_blank" rel="noopener noreferrer">
        <CiInstagram color="white" className="icon" />
      </a>
      <a href="https://www.linkedin.com/in/anthony-goldhammer-0bb7aa2b5" className="icon" target="_blank" rel="noopener noreferrer">
        <CiLinkedin  color="white" className="icon" />
      </a>
      </div>
    </div>
  );
}

export default ContactContent;
