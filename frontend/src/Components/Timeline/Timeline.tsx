import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { styles } from "../style";
import { timelineData } from "../data";

import "./Timeline.scss";


interface TimelineCardProps {
  timeline: {
    title: string;
    date: string;
    iconBg: string;
    point?: string; // Assuming 'point' is a string, modify as needed
  };
  position?: string;
}



const TimelineCard: React.FC<TimelineCardProps> = ({ timeline,position }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <VerticalTimelineElement
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={timeline.date}
      iconStyle={{ background: timeline.iconBg }}
      icon={<div></div>}
      position={position}
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{timeline.title}</h3>
        <p className="text-secondary text-[16px] font-semibold"></p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {timeline.point}
      </ul>
    </VerticalTimelineElement>
  </motion.div>
);

const Timeline: React.FC = () => {
  return (
    <div className="timeline-container">
      <h2 className={styles.sectionHeadText}>Timeline</h2>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {timelineData.map((timeline, index) => (
            <TimelineCard key={index} timeline={timeline} position={index % 2 === 0 ? "left" : "right"} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Timeline;
