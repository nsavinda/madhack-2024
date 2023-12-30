import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../style";
import { timelineData } from "../data";

import "./Timeline.scss";

interface TimelineCardProps {
  timeline: {
    title: string;
    date: string;
    iconBg: string;
    point?: string;
  }
}

const TimelineCard: React.FC<TimelineCardProps> = ({ timeline }) => (
  <VerticalTimelineElement
  
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={timeline.date}
    // dateClassName="data"
    iconStyle={{ background: timeline.iconBg }}
    icon={
      <div >

      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{timeline.title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {/* {timeline.company_name} */}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
     
       
          {timeline.point}
   
    </ul>
  </VerticalTimelineElement>
);

const Timeline: React.FC = () => {
  return (
    <div>
      <motion.div>
        {/* <p className={styles.sectionSubText}>what i have done so far</p> */}
        <h2 className={styles.sectionHeadText}>TImeline </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {timelineData.map((timeline, index) => (
            <TimelineCard key={index} timeline={timeline} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Timeline;
