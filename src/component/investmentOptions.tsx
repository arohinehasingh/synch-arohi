
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const InvestmentOptions: React.FC = () => {
  return (
    <Container fluid className="bg-light text-dark py-5">
      <Container className="text-center">
        {/* Title */}
        <h1 className="fw-bold text-dark">Choose the right level of risk for</h1>
        <h1 className="fw-bold text-primary">different chunks of your change.</h1>

        {/* Row with Fixed Single-Line Layout */}
        <Row className="mt-5 d-flex justify-content-between">
          {[
            {
              title: "High-yield savings",
              desc: "Best for your daily expenses and your emergency fund, until you're ready to invest.",
              category: "Cash Account",
              color: "text-primary",
            },
            {
              title: "US Treasuries",
              desc: "Backed by the Federal government, Treasuries can earn a steady rate and are considered one of the safest investments in the world.",
              category: "Automated Bond Ladder",
              color: "text-primary",
            },
            {
              title: "Index Investing",
              desc: "The time-tested method designed to maximize returns over the long term, while we automatically manage the risk for you.",
              category: "Automated Investing Account",
              color: "text-primary",
            },
            {
              title: "Individual Stocks",
              desc: "At risk of higher volatility, but useful when investing in specific companies you believe in.",
              category: "Stock Investing Account",
              color: "text-primary",
            },
          ].map((option, index) => (
            <Col key={index} md={3} className="d-flex justify-content-center">
              <motion.div
                className="p-3 bg-white shadow rounded-3 text-start m-2"
                style={{ width: "280px", height: "280px" }} // Fixed card size
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-uppercase fw-bold text-muted small">{option.category}</p>
                <h5 className={`fw-bold ${option.color}`}>{option.title}</h5>
                <p className="text-secondary small">{option.desc}</p>
                <a href="#" className={`fw-bold ${option.color} small`}>Learn more</a>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default InvestmentOptions;
