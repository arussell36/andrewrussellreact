import React from 'react';
import './style.css';

function Footer() {



    return (
        <>
            <section class="foot bg1">
                {/* HOLDS IMG LINKS OUT TO OTHER SITES */}
                <div>
                    <a href="https://www.linkedin.com/in/andrew-russell-9b263a186/" target="blank"><img class="footlink" alt="LinkedIn Link" src={require("./img/linkedin.png")} /></a>
                    <a href="https://github.com/arussell36" target="blank"><img class="footlink" alt="GitHub Link" src={require("./img/github.gif")} /></a> 
                </div>

                <div class="con4 raleway fc3">
                    2020 Andrew Russell • Full Stack Web Developer • Chicago IL.
                </div>
            </section>
        </>
    );
};

export default Footer;