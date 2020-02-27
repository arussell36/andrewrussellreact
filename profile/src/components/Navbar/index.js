import React from 'react';
import './style.css';

function Navbar() {




    return (
        <>
        <section>
            <nav class="nav bg1">
            {/* left side icon location */}
            <div class="icon marker fc1">
            </div>

            {/* right side tabs location */}
            <div class="navL">
            <div class="navB fc1 raleway">About Me</div>
            <a class="navB fc2 raleway" href="#experience">Experience</a>
            <a class="navB fc2 raleway" href="#portfolio">Portfolio</a>
            </div>

            </nav>
            </section>
        </>
    );
};

export default Navbar;