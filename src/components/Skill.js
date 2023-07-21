import React from "react";
import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import "./Skill.css";
import { motion } from "framer-motion";
import { BsStars } from "react-icons/bs";

const Skill = (Props) => {
  const { title, content } = Props;
  const [show, setShow] = useState(false);
  return (
    <div>
      <div>
        {/* <div className="icon">{show ? <BsStars style={{fontSize:"20"}}/> : ""}</div> */}

        <motion.div
          className="accordion"
          animate={{ x: show ? 20 : 0 }}
          transition={{ type: "tween", duration: 0.01 }}
          whileInView={{ scale: 1.05 }}
        >
          <div>
            <div className="main-heading" onClick={() => setShow(!show)}>
              <strong>{title}</strong>
              {show ? <AiOutlineUp /> : <AiOutlineDown />}
            </div>
            {show && (
              <div className="content2">
                <ul>
                  {content.map((item) => {
                    return <li>{item}</li>;
                  })}
                </ul>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default Skill;
