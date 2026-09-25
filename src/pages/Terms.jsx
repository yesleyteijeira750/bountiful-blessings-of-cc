import React from "react";
import LegalPage from "@/components/site/LegalPage";
import { TERMS } from "@/lib/legal";

export default function Terms() {
  return <LegalPage doc={TERMS} />;
}