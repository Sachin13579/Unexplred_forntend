import React from "react";
import Layout from "./Layout";
import Nishant from "./../image/team/img1.jpeg";
import Prasant from "./../image/team/img2.jpeg";
import Sachin from "./../image/team/img3.jpeg";
import nishantBg from "./../image/team/img-top1.jpeg";
import sachinBg from "./../image/team/img-top2.jpeg";
import prashnatBg from "./../image/team/img-top3.jpeg";
import "./../CSS/team.css";
export default function Team() {
  return (
    <Layout>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="border shadow rounded my-3 p-2">
                <div className="card profile-card-2">
                  <div className="card-img-block">
                    <img className="img-fluid" src={nishantBg} alt="" />
                  </div>
                  <div className="card-body pt-5">
                    <img src={Nishant} alt="profile" className="profile" />
                    <h5 className="card-title font-weight-bold">
                      Nishant Singh
                    </h5>
                    <p className="card-text">Founder</p>
                    <div className="p-2">
                      <h6 className="text-success border-bottom border-info font-weight-bold">
                        About me
                      </h6>

                      <p
                        className="text-justify px-3 py-2"
                        style={{ fontSize: "13px", color: "gray" }}
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Itaque similique vitae accusantium sequi explicabo rerum
                        possimus, harum id repudiandae labore.
                      </p>
                    </div>
                    <div
                      className="text-center border-top border-success pt-3 pb-1"
                      id="logoofcard"
                    >
                      {/* <a href="https://github.com/shsarv">
                        <i
                          className="fab fa-github fa-2x"
                          aria-hidden="true"
                        ></i>
                      </a>{" "} */}
                      &nbsp;&nbsp;&nbsp;
                      <a href="https://twitter.com/Raftaar97957511">
                        <i class="fab fa-twitter fa-2x" aria-hidden="true"></i>
                      </a>{" "}
                      &nbsp;&nbsp;&nbsp;
                      <a href="https://www.linkedin.com/in/sachin-singhis/">
                        {" "}
                        <i class="fab fa-linkedin fa-2x" aria-hidden="true"></i>
                      </a>
                      &nbsp;&nbsp;&nbsp;
                      {/* <a href="https://shsarv.medium.com/">
                        {" "}
                        <i class="fab fa-medium fa-2x" aria-hidden="true"></i>
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="border shadow rounded my-3 p-2">
                <div className="card profile-card-2">
                  <div className="card-img-block">
                    <img className="img-fluid" src={prashnatBg} alt="" />
                  </div>
                  <div className="card-body pt-5">
                    <img src={Sachin} alt="profile" className="profile" />
                    <h5 className="card-title font-weight-bold">
                      Sachin Singh
                    </h5>
                    <p className="card-text">Software engineer</p>
                    <div className="p-2">
                      <h6 className="text-success border-bottom border-info font-weight-bold">
                        About me
                      </h6>

                      <p
                        className="text-justify px-3 py-2"
                        style={{ fontSize: "13px", color: "gray" }}
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Itaque similique vitae accusantium sequi explicabo rerum
                        possimus, harum id repudiandae labore.
                      </p>
                    </div>
                    <div
                      className="text-center border-top border-success pt-3 pb-1"
                      id="logoofcard"
                    >
                      {/* <a href="https://github.com/shsarv">
                        <i
                          className="fab fa-github fa-2x"
                          aria-hidden="true"
                        ></i>
                      </a>{" "} */}
                      &nbsp;&nbsp;&nbsp;
                      <a href="https://twitter.com/Raftaar97957511">
                        <i class="fab fa-twitter fa-2x" aria-hidden="true"></i>
                      </a>{" "}
                      &nbsp;&nbsp;&nbsp;
                      <a href="https://www.linkedin.com/in/sachin-singhis/">
                        {" "}
                        <i class="fab fa-linkedin fa-2x" aria-hidden="true"></i>
                      </a>
                      &nbsp;&nbsp;&nbsp;
                      {/* <a href="https://shsarv.medium.com/">
                        {" "}
                        <i class="fab fa-medium fa-2x" aria-hidden="true"></i>
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="border shadow rounded my-3 p-2">
                <div className="card profile-card-2">
                  <div className="card-img-block">
                    <img className="img-fluid" src={sachinBg} alt="" />
                  </div>
                  <div className="card-body pt-5">
                    <img src={Prasant} alt="profile" className="profile" />
                    <h5 className="card-title font-weight-bold">
                      Prashant Singh
                    </h5>
                    <p className="card-text">VP of Sales</p>
                    <div className="p-2">
                      <h6 className="text-success border-bottom border-info font-weight-bold">
                        About Me
                      </h6>

                      <p
                        className="text-justify px-3 py-2"
                        style={{ fontSize: "13px", color: "gray" }}
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Itaque similique vitae accusantium sequi explicabo rerum
                        possimus, harum id repudiandae labore.
                      </p>
                    </div>
                    <div
                      className="text-center border-top border-success pt-3 pb-1"
                      id="logoofcard"
                    >
                      {/* <a href="https://github.com/shsarv">
                        <i
                          className="fab fa-github fa-2x"
                          aria-hidden="true"
                        ></i>
                      </a>{" "} */}
                      &nbsp;&nbsp;&nbsp;
                      <a href="https://twitter.com/Raftaar97957511">
                        <i class="fab fa-twitter fa-2x" aria-hidden="true"></i>
                      </a>{" "}
                      &nbsp;&nbsp;&nbsp;
                      <a href="https://www.linkedin.com/in/sachin-singhis/">
                        {" "}
                        <i class="fab fa-linkedin fa-2x" aria-hidden="true"></i>
                      </a>
                      &nbsp;&nbsp;&nbsp;
                      {/* <a href="https://shsarv.medium.com/">
                        {" "}
                        <i class="fab fa-medium fa-2x" aria-hidden="true"></i>
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
