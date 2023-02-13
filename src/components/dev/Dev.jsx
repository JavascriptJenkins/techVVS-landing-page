import React, { useState } from "react";
import "./dev.css";
import Hand from "./Hand";


const Dev = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="dev section" id="dev">
      <h2 className="section__title">Meet our developers</h2>
      <span className="section__subtitle">Find out about us!</span>

      <div className="dev__container container grid">
        <div className="dev__content dev__odin">
          {/* <div>
            <i className="uil uil-web-grid dev__icon"></i>


            <h3 className="dev__title">
              Product <br /> Designer
            </h3>
          </div> */}

          <span className="dev__button" onClick={() => toggleTab(1)}>
            <Hand />
            <i className="uil uil-arrow-right dev__button-icon"></i>
          </span>


          <div
            className={
              toggleState === 1
                ? "dev__modal active-modal"
                : "dev__modal"
            }
          >
            <div className="dev__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times dev__modal-close"
              ></i>

              <h3 className="dev__modal-title">Odin</h3>
              <p className="dev__modal-description">
                Providing quality work to clients and companies generating requirements and technical documentation.
              </p>

              <ul className="dev__modal-dev grid">
                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">
                    We develop the user interface.
                  </p>
                </li>

                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">Web page development.</p>
                </li>

                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">
                    We create ux element interactions.
                  </p>
                </li>

                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">
                    We position your company brand.
                  </p>
                </li>

                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">
                    Design and mockups of software products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="dev__content dev__veerav">
          {/* <div>
            <i className="uil uil-arrow dev__icon"></i>
            <h3 className="dev__title">
              Ui/Ux <br /> Designer
            </h3>
          </div> */}

          <span onClick={() => toggleTab(2)} className="dev__button">
            <Hand />
            <i className="uil uil-arrow-right dev__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "dev__modal active-modal"
                : "dev__modal"
            }
          >
            <div className="dev__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times dev__modal-close"
              ></i>

              <h3 className="dev__modal-title">Veerav</h3>
              <p className="dev__modal-description">
                Providing quality work to clients and companies to design functional and accessible UI/Ux.
              </p>

              <ul className="dev__modal-dev grid">
                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">
                    We develop the user interface.
                  </p>
                </li>

                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">Web page development.</p>
                </li>

                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">
                    We create ux element interactions.
                  </p>
                </li>

                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">
                    We position your company brand.
                  </p>
                </li>

                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="dev__content dev__toby">
          {/* <div>
            <i className="uil uil-edit dev__icon"></i>
            <h3 className="dev__title">
              Software <br /> Engineering
            </h3>
          </div> */}

          <span onClick={() => toggleTab(3)} className="dev__button">
            <Hand />
            <i className="uil uil-arrow-right dev__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "dev__modal active-modal"
                : "dev__modal"
            }
          >
            <div className="dev__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times dev__modal-close"
              ></i>

              <h3 className="dev__modal-title">Toby</h3>
              <p className="dev__modal-description">
                Providing quality work to clients and companies to deliver secure and functional software.
              </p>

              <ul className="dev__modal-dev grid">
                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">
                    Backend or frontend development.  Specialized Integrations.
                  </p>
                </li>

                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">Web page development.  SPA applications. </p>
                </li>

                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">
                    Unit Testing Coverage
                  </p>
                </li>

                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">
                    Security vulnerability scanning and resolving.  Stay secure and compliant.
                  </p>
                </li>

                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">
                    Software Architecture Services.  We can design and diagnose existing issues with your Software Architecture.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dev;
