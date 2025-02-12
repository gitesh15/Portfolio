import React, { useState, useEffect } from "react";
import img1 from "../assets/img.png"; // Import your certificate image

const certificates = [
  {
    recipient: "John Doe",
    achievement:
      "For exceptional contributions in the field of Web Development and design.",
    date: "Issued on: February 12, 2025",
    image: img1, // Using the imported image
  },
  {
    recipient: "Jane Smith",
    achievement:
      "For pioneering innovations in Artificial Intelligence and Machine Learning.",
    date: "Issued on: January 25, 2025",
    image: "https://via.placeholder.com/500x300?text=Certificate+Image+2",
  },
  {
    recipient: "Samuel Green",
    achievement:
      "For outstanding academic achievements and breakthrough research.",
    date: "Issued on: December 15, 2024",
    image: "https://via.placeholder.com/500x300?text=Certificate+Image+3",
  },
];

const CertificatePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(""); // State to store the image for modal

  const openModal = (image) => {
    setModalImage(image); // Set the image that was clicked
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setModalImage(""); // Reset modal image
  };

  useEffect(() => {
    const styles = `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
      }

      body {
        background-color: #101010;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        padding: 0;
        color: #f1f1f1;
      }

      .certificate-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 30px;
        margin-top: 40px;
      }

      .certificate-container {
        width: 320px;
        height: 520px;
        border-radius: 20px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        overflow: hidden;
        transition: all 0.3s ease-in-out;
        position: relative;
        background: linear-gradient(145deg, #444444, #222222); /* Soft dark gradient */
      }

      .certificate-container:hover {
        transform: scale(1.05);
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
      }

      .certificate-body {
        position: absolute;
        top: 40px;
        bottom: 50px;
        left: 20px;
        right: 20px;
        padding: 20px;
        background: rgba(0, 0, 0, 0.7);
        border-radius: 15px;
        z-index: 0;
      }

      .recipient-name {
        font-size: 2em;
        font-weight: bold;
        color: #ff69b4; /* Soft pink */
            margin-bottom: 33px;
    margin-top: 96px;
        text-transform: uppercase;
        letter-spacing: 2px;
        text-align: center;
      }

      .achievement {
        font-size: 1.1em;
        color: #ddd;
        margin-bottom: 20px;
        text-align: center;
        font-style: italic;
      }

      .date {
        font-size: 1em;
        color: #777;
        text-align: center;
      }

      .certificate-image {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        border: 5px solid #fff;
        background-size: cover;
        background-position: center;
        cursor: pointer;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
      }

      .modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: ${isModalOpen ? "flex" : "none"};
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 999;
      }

      .modal-content {
        position: relative;
        background: #1d1d1d;
        padding: 20px;
        border-radius: 15px;
        max-width: 90%;
        max-height: 80%;
        overflow: auto;
      }

      .close-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 2em;
        color: #fff;
        background: red;
        border: none;
        padding: 10px;
        border-radius: 50%;
        cursor: pointer;
      }
    `;
    const styleElement = document.createElement("style");
    styleElement.type = "text/css";
    styleElement.innerHTML = styles;

    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, [isModalOpen]);

  return (
    <div>
      <div className="certificate-wrapper">
        {certificates.map((certificate, index) => (
          <div key={index} className="certificate-container">
            <div className="certificate-body">
              <h2 className="recipient-name">{certificate.recipient}</h2>
              <p className="achievement">{certificate.achievement}</p>
              <p className="date">{certificate.date}</p>
            </div>

            <div
              className="certificate-image"
              style={{ backgroundImage: `url(${certificate.image})` }}
              onClick={() => openModal(certificate.image)} // Open modal when image is clicked
            ></div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>
              {" "}
              &times;{" "}
            </button>
            <img
              src={modalImage}
              alt="Full Certificate"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificatePage;
