import React from 'react';
import {
  HeadCard,
  HeadCardProps,
  FooterCard,
  FooterCardProps,
  CircleIcon,
  CircleIconProps
} from '@nx-monorepo/atom';


export interface CardProps {
  styleIcon?: string;
  styleFooter?: string;
  styleHead?: string;
  propsIcon?: CircleIconProps;
  propsFooter?: FooterCardProps;
  propsHead?: HeadCardProps;
  children?: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  styleIcon,
  styleFooter,
  styleHead,
  propsIcon,
  propsFooter,
  propsHead,
  children,
  className,
}) => {
  return (
    <div
      className={`${className} flex flex-col justify-center items-center relative`}
    >
      <div className={`${styleIcon}`}>
        <CircleIcon {...propsIcon} />
      </div>
      <div className={`${styleHead}`}>
        <HeadCard titleStyle="font-bold text-lg" {...propsHead} />
      </div>
      <div className={`${styleFooter}`}>
        <FooterCard {...propsFooter}>{children}</FooterCard>
      </div>
    </div>
  );
};
