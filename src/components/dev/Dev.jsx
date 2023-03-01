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

      <div className="dev__container__1 container grid">

        {/* DEVELOPER 1 */}

        <div className="dev__content dev__toby">
          <div>
            <i className="uil uil-web-grid dev__icon"></i>
            <h3 className="dev__title">
              CTO <br /> Principal Architecture
            </h3>
          </div>

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

              <h3 className="dev__modal-title">Toby</h3>
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

        {/* DEVELOPER 2 */}

        <div className="dev__content dev__peter">
          <div>
            <i className="uil uil-arrow dev__icon"></i>
            <h3 className="dev__title">
              Technical <br /> Director
            </h3>
          </div>

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

              <h3 className="dev__modal-title">Peter</h3>
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
      </div>

      <div className="dev__container__2 container grid">

        {/* DEVELOPER 3 */}

        <div className="dev__content dev__odin">
          <div>

            {/* React Boxicon img */}
            {/* <i className="bx bxl-react dev__icon"></i> */}

            <i className="uil uil-edit dev__icon"></i>
            <h3 className="dev__title">
              UI/UX <br /> React
            </h3>
          </div>

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

              <h3 className="dev__modal-title">Odin</h3>
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

        {/* DEVELOPER 4 */}

        <div className="dev__content dev__adam">
          <div>
            <i className="uil uil-web-grid dev__icon"></i>
            <h3 className="dev__title">
              Product <br /> Designer
            </h3>
          </div>

          <span className="dev__button" onClick={() => toggleTab(4)}>
            <Hand />
            <i className="uil uil-arrow-right dev__button-icon"></i>
          </span>


          <div
            className={
              toggleState === 4
                ? "dev__modal active-modal"
                : "dev__modal"
            }
          >
            <div className="dev__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times dev__modal-close"
              ></i>

              <h3 className="dev__modal-title">Adam</h3>
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

        {/* DEVELOPER 5 */}

        <div className="dev__content dev__joeBoat">
          <div>
            <i className="uil uil-arrow dev__icon"></i>
            <h3 className="dev__title">
              Data <br /> Expert
            </h3>
          </div>

          <span onClick={() => toggleTab(5)} className="dev__button">
            <Hand />
            <i className="uil uil-arrow-right dev__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 5
                ? "dev__modal active-modal"
                : "dev__modal"
            }
          >
            <div className="dev__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times dev__modal-close"
              ></i>

              <h3 className="dev__modal-title">Joe</h3>
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

        {/* DEVELOPER 6 */}

        <div className="dev__content dev__joeMiami">
          <div>
            <i className="uil uil-edit dev__icon"></i>
            <h3 className="dev__title">
              Software <br /> Engineering
            </h3>
          </div>

          <span onClick={() => toggleTab(6)} className="dev__button">
            <Hand />
            <i className="uil uil-arrow-right dev__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 6
                ? "dev__modal active-modal"
                : "dev__modal"
            }
          >
            <div className="dev__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times dev__modal-close"
              ></i>

              <h3 className="dev__modal-title">Joe A.</h3>
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

        {/* DEVELOPER 7 */}

        <div className="dev__content dev__veerav">
          <div>
            <i className="uil uil-edit dev__icon"></i>
            <h3 className="dev__title">
              Software <br /> Engineering
            </h3>
          </div>

          <span onClick={() => toggleTab(7)} className="dev__button">
            <Hand />
            <i className="uil uil-arrow-right dev__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 7
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

        {/* DEVELOPER 8 */}

        <div className="dev__content dev__isaac">
          <div>
            <i className="uil uil-edit dev__icon"></i>
            <h3 className="dev__title">
              Software <br /> Engineering / QA
            </h3>
          </div>

          <span onClick={() => toggleTab(8)} className="dev__button">
            <Hand />
            <i className="uil uil-arrow-right dev__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 8
                ? "dev__modal active-modal"
                : "dev__modal"
            }
          >
            <div className="dev__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times dev__modal-close"
              ></i>

              <h3 className="dev__modal-title">Isaac</h3>
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

      <div className="dev__container__3 container grid">

        {/* DEVELOPER 9 */}

        <div className="dev__content dev__ryan">
          <div>
            <i className="uil uil-web-grid dev__icon"></i>
            <h3 className="dev__title">
              Director of <br /> Sales
            </h3>
          </div>

          <span className="dev__button" onClick={() => toggleTab(9)}>
            <Hand />
            <i className="uil uil-arrow-right dev__button-icon"></i>
          </span>


          <div
            className={
              toggleState === 9
                ? "dev__modal active-modal"
                : "dev__modal"
            }
          >
            <div className="dev__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times dev__modal-close"
              ></i>

              <h3 className="dev__modal-title">Ryan</h3>
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
      </div>

    </section >
  );
};

export default Dev;
