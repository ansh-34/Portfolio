import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../Assets/Ansh_Gupta_resume (4).pdf";
import "./ResumeDownloadButton.css";

function ResumeDownloadButton() {
  return (
    <a
      href={pdf}
      download="Ansh_Gupta_Resume.pdf"
      className="resume-download-btn"
      title="Download Resume"
    >
      <AiOutlineDownload size={24} />
    </a>
  );
}

export default ResumeDownloadButton;
