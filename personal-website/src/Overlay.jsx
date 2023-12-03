import React, { forwardRef } from "react" //allows a component to pass down a ref to one of its children

const Overlay = forwardRef((props, ref) => (
  <div
    className="scroll">
    <div style={{ height: "400vh" }}>
      <div className="dot">
        <h1>Welcome</h1>
        Welcome to the Shire, the peaceful and picturesque land where my journey begins. Just as Frodo Baggins set out from this idyllic place, my basic personal information forms the tranquil foundation of my story.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>Education</h1>
        Embark on a journey to unlock the treasures of knowledge and growth, much like the key to Erebor. My education serves as the key, propelling me toward new horizons equipped with wisdom and insights.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>Skills</h1>Behold the staff of Gandalf, symbolizing the power and depth of my skills. Like Gandalf, my expertise is a guiding force, combining knowledge and experience to overcome challenges.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>Projects</h1>Venture into the realm of personal projects, where each endeavor is a crafted arrow from Lothlórien or a strategic plan from Isengard. These projects showcase my creativity, precision, and ability to tackle challenges.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>Work Experience</h1>As we approach the symbolic Mount Doom, representing challenges and triumphs, behold my professional journey tied together by the One Ring. Each experience, like the ring, adds a unique facet to my story.
      </div>
    </div>
  </div>
))

export default Overlay
