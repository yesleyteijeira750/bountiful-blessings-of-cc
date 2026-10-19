import React from "react";
import LegalPage from "@/components/site/LegalPage";
import { PRIVACY } from "@/lib/legal";

export default function Privacy() {
  return <LegalPage doc={PRIVACY} />;
}