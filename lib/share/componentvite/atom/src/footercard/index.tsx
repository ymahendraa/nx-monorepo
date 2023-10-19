import React from 'react';

export interface FooterCardProps {
  price?: string;
  children?: React.ReactNode;
  priceStyle?: string;
  className?: string;
  textStyle?: string;
}

export const FooterCard: React.FC<FooterCardProps> = ({
  price,
  children,
  priceStyle,
  className,
  textStyle,
}) => {
  return (
    <div
      className={`${className} gap-5 flex flex-col justify-center items-center`}
    >
      <div className="flex justify-center items-center">
        <h1 className={`${priceStyle}`}>{price}</h1>
        <span className={`${textStyle}`}>per bulan</span>
      </div>
      {children}
    </div>
  );
};
