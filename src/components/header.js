import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function App() {
  // Create Ref element.
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["...I do Facebook Ads and SMM.", "...Part-time Web Developer.", "...And I'm an Aspiring Software Engineer.", "...Hit the button below to hire me."], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 60,
      smartBackspace: true,
      loop: true,
      showCursor: false,
      cursorChar: "|"
    });

    function Hire() {
      return (
       <section id="hire">
         <h1>Hire Section</h1>
       </section>
      );
     }
  
    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <div className="head">
        <h1>I'm Edo Charles</h1>
        {/* Element to display typing strings */}
        <span className="type" ref={el}></span>
        
        <p></p>

        <div className="btn-div">
          <div className="button">
            <button button type="button" className="button">
              <span className="button-text">Hire Me</span>
              <span className="button-icon"><ion-icon name="pencil"></ion-icon></span>
            </button>
          </div>
          
        </div>
       
          
        
      </div>
    </div>
  );

}