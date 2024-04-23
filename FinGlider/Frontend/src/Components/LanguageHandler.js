import React from "react";
import { useLanguageContext } from "./contexts/LanguageContext";

export default function LanguageHandler() {
  const { language, changeLanguage } = useLanguageContext();

  return (
    <select value={language} onChange={(e) => changeLanguage(e.target.value)}>
      <option value="en">English</option>
      <option value="de">German</option>

    </select>
  );
}