import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";
import benefitTwoImg2 from "../public/img/2.jpeg";
import benefit1Img from "../public/img/1.jpeg";

const benefitOne = {
  title: "Benefits by us",
  desc: "",
  image: benefit1Img,
  bullets: [
    {
      title: "Trust",
      desc: "We believe in building relationships based on trust. We take the confidentiality of your data and IPR very seriously and maintain formal agreements with each of our employees.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "On-Time Delivery",
      desc: "we only make promises we can deliver on. We boast of meeting our deadlines on all projects. In case we are facing delays, we keep you in the loop as soon as possible.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Top Talent ",
      desc: "Rigorously selected and professionally trained team, incentivized to be accountable, commercial and transparent in communication.      ",
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  title: "We offer more benefits",
  desc: "",
  image: benefitTwoImg2,
  bullets: [
    {
      title: "Best Practices      ",
      desc: "Over time, we have built best practices for productivity tools, project management, code delivery, and SDLC. Working together, each developer has help at their disposal.      ",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Easy Administration      ",
      desc: "We cover all contract work, payroll operations, leave management, employee retention, team setup and logistics.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Technical Support",
      desc: "Kwik Coders Technologies Co. LLC provides technical support for yours projects build by us according to your subscribed plan. ",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
