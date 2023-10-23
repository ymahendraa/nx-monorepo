import React from 'react';
import { Card } from '@nx-monorepo/molecules';
import { Button } from '@nx-monorepo/atom';

export interface SubscribeItemProps {
  data: any[];
  cardStyle?: string;
  styleHead?: string;
  styleFooter?: string;
  className?: string;
}

export const SubscibeItem: React.FC<SubscribeItemProps> = ({
  data,
  cardStyle,
  styleFooter,
  styleHead,
  className,
}) => {
  return (
    <div className={`${className}`}>
      {data.map((item: any, index: number) => (
        <div key={index}>
          <Card
            styleIcon={`${item?.containerIconStyle}`}
            styleFooter={`${styleFooter}${index === 1 ? ' bg-gray-200 ' : ''}`}
            styleHead={`${styleHead}`}
            propsIcon={{
              iconUrl: item.urlIcon,
              className: item.iconStlye,
            }}
            propsHead={{ title: item.title.toUpperCase(), subtitle: item.subtitle }}
            propsFooter={{
              price: item.price,
              priceStyle: 'text-[40px] font-semibold',
              textStyle: 'text-gray-700 px-4',
            }}
            className={`${cardStyle}`}
          >
            <Button
              text="GET STARTED"
              className="bg-black text-white rounded-md px-4 py-2"
            />
          </Card>
        </div>
      ))}
    </div>
  );
};
