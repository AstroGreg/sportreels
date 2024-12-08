import { useState } from "react";

export const useShare = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard
        .writeText(text)
        .then(() => true)
        .catch(() => false);
    } else {
      // Fallback for unsupported environments
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed"; // Avoid scrolling
      textarea.style.opacity = "0"; // Make it invisible
      document.body.appendChild(textarea);
      textarea.select();
      const success = document.execCommand("copy");
      document.body.removeChild(textarea);
      return success;
    }
  };

  const handleShare = () => {
    const currentUrl = window.location.href; // Get the current URL
    const success = copyToClipboard(currentUrl);

    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Hide success message after 2 seconds
    } else {
      alert("Failed to copy link");
    }
  };

  return { copied, handleShare };
};
