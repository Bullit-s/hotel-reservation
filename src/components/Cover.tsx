import React, { FC } from "react";

interface CoverProps {
  coverClass?: string;
}

export const Cover: FC<CoverProps> = ({
  coverClass = "defaultHero",
  children
}) => {
  return <header className={coverClass}>{children}</header>;
};
