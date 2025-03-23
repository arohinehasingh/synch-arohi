import Money from "../assets/money.webp";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import CountUp from "react-countup";


const CallToAction: React.FC = () => {
  return (
    <Container fluid className="cta-section text-center py-5">
      {/* Image with Animation */}
      <motion.div
        className="cta-image"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={Money}
         alt="Money Home" className="img-fluid" />
      </motion.div>

      {/* Heading with Animation */}
      <motion.h2
        className="cta-heading"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Ready for your money’s new home?
      </motion.h2>

      {/* Statistics Row with CountUp Animation */}
      <Row className="mt-4 justify-content-center">
        {[
          { start: 0, end: 1, suffix: "M+", text: "clients trust us with" },
          { start: 0, end: 80, suffix: "B+", text: "of their money" },
          { start: 0, end: 4.8, suffix: " ★", text: "Apple App Store" },
          { start: 0, end: 4.9, suffix: " ★", text: "Google Play Store" },
        ].map((item, index) => (
          <Col key={index} md={3} sm={6} className="text-center">
            <motion.h4
              className="cta-stat"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <CountUp start={item.start} end={item.end} duration={2} suffix={item.suffix} />
            </motion.h4>
            <p className="cta-text">{item.text}</p>
          </Col>
        ))}
      </Row>

      {/* Button with Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Button className="cta-button mt-4">Get started</Button>
      </motion.div>
    </Container>
  );
};

export default CallToAction;
