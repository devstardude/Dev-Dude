import React from 'react';
import BigIntro from '../Components/BigIntro';
import Header from '../Components/Header';
import TopButton from '../Components/TopButton';
import HeadSocialLinks from "../Components/HeadSocialLinks";
//import'./Landing.css';

const Landing = (props)=>{
    return (
      <section className="my-2 py-5 mx-md-2 px-md-2">
        <Header />
        <HeadSocialLinks />
        <BigIntro />
        <TopButton />
      </section>
    );
};

export default Landing ;