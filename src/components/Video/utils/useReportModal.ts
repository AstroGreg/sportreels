import { useState } from "react";

export const useReportModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openReportModal = () => {
    setIsModalOpen(true);
  };

  const closeReportModal = () => {
    setIsModalOpen(false);
  };

  const handleReportSubmit = (reportData: any) => {
    console.log("Report Submitted: ", reportData);
  };

  return {
    isModalOpen,
    openReportModal,
    closeReportModal,
    handleReportSubmit,
  };
};
