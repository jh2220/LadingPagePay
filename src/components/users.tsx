import React, { useState } from "react";
import '../styles/user.scss'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';

import Imgquemusa1 from '../img/imgquemusa1.png';
import Imgquemusa2 from '../img/imgquemusa2.png';
import Imgquemusa3 from '../img/imgquemusa3.png';
import Imgquemusa4 from '../img/imgquemusa4.png';

const Users = () => {

  const [userData, setUserData] = useState([
    { imageSrc: Imgquemusa1, title: "Estudantes", text: "Lorem ipsum et dolor sit amet, sed consetetur sadipscing elitr, sed diam" },
    { imageSrc: Imgquemusa2, title: "Funcionários", text: "Lorem ipsum et dolor sit amet, sed consetetur sadipscing elitr, sed diam" },
    { imageSrc: Imgquemusa3, title: "Pessoas físicas e jurídicas", text: "Lorem ipsum et dolor sit amet, sed consetetur sadipscing elitr, sed diam" },
    { imageSrc: Imgquemusa4, title: "Outras empresas", text: "Lorem ipsum et dolor sit amet, sed consetetur sadipscing elitr, sed diam" },
    { imageSrc: Imgquemusa1, title: "Estudantes", text: "Lorem ipsum et dolor sit amet, sed consetetur sadipscing elitr, sed diam" },
    { imageSrc: Imgquemusa2, title: "Funcionários", text: "Lorem ipsum et dolor sit amet, sed consetetur sadipscing elitr, sed diam" },
    { imageSrc: Imgquemusa3, title: "Pessoas físicas e jurídicas", text: "Lorem ipsum et dolor sit amet, sed consetetur sadipscing elitr, sed diam" },
    { imageSrc: Imgquemusa4, title: "Outras empresas", text: "Lorem ipsum et dolor sit amet, sed consetetur sadipscing elitr, sed diam" }
  ]);

  const [circlesData, setCirclesData] = useState([
    { percent: '35', title: 'Planejamento', text: 'Lorem ipsum et dolor velit nec.' },
    { percent: '75', title: 'Análise', text: 'Lorem ipsum et dolor velit nec.' },
    { percent: '63', title: 'Design', text: 'Lorem ipsum et dolor velit nec.' },
  ])

  const responsiveData = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1300 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1299, min: 1000 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 999, min: 650 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 649, min: 0 },
      items: 1
    }
  };

  return (<section id="usersSection">
    <div id="users">
      <h2 id="usersTitle">Quem usa?</h2>

      <div id="usersCaroselrow">

        <Carousel
          responsive={responsiveData}
          arrows={false}
          infinite={true}
        >
          {userData.map((userData) => {
            return (
              <div className="usersCaroselItem">
                <img src={userData.imageSrc} />
                <span className="userRedShadow"></span>
                <h3>{userData.title}</h3>
                <p>{userData.text}</p>
              </div>
            )
          })}
        </Carousel>
      </div>
    </div>

    <div id="usersCircleRow" className="usersCircleRow">

      {circlesData.map((circlesData) => {
        return (
          <div className="usersCircleItem">
            <div className="circleWheel">
              <CircularProgressbarWithChildren
                value={circlesData.percent}
                strokeWidth={5}
                styles={buildStyles({
                  rotation: 0,
                  pathTransitionDuration: 0.5,
                  pathColor: `#1a1a1a`,
                  textColor: '#1a1a1a',
                  trailColor: '#d6d6d6',
                  backgroundColor: '#3e98c7',
                })}>
                <div className="circleWheelInsideText">
                  {circlesData.percent}
                  <span className="circlePercent">%</span>
                </div>
              </CircularProgressbarWithChildren>
            </div>
            <div className="userCircleWheelText">
              <h3>{circlesData.title}</h3>
              <p>{circlesData.text}</p>
            </div>
          </div>
        )
      })}
    </div>
  </section>);
}

export default Users;