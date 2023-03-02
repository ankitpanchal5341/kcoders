import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import React, { useState, useEffect } from "react";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  const [width, setWidth] = useState(0)

  React.useEffect(() => {
    setWidth(window.innerWidth)
  }, [])
  return (
    <div style={{ padding: width > 780 ? "0% 5%" : 0 }}>
      <Head>
        <title>Kwik Coders </title>
        <meta
          name="description"
          content="KWIK CODERS TECHNOLOGIES CO. L.L.C"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Kwik Coders Technologies Co. LLC Benefits"
        title=" Why you should choose us ?">
        We are a team of young, talented, and dynamic engineers. Kwik Coders Technologies understand that you want to get your project executed on-time, with full transparency, and without any drama
        .
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Why you need a website ?"
        title="We know how to fullfil your needs.">
        {/* This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don't forget to add one. Just like this. */}
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our Clients said">
        Testimonails is a great way to increase the brand trust and awareness.
        {/* Use this section to highlight your popular customers. */}
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </div>
  );
}
