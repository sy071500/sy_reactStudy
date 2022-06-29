import React from "react";
import { Page } from "react-onsenui";
import ButtonExample from "./ButtonExample";
import ActionSheetExample from "./ActionSheetExample";
import CheckBoxExample from "./CheckBoxExample";
import FabExample from "./FabExample";
import ListExample from "./ListExample";
import ProgressExample from "./ProgressExample";
//import TabExample from "./TabExample";
import AlertExample from "./AlertExample";

export default function OnsenUIExample() {
  return (
    <Page>
      {/* <TabExample/> */}
      <ProgressExample/>
      <ListExample/>
      <FabExample/>
      <CheckBoxExample/>
      <ActionSheetExample />
      <ButtonExample /> 
      <AlertExample/>
    </Page>
  );
}
