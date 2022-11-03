import React from 'react';
import '../styles/variation.scss'

import TittleGroup from "./TittleGroup.tsx";

import CelularDeitado from '../img/celulardeitado.png';
import CelularNuvem from '../img/celularnuvem.png';

const Variation = () => {
  return (
    <section id="variationSection">
      <div id="variation">
        <div id="variationRow">
          <div className="variationRowContent">
            <div id="variationText">

              <TittleGroup
                tinyNumber={3}
                title={"Agilidade na mão."}
                tinyText={"Aplicativo"}
                text={"Quisque eget velit. Duis vitae semper augue. Orci nulla magna, arcu diam inceptos lupus ut quis nibh eu."}
                linkText={"Me lembre de trocar!!!"}
                pathLink={"#"}
              />
            </div>
          </div>

          <div className="variationRowImages">
            <img id="variationPhoneApp" src={CelularDeitado} />
            <span id="variationPhoneDotted"></span>
            <img id="variationPhoneCloud" src={CelularNuvem} />
          </div>
        </div>
      </div>

      <div id="variantSubText">
        <div id="variantSubTextInfo">
          <TittleGroup
            tinyNumber={4}
            title={"Tudo na nuvem."}
            tinyText={"Cloud Safe"}
            text={"Quisque eget velit. Duis vitae semper augue. Orci nulla magna, arcu diam inceptos lupus ut quis nibh eu."}
            linkText={"Cadastre-se"}
            pathLink={"#"}
          />
        </div>
      </div>
    </section>
  )
}

export default Variation;