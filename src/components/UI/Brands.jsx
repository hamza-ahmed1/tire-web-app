import React from "react";
import Marquee from "react-fast-marquee"; // Import the Marquee library
import icon1 from "../../components/Brand/1.png";
import icon2 from "../../components/Brand/2.png";
import icon3 from "../../components/Brand/3.png";
import icon4 from "../../components/Brand/4.png";
import icon5 from "../../components/Brand/5.png";
import icon6 from "../../components/Brand/6.png";
import icon7 from "../../components/Brand/7.png";
import icon8 from "../../components/Brand/8.png";
import icon9 from "../../components/Brand/9.png";
import icon10 from "../../components/Brand/10.png";
import icon11 from "../../components/Brand/11.png";
import icon12 from "../../components/Brand/12.png";
import icon13 from "../../components/Brand/13.png";
import icon14 from "../../components/Brand/14.png";
import icon15 from "../../components/Brand/15.png";
import icon16 from "../../components/Brand/16.png";
import icon17 from "../../components/Brand/17.png";
import icon18 from "../../components/Brand/18.png";
import icon19 from "../../components/Brand/19.png";
import icon20 from "../../components/Brand/20.png";



const Brand = () => {
  return (
    <div className="brand-container">
     <h2 
  style={{
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "1.5rem",
    fontWeight: "bold",
    color: "red",
  }}
>
  Our Trusted Brands
</h2>
      {/* Marquee 1: Right to Left */}
      <Marquee direction="left" speed={60} className="marquee-1" pauseOnHover>
        {[...Array(2)].map((_, index) => (
          <div key={index} style={{ margin: "0 20px" }}>
            <img
              src={icon1}
              alt="brand-icon"
              style={{ width: "150px", height: "auto" }}
            />
             <img
              src={icon2}
              alt="brand-icon"
              style={{ width: "150px", height: "auto" }}
            />
             <img
              src={icon3}
              alt="brand-icon"
              style={{ width: "150px", height: "auto" }}
            />
             <img
              src={icon4}
              alt="brand-icon"
              style={{ width: "150px", height: "auto" }}
            />
             <img
              src={icon5}
              alt="brand-icon"
              style={{ width: "150px", height: "auto" }}
            />
             <img
              src={icon6}
              alt="brand-icon"
              style={{ width: "150px", height: "auto" }}
            />
              <img
              src={icon7}
              alt="brand-icon"
              style={{ width: "150px", height: "auto" }}
            />
          </div>
        ))}
      </Marquee>

      {/* Marquee 2: Left to Right */}
      <Marquee direction="right" speed={60} className="marquee-2" pauseOnHover>
        {[...Array(2)].map((_, index) => (
          <div key={index} style={{ margin: "0 20px" }}>
            <img
              src={icon8}
              alt="brand-icon"
              style={{ width: "150px", height: "auto" }}
            />
             <img
              src={icon9}
              alt="brand-icon"
              style={{ width: "150px", height: "auto" }}
            />
             <img
              src={icon10}
              alt="brand-icon"
              style={{ width: "150px", height: "auto" }}
            />
             <img
              src={icon11}
              alt="brand-icon"
              style={{ width: "150px", height: "auto" }}
            />
             <img
              src={icon12}
              alt="brand-icon"
              style={{ width: "150px", height: "auto" }}
            />
             <img
              src={icon13}
              alt="brand-icon"
              style={{ width: "150px", height: "auto" }}
            />
          </div>
        ))}
      </Marquee>

      {/* Marquee 3: Right to Left */}
      <Marquee direction="left" speed={60} className="marquee-3" pauseOnHover>
        {[...Array(2)].map((_, index) => (
          <div key={index} style={{ margin: "0 20px" }}>
            <img
              src={icon14}
              alt="brand-icon"
              style={{ width: "150px", height: "auto" }}
            />
              <img
              src={icon15}
              alt="brand-icon"
              style={{ width: "150px", height: "auto" }}
            />
              <img
              src={icon16}
              alt="brand-icon"
              style={{ width: "150px", height: "auto" }}
            />
              <img
              src={icon17}
              alt="brand-icon"
              style={{ width: "150px", height: "auto" }}
            />
              <img
              src={icon18}
              alt="brand-icon"
              style={{ width: "150px", height: "auto" }}
            />
              <img
              src={icon19}
              alt="brand-icon"
              style={{ width: "150px", height: "auto" }}
            />
              <img
              src={icon20}
              alt="brand-icon"
              style={{ width: "150px", height: "auto" }}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Brand;
