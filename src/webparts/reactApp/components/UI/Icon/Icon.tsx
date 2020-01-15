import * as React from "react";
import { Icon as FabricIcon } from "office-ui-fabric-react/lib/Icon";
import { mergeStyles } from "office-ui-fabric-react/lib/Styling";

const iconClass = mergeStyles({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 50,
  color: "black",
  backgroundColor: "white",
  fontSize: 40,
  height: 100,
  width: 100,
  margin: 5
});

interface IIconProps {
  iconName: string;
}

export const Icon: React.FC<IIconProps> = ({ iconName }) => (
  <FabricIcon iconName={iconName} className={iconClass} />
);
