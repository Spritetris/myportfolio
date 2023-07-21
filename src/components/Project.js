import React from "react";
import "./Project.css";
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "react-modal";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Project(Props) {
  const { title, title2, content, img } = Props;
  const [show, setShow] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-30%",
      transform: "translate(-50%, -50%)",
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <motion.div className="flex2" whileInView={{ scale: 1.05 }}>
        <Carousel showThumbs={false} className="Carousel" showIndicators={false} swipeable={true}>
          {img.map((item) => {
            return (
              <div className="img-box" onClick={openModal}>
                <img src={item}></img>
              </div>
            );
          })}
        </Carousel>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <Carousel showThumbs={false} className="Carousel2" swipeable={true}>
            {img.map((item) => {
              return (
                <div>
                  <img src={item}></img>
                </div>
              );
            })}
          </Carousel>
        </Modal>

        <div className="desc">
          <div>
            <h2>{title}</h2>
            <p>{title2}</p>
          </div>
          {show ? (
            <>
              <ul>
                {content.map((data) => {
                  return <li>{data}</li>;
                })}
              </ul>
              <div style={{ display: "flex", justifyContent: "end" }}>
                <button onClick={() => setShow(!show)} className="btn">
                  Less
                </button>
              </div>
            </>
          ) : (
            <div className="btn-more">
              <motion.button
                onClick={() => setShow(!show)}
                whileHover={{ scale: 1.2 }}className="btn"
              >
                More
              </motion.button>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default Project;
