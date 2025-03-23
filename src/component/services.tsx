import React, { JSX, useState } from "react";
import { FaCheck, FaTimes, FaExchangeAlt, FaShieldAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

type TabKey = 'cash' | 'bond' | 'invest' | 'stock';

const Services = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("cash");

  const tabContent: Record<TabKey, {
    title: string;
    subtitle: string;
    description: string;
    benefits: { icon: JSX.Element; text: string }[];
    image: string;
  }> = {
    cash: {
      title: "More interest on your cash.",
      subtitle: "Earn 4.00%* APY.",
      description:
        "Earn more on your short-term savings with a high APY delivered through our partner banks. Your cash is easy to access and easy to invest, with no sneaky requirements and no strings attached.",
      benefits: [
        { icon: <FaTimes className="text-danger me-2" />, text: "No account fees" },
        { icon: <FaExchangeAlt className="text-success me-2" />, text: "Free, 24/7 instant withdrawals" },
        { icon: <FaCheck className="text-success me-2" />, text: "No minimum or maximum balance to earn 4.00%* APY" },
        { icon: <FaShieldAlt className="text-primary me-2" />, text: "Up to $8M FDIC insurance through partner banks" },
      ],
      image: "/assets/cash-account.png",
    },
    bond: {
      title: "Steady returns with bonds.",
      subtitle: "Invest in Automated Bond Ladders.",
      description:
        "Diversify your investments with a structured approach using our bond ladders. Designed for long-term growth with controlled risk.",
      benefits: [
        { icon: <FaCheck className="text-success me-2" />, text: "Predictable returns over time" },
        { icon: <FaShieldAlt className="text-primary me-2" />, text: "Reduced risk with diversification" },
        { icon: <FaExchangeAlt className="text-success me-2" />, text: "Auto-managed reinvestment" },
      ],
      image: "/assets/bond-investment.png",
    },
    invest: {
      title: "Grow your wealth automatically.",
      subtitle: "Automated Investing Accounts.",
      description:
        "Put your investments on autopilot with our expert-managed portfolios, optimized for maximum returns with minimal effort.",
      benefits: [
        { icon: <FaCheck className="text-success me-2" />, text: "Professionally curated portfolios" },
        { icon: <FaShieldAlt className="text-primary me-2" />, text: "Tax-efficient investing strategies" },
        { icon: <FaExchangeAlt className="text-success me-2" />, text: "Automatic rebalancing for stability" },
      ],
      image: "/assets/auto-investing.png",
    },
    stock: {
      title: "Take control of your investments.",
      subtitle: "Stock Investing Accounts.",
      description:
        "Invest in individual stocks with zero commissions. Build your own portfolio with confidence and flexibility.",
      benefits: [
        { icon: <FaCheck className="text-success me-2" />, text: "Trade stocks with $0 commission" },
        { icon: <FaExchangeAlt className="text-success me-2" />, text: "Flexible portfolio management" },
        { icon: <FaShieldAlt className="text-primary me-2" />, text: "Secure transactions & real-time tracking" },
      ],
      image: "/assets/stock-trading.png",
    },
  };

  const tabs = [
    { name: "Cash Account", key: "cash" },
    { name: "Automated Bond Ladder", key: "bond" },
    { name: "Automated Investing Account", key: "invest" },
    { name: "Stock Investing Account", key: "stock" },
  ];

  return (
    <section
      className="w-100 min-vh-100 px-3 py-5"
      style={{
        background: "linear-gradient(to right, #f7f7fc, #e5e5f7)",
      }}
    >
      {/* Navigation Tabs */}
      <nav className="container-fluid py-3">
        <div className="container d-flex flex-wrap justify-content-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`btn fw-bold ${
                activeTab === tab.key ? "text-white" : "text-dark"
              }`}
              style={{
                background: activeTab === tab.key ? "#4c5fd5" : "#ffffff",
                border: "2px solid #4c5fd5",
                transition: "0.3s ease-in-out",
                width: "auto",
                minWidth: "200px",
                padding: "12px",
                borderRadius: "8px",
                boxShadow: activeTab === tab.key ? "0px 4px 6px rgba(0,0,0,0.1)" : "none",
              }}
              onClick={() => setActiveTab(tab.key as TabKey)}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6 col-12 text-center text-lg-start">
            {/* Badges */}
            <div className="mb-3 d-flex justify-content-center justify-content-lg-start flex-wrap gap-2">
              <span className="badge bg-danger text-white px-3 py-2">Higher Risk</span>
              <span className="badge bg-warning text-dark px-3 py-2">Strategic Opportunities</span>
            </div>

            <span className="badge bg-primary text-white px-3 py-2 fs-6">INVEST SMART</span>
            <h1 className="fw-bold text-dark mt-3">{tabContent[activeTab].title}</h1>
            <h2 className="text-primary fw-bold">{tabContent[activeTab].subtitle}</h2>
            <p className="text-muted mt-3">{tabContent[activeTab].description}</p>
            <ul className="list-unstyled mt-3">
              {tabContent[activeTab].benefits.map((benefit, index) => (
                <li key={index} className="d-flex align-items-center justify-content-center justify-content-lg-start">
                  {benefit.icon} {benefit.text}
                </li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="mt-4">
              <button className="btn btn-outline-primary px-4 py-2 me-2 mb-2">Learn More</button>
              <button className="btn btn-primary px-4 py-2 mb-2">Get Started</button>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-6 col-12 text-center mt-4 mt-lg-0">
            <img
              src="src/assets/download (3).png"
              alt={tabContent[activeTab].title}
              className="img-fluid rounded shadow"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
