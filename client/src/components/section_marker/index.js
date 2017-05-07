import React from "react";
import { compose, setDisplayName } from "recompose";

export const SectionMarker = ({ id }) => {
  return (
    <div className="SectionMarker" id={id} />
  );
}

export default compose(
  setDisplayName("SectionMarker"),
)(SectionMarker);
