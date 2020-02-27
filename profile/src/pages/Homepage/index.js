import React from 'react';
import './style.css'; 
import Navbar from '../../components/Navbar';
import Animation from '../../components/Animation';
import StickyHeader1 from '../../components/StickyHeader1';
import StickyHeader2 from '../../components/StickyHeader2';
import Stack from '../../components/Stack';
import Portfolio from '../../components/Portfolio';
import Footer from '../../components/Footer';

function Homepage() {

    return (
        <>
        <Navbar></Navbar>
        <Animation></Animation>
        <StickyHeader1></StickyHeader1>
        <Stack></Stack>
        <StickyHeader2></StickyHeader2>
        <Portfolio></Portfolio>
        <Footer></Footer>
        </>
    );
};

export default Homepage;