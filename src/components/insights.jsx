import React from "react";
import { Container } from "react-bootstrap";
import InsightsGallery from "./insights_gallery";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "../components/assets/style.css"; // Ensure this path is correct
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InsightDetails from "./insight_info";
import Report from "./report";
import Dataset from "./dataset";
import Navbar from  "./navbar"

const insights = [
  {
    imageUrl: "Average_milesper_trip_purpsoe2.png",
    title: "Average miles of trips by purpose",
    business_advice:
      'The average miles "between offices" and "errands" are much greater than others so focus more on Partnerships with Service Providers, Reward Programs,Volume Discounts  to build a healthy and long lasting relationship with customers ',
    summary: "",
  },
  {
    imageUrl: "category_distributionby_purpose3.png",
    title: "Category distribution by purpose",
    business_advice:
      " Uber data show that for both business and personal categories most number of trips are for meetings and meal/entertainment purpose ,uber should provide some additional facilities like some special business class updated vehicles whose drivers specially available near the offices and uber should start some compaingns with food companies and give some offers to customers accordingly also focus more on Customizable Rides,Loyalty Programs",
    summary: "",
  },
  {
    imageUrl: "most_purpose_miles_heatmap.png",
    title: "most miles covered for which purpose?",
    business_advice:
      "According to uber data it has been observed that the highest mileage is attributed to errands, meal/entertainment outings, and meetings compared to other purposes. To capitalize on these findings, Uber should prioritize initiatives such as route optimization, introducing package deals, and implementing targeted promotions. These strategies aim to enhance efficiency, offer attractive bundled services, and tailor promotional efforts to maximize customer satisfaction and operational effectiveness.",
    summary: "",
  },
  {
    imageUrl: "top5_mostfrequent_stop_heatmap.png",
    title: "most frequent endpoints ",
    business_advice:
      'Uber data shows "cary" and "morrisville" are the most frequent starting points of rides. They might be populated areas so bussiness advice is that you should focus more on these factors Customer Support in Local Languages,Address Regulatory Challenges,Enhance Safety Features,Optimize Driver Incentives,Expand Service Offerings ',
    summary: "",
  },
  {
    imageUrl: "top5mostmiles_date.png",
    title: "Top dates with most miles",
    business_advice:
      "Based on Uber data, analysis reveals that on specific holidays and peak times, rides tend to cover maximum miles. Uber should strategize for these occasions in future years by developing a comprehensive plan and implementing additional services. This proactive approach will enable Uber to efficiently manage ride volumes and capitalize on increased demand during these periods and to get more rides",
    summary: "",
  },
  {
    imageUrl: "top5mostmiles_route(start_stop).png",
    title: "Most longest routes ",
    business_advice:
      'Based on Uber data, routes such as "Cary to Morrisville and vice versa" are identified as the longest in terms of miles covered. Therefore, Uber should consider planning featured offers specifically for this route and prioritize attention towards its optimization.',
    summary: "",
  },
  {
    imageUrl: "top5_most_frequent_categories_histogram_style.png",
    title: "Rides based on category",
    business_advice:
      " According to Uber data, individuals predominantly utilize the service for business purposes rather than personal commitments. This presents a significant opportunity in the business sector. By focusing additional promotional efforts towards office workers and enhancing their service offerings, we can capitalize on this trend effectively.",
    summary: "",
  },
];

const App = () => {
  return (
    <div className="App" style={{textDecoration:"none"}}>
       <Router>
      <Navbar/>
        <Routes>
          <Route
            exact
            path="/insight/:index"
            element={
              <>
                {" "}
                <InsightDetails insights={insights} />
              </>
            }
          />
          <Route
            exact
            path="/"
            element={
              <>
                <main id="#home">
                  <InsightsGallery insights={insights} />
                </main>

                <footer className="footer bg-dark text-light py-3 mt-5">
                  <Container>
                    <p className="mb-0">
                      © 2024 haroontech. All rights reserved.{" "}
                    </p>
                  </Container>
                </footer>
              </>
            }
          />
          <Route exact path="/report" element={<Report />} />
          <Route exact path="/dataset" element={<Dataset />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
