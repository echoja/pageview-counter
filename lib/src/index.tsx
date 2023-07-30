"use client";

import React from "react";

export interface IReactIconPickerProps {
  icons: string[];
  onSelect: (icon: string) => void;
}

export const ReactIconPicker: React.FC<IReactIconPickerProps> = ({
  icons,
  onSelect,
}) => {
  return (
    <ul>
      {icons.map((icon) => (
        <li key={icon} style={{ color: "blue" }} onClick={() => onSelect(icon)}>
          {icon}
        </li>
      ))}
      1234
    </ul>
  );
};

export default ReactIconPicker;
