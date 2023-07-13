import * as React from "react";

export interface container {
  children: React.ReactNode;
}

export interface wrapper {
  children: React.ReactNode;
  delay: number;
  duration: number;
}
