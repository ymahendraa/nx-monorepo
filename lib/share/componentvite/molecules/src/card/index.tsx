import React from 'react';
import {
  HeadCard,
  HeadCardProps,
  FooterCard,
  FooterCardProps,
} from '@nx-monorepo/atom';

export interface CardProps {
  styleFooter?: string;
  styleHead?: string;
  propsFooter?: FooterCardProps;
  propsHead?: HeadCardProps;
  children?: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  styleFooter,
  styleHead,
  propsFooter,
  propsHead,
  children,
  className,
}) => {
  return (
    <div
      className={`${className} flex flex-col justify-center items-center relative`}
    >
      <div className={`${styleHead}`}>
        <HeadCard titleStyle="font-bold text-lg" {...propsHead} />
      </div>
      <div className={`${styleFooter}`}>
        <FooterCard {...propsFooter}>{children}</FooterCard>
      </div>
    </div>
  );
};
