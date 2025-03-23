import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaWallet } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="w-100 py-5" style={{ background: "linear-gradient(to right,rgb(178, 210, 218),rgb(233, 233, 233))", minHeight: "100vh" }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Text Section */}
          <motion.div
            className="col-md-7 text-center text-md-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="fw-bold text-dark display-3">
              Money works <br /> better here.
            </h1>
            <div className="d-flex flex-column flex-md-row align-items-center gap-4 mt-4">
              <div className="d-flex align-items-center gap-2">
                <FaWallet size={30} className="text-primary" />
                <p className="m-0 fw-bold text-dark">Earn 4.00% APY*</p>
              </div>
              <div className="d-flex align-items-center gap-2">
                <BsGraphUp size={30} className="text-primary" />
                <p className="m-0 fw-bold text-dark">Invest with expert-built portfolios</p>
              </div>
            </div>
            <p className="text-muted small mt-2">on your cash from partner banks.</p>
            <button className="btn btn-primary btn-lg mt-3 mb-4">Get Started</button>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="col-md-5 text-center"
            initial={{ opacity: 0, rotateY: 15, rotateX: 10 }}
            animate={{ opacity: 1, rotateY: 0, rotateX: 0 }}
            whileHover={{ rotateY: 15, rotateX: 10, scale: 1.05 }}
            transition={{ duration: 1 }}
          >
            <img
              src="src/assets/download (3).png"
              alt="Mockup"
              className="img-fluid rounded shadow"
              style={{
                transformStyle: "preserve-3d",
               
              }}
            />
            
          </motion.div>
           {/* Stats & Awards Section */}
        <motion.div
          className="row text-center mt-5 py-5"
          style={{ background: "linear-gradient(to right,rgb(251, 252, 254),rgb(206, 207, 218))", borderRadius: "15px" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="col-md-3">
            <h3 className="fw-bold text-dark">Nerdwallet</h3>
            <p className="text-muted small">Best Robo-advisor, Portfolio Options, 2023</p>
          </div>
          <div className="col-md-3">
            <h3 className="fw-bold text-dark">Bankrate</h3>
            <p className="text-muted small">Best Cash Management Account, 2023-24</p>
          </div>
          <div className="col-md-2">
            <h3 className="fw-bold text-dark">1M+</h3>
            <p className="text-muted small">Trusted clients</p>
          </div>
          <div className="col-md-2">
            <h3 className="fw-bold text-dark">$80B+</h3>
            <p className="text-muted small">In total assets</p>
          </div>
          <div className="col-md-1">
            <h3 className="fw-bold text-dark">4.8 ★</h3>
            <p className="text-muted small">Apple App Store</p>
          </div>
          <div className="col-md-1">
            <h3 className="fw-bold text-dark">4.9 ★</h3>
            <p className="text-muted small">Google Play Store</p>
          </div>
        </motion.div>
   
        </div>

          </div>
    </section>
  );
};

export default Hero;
