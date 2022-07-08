import React from "react";
import ButtonExample from "./ButtonExample";
import CenteredGrid from "./CenteredGrid";
import CheckboxLabels from "./CheckboxLabels";
import IconLabelButtons from "./IconLabelButtons";
import TemporaryDrawer from "./TemporaryDrawer";
import VirtualizedList from "./VirtualizedList";

export default function MaterialUIExample() {
  return (
    <div>
      <VirtualizedList/>
      <TemporaryDrawer/>
      <CheckboxLabels/>
      <IconLabelButtons/>
      <CenteredGrid />
      <ButtonExample />
    </div>
  );
}
