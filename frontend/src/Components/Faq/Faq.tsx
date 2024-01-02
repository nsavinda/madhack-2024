import React from "react";
import Faq from "react-faq-component";

import "./Faq.scss";
import presents from "../../assets/presents.png";
import flutter_react from "../../assets/flutter_react.png";


const data = {
    // title: "FAQ (How it works)",
    rows: [
        {
            title: "Lorem ipsum dolor sit amet,",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
        },
        {
            title: "Nunc maximus, magna at ultricies elementum",
            content:
                "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
        {
            title: "Curabitur laoreet, mauris vel blandit fringilla",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
        },
        {
            title: "What is the package version",
            content: <p>current version is 1.2.1</p>,
        },
    ],
};

const styles = {
    bgColor: 'transparent',
    titleTextColor: "#fff",
    rowTitleColor: "#fff",
    rowContentColor: '#d1d1d1',
    arrowColor: "#fff",
};

const config = {
    animate: true,
    tabFocus: true
};

export default function FaqComponent() {
    return (
        <div className="site-section local-bootstrap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                        <div className="site-section-heading">
                            <h2>
                                <span>FAQ</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center speaker">
                    <div className="faq">
                        <div className="faq-container">
                            <Faq data={data} styles={styles} config={config} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}