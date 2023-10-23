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
        <span className={`${textStyle} -mr-3 mb-3`}>$</span>
        <h1 className={`${priceStyle}`}>{price?.replace('$', '')}</h1>
        <span className={`${textStyle}`}>per <br /> month</span>
      </div>
      {children}
    </div>
  );
};
