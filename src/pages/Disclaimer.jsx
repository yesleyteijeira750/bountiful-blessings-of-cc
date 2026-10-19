import React from "react";
import LegalPage from "@/components/site/LegalPage";
import { DISCLAIMER } from "@/lib/legal";

export default function Disclaimer() {
  return <LegalPage doc={DISCLAIMER} />;
}