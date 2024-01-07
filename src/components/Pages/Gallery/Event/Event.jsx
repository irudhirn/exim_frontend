import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Wrapper from "../../../UI/Wrapper";

import EventPopup from "./EventPopup";

import classes from "./Event.module.css";

// prettier-ignore
export const GALLERY_IMAGES = [
  {id: 'e1', name: 'Event 1', img: 'event2.webp',  relatedImgs: ['event2.webp', 'event1.webp', 'event3.webp', 'event4.webp',], desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, facere quos saepe dolore odio tempora repellat iure.',},
    {id: 'e2', name: 'Event 2', img: 'event5.webp',  relatedImgs: ['event5.webp', 'event6.webp', 'event7.webp', 'event8.webp',], desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis rem nobis quos harum nulla odit pariatur perferendis consequatur iusto.'},
    {id: 'e3', name: 'Event 3', img: 'event9.webp',  relatedImgs: ['event9.webp', 'event10.webp', 'event11.webp', 'event12.webp',], desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum aliquid, voluptate libero a assumenda excepturi minus accusamus.'},
    {id: 'e4', name: 'Event 4', img: 'event13.webp',  relatedImgs: ['event13.webp', 'event14.webp', 'event15.webp', 'event16.webp',], desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis rem nobis quos harum nulla odit pariatur perferendis consequatur iusto.'},
    {id: 'e5', name: 'Event 5', img: 'event17.webp',  relatedImgs: ['event17.webp', 'event18.webp', 'event19.webp', 'event20.webp',], desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum aliquid, voluptate libero a assumenda excepturi.'},
    {id: 'e6', name: 'Event 6', img: 'event21.webp',  relatedImgs: ['event21.webp', 'event22.webp', 'event23.webp', 'event24.webp',], desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis rem nobis quos harum nulla odit pariatur perferendis.'},
    {id: 'e7', name: 'Event 7', img: 'event25.webp',  relatedImgs: ['event25.webp', 'event26.webp', 'event27.webp', 'event28.webp',], desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, facere quos saepe dolore odio tempora repellat iure.'},
    {id: 'e8', name: 'Event 8', img: 'event29.webp',  relatedImgs: ['event29.webp', 'event30.webp', 'event31.webp', 'event32.webp',], desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum aliquid, voluptate libero a assumenda excepturi minus.'},
  ];

// prettier-ignore
const DUMMY_EVENTS = [
  { id: 'e1', name: 'Celebrate Independence Day with Joy!', imgs: ['15-aug-2022-1.jpg', '15-aug-2022-2.jpg', '15-aug-2022-3.jpg', '15-aug-2022-4.jpg'], desc: "On the 15th of August, we come together to commemorate the day our nation declared its freedom. It's a time to reflect on the sacrifices of our forefathers and rejoice in the progress we have made as a united nation.", },
  { id: 'e2', name: 'Come Together to Celebrate Unity on 26th Jan!', imgs: ['26-jan-1.jpg', '26-jan-2.jpg', '26-jan-3.jpg', '26-jan-4.jpg',], desc: "We are thrilled to invite you to join us in celebrating the spirit of unity on the 26th of August. On this special day, we commemorate the diversity that binds us together as a society and acknowledge the strength we derive from embracing our differences.", },
  { id: 'e3', name: 'Celebrating Employee Appreciation at Eximburg: Honoring our Stellar Team!', imgs: ['appreciation-1.jpeg', 'appreciation-2.jpeg', 'appreciation-3.jpeg', 'appreciation-4.jpeg',], desc: "We are thrilled to dedicate this post to express our heartfelt appreciation for the exceptional employees at Eximburg! 🌟✨ Your dedication, hard work, and unwavering commitment have been instrumental in our continued success.\nAt Eximburg, we believe in fostering a culture of appreciation, recognizing the outstanding contributions of our team members, and creating an environment where everyone feels valued and supported. Our recent Employee Appreciation event was a perfect opportunity to express our gratitude and celebrate the incredible talent within our organization.", },
  { id: 'e4', name: 'Celebrating Birthdays at Eximburg: A Joyous Occasion!', imgs: ['birthday-celebration-1.jfif', 'birthday-celebration-2.jpg', 'birthday-celebration-3.jpeg', 'birthday-celebration-4.jpeg',], desc: "We are delighted to share the joyous celebration of birthdays at Eximburg! 🎉✨ It was a time filled with happiness, surprises, and heartfelt moments as we honored and celebrated our team members on their special day.\nAt Eximburg, we believe in creating a positive and inclusive work environment where every individual feels valued and appreciated. Birthdays are an opportunity to recognize and celebrate the unique contributions and qualities of each team member.", },
  { id: 'e5', name: 'Fire Safety Training', imgs: ['fire-safety-training-1.jpg', 'fire-safety-training-2.jpg', 'fire-safety-training-3.jpg', 'fire-safety-training-4.jpg',], desc: "Dear Eximburg employees,\nWe are pleased to inform you that the Fire Safety Training session at Eximburg has been successfully conducted. We would like to extend our gratitude to all the participants who actively engaged in the training and contributed to making it a valuable learning experience.\nDuring the training, we covered essential fire safety practices, including identifying potential fire hazards, fire prevention measures, proper usage of fire extinguishers, evacuation procedures, and emergency communication protocols. Our experienced trainers provided practical demonstrations and shared valuable insights to enhance your understanding and preparedness in case of a fire emergency.", },
  { id: 'e6', name: "Celebrate Success: Year Goal Meeting and Dinner at Eximburg", imgs: ['goal-meeting-dinner-1.jpeg', 'goal-meeting-dinner-2.jpeg', 'goal-meeting-dinner-3.jpeg', 'goal-meeting-dinner-4.jpeg', 'goal-meeting-dinner-5.jpeg', 'goal-meeting-dinner-6.jpeg', 'goal-meeting-dinner-7.jpeg', 'goal-meeting-dinner-8.jpeg',], desc: "We are thrilled to announce the successful completion of our Year Goal Meeting and Dinner at Eximburg! It was an evening filled with inspiration, collaboration, and celebration of our collective achievements.\nDuring this event, our team came together to reflect on our accomplishments, set new goals, and strengthen our bonds as a united workforce. We reviewed the milestones we achieved throughout the year and acknowledged the hard work and dedication of every team member.", },
  { id: 'e7', name: "Celebrating Excellence: Safal Eximburg's Award Ceremony", imgs: ['safal-2022-1.jpeg', 'safal-2022-2.jpeg', 'safal-2022-3.jpeg', 'safal-2022-4.jpeg',], desc: "We are thrilled to announce the successful completion of the prestigious Eximburg Award Ceremony, where we celebrated excellence and recognized outstanding achievements within our organization. It was an evening filled with pride, inspiration, and heartfelt appreciation.\nDuring this grand event, we honored individuals and teams who have demonstrated exceptional performance, innovation, and dedication in their respective roles. Their remarkable contributions have propelled Eximburg to new heights and set a benchmark for excellence.", },
];

const Event = () => {
  const params = useParams();

  const [curBrand, setCurBrand] = useState(
    DUMMY_EVENTS.filter(
      (el, i) => el.name.split(" ").join("-").toLowerCase() === params.someEvent
    )[0]
  );
  const [curImg, setCurImg] = useState(
    DUMMY_EVENTS.filter(
      (el, i) => el.name.split(" ").join("-").toLowerCase() === params.someEvent
    )[0].imgs[0]
  );
  const [relatedImages, setRelatedImages] = useState(
    DUMMY_EVENTS.filter(
      (el, i) => el.name.split(" ").join("-").toLowerCase() === params.someEvent
    )[0].imgs
  );

  const gotToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    gotToTop();
  });

  const [eventImages, setEventImages] = useState(relatedImages);
  const [eventPopup, setEventPopup] = useState(false);
  const [eventPopupId, setEventPopupId] = useState(
    DUMMY_EVENTS.filter(
      (el, i) => el.name.split(" ").join("-").toLowerCase() === params.someEvent
    )[0].id
  );
  const [curImgIndex, setCurImgIndex] = useState(0);

  const openEventPopup = () => setEventPopup(true);
  const closeEventPopup = () => setEventPopup(false);

  return (
    <Wrapper>
      {eventPopup && (
        <EventPopup
          closeEventPopup={closeEventPopup}
          openEventPopup={openEventPopup}
          eventImages={relatedImages}
          eventPopupId={eventPopupId}
          curImgIndex={curImgIndex}
        />
      )}
      <section className={classes.section}>
        <div className={classes.container}>
          <div className={classes.imgContent}>
            <div className={classes.imgBox}>
              <img
                src={require(`../../../../resources/images/events/${curImg}`)}
                alt={"img"}
                className={classes.mainImg}
                onClick={() => setEventPopup(true)}
              />
            </div>
            <ul className={classes.products}>
              {relatedImages.map((image, i) => {
                return (
                  <li
                    className={classes.product}
                    key={i}
                    onClick={() => {
                      setCurImg(image);
                      setCurImgIndex(i);
                    }}
                  >
                    <div className={classes.relatedImgBox}>
                      <img
                        src={require(`../../../../resources/images/events/${image}`)}
                        alt="img"
                        className={classes.relatedImg}
                        style={{
                          outline: `${
                            image === curImg
                              ? "5px solid var(--color35)"
                              : "none"
                          }`,
                          outlineOffset: "5px"
                        }}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={classes.textContent}>
            <div className={classes.textBox}>
              <h4 className={classes.brandName}>{curBrand.name}</h4>
              <p className={classes.brandDesc}>{curBrand.desc}</p>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Event;
