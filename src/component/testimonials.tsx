
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "The best way for me to maximize every one of my hard-earned dollars.",
    name: "Stanley R",
    account: "Cash Account",
    gradient: "linear-gradient(to top left, #DFF6DD, #FDEFD9)",
  },
  {
    text: "The single best resource for investing, managing retirement and seeing my entire financial picture.",
    name: "Joshua B",
    account: "Automated Investing Account",
    gradient: "linear-gradient(to top left, #FCE8E5, #E3D7F9)",
  },
  {
    text: "I LOVE Wealthfront and have moved almost all of my finances there.",
    name: "Daniel C",
    account: "Automated Bond Portfolio",
    gradient: "linear-gradient(to top left, #FAD7C7, #D7E3FC)",
  },
];

const Testimonials: React.FC = () => {
  return (
    <Container fluid className="bg-light py-5">
      <Container className="text-center">
      <h1 className="fw-bold text-primary">
      Don’t just take our word for it.
          </h1>
        {/* Header Section */}
        <motion.div
          className="p-4 rounded-4 text-dark fw-bold "
          style={{
            backgroundColor: "#D0D5FD",
            maxWidth: "800px",
            margin: "0 auto",
            borderRadius: "20px",
          }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="fw-bold text-dark">
            Wealthfront takes the crown for best overall platform on the market
          </h1>
          <p className="text-dark mt-2">Investopedia</p>
          <p className="text-dark">2022</p>
        </motion.div>

        {/* Testimonials Section */}
        <Row className="mt-5 d-flex justify-content-between mb-3">
          {testimonials.map((testimonial, index) => (
            <Col key={index} md={4} className="d-flex justify-content-center">
              <motion.div
                className="p-4 bg-white shadow rounded-4 text-start m-2"
                style={{
                  maxWidth: "320px",
                  minHeight: "180px",
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <p className="fw-bold text-dark">{testimonial.text}</p>
                <div className="d-flex align-items-center mt-3">
                  <div
                    className="rounded-circle me-3"
                    style={{
                      width: "40px",
                      height: "40px",
                      background: testimonial.gradient,
                    }}
                  ></div>
                  <div>
                    <p className="fw-bold text-dark mb-0">{testimonial.name}</p>
                    <p className="text-muted small">{testimonial.account}</p>
                  </div>
                </div>
              </motion.div>
             
            </Col>
            
          ))}
          
        </Row>
        <button className="btn btn-primary btn-lg mt-5">Read More Review</button>
      </Container>
    </Container>
  );
};

export default Testimonials;
