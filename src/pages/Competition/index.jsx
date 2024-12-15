import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Competition } from "../../components/Competition/Competition";

const CompetitionContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { query, filters, searchType } = location.state || {};

  const handleSelectEvent = (videoUrl: string, title: string) => {
    console.log("Selected Event Video:", videoUrl, "Title:", title);
    // Here you can show a video or navigate to a video page
  };

  const handleBack = () => {
    // Navigate back to search page and restore the state
    navigate("/search", {
      state: { query, filters, searchType }
    });
  };

  return (
    <Competition
      competitionName={decodeURIComponent(id || "")}
      onSelectEvent={handleSelectEvent}
      onBack={handleBack}
    />
  );
};

export default CompetitionContainer;
