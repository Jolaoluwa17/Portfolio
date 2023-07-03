import React, { useState } from "react";
import useMeasure from "react-use-measure";
import { useSpring, animated } from "@react-spring/web";
import "./skillBar2.css";

export const SkillBar2 = () => {
  const [open, toggle] = useState(false);
  const [ref, { width }] = useMeasure();
  const props = useSpring({
    width: open ? width : 0,
    config: {
        clamp: true,
        max: 100
      }
  });

  const handleMouseEnter = () => {
    toggle(true);
  };

  const handleMouseLeave = () => {
    toggle(false);
  };

  return (
    <div className="skill-bar-root">
      <div className="container">
        <div
          ref={ref}
          className="main"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          HTRML
          <animated.div className="fill" style={props} />
          <animated.div className="content">
            {props.width.to((x) => x.toFixed(0))}
          </animated.div>
        </div>
      </div>
    </div>
  );
};
