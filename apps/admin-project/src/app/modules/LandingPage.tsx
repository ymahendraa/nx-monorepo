import React from 'react';
import { SubscibeItem } from '@nx-monorepo/organism';
import { Button, HeadCard, PolygonShape } from '@nx-monorepo/atom';
import { Navbar } from '@nx-monorepo/molecules';

export const LandingPageModules = () => {
  const data = [
    {
      id: 1,
      title: 'Basic',
      subtitle:
        'Add a summary of the plan,its key features, its main benefit,and its deal customer.',
      price: '$59',
      containerIconStyle: 'bg-gray-200 rounded-full p-3 absolute -top-6',
      urlIcon: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
      iconStlye: 'w-[30px] h-[30px] ',
    },
    {
      id: 2,
      title: 'Premium',
      subtitle:
        'Add a summary of the plan,its key features, its main benefit,and its deal customer.',
      price: '$99',
      containerIconStyle: 'bg-gray-200 rounded-full p-3 absolute -top-6',
      urlIcon: 'https://cdn-icons-png.flaticon.com/512/3633/3633274.png',
      iconStlye: 'w-[30px] h-[30px]',
    },
    {
      id: 3,
      title: 'Ultimate',
      subtitle:
        'Add a summary of the plan,its key features, its main benefit,and its deal customer.',
      price: '$149',
      containerIconStyle: 'bg-gray-200 rounded-full p-3 absolute -top-6',
      urlIcon: 'https://www.iconpacks.net/icons/1/free-building-icon-1062-thumb.png',
      iconStlye: 'w-[30px] h-[30px]',

    },
  ];
  return (
    <div className="w-screen">
      <div className="container mx-auto border-gray-200">
        <Navbar title={<img src='data:image/png;base64,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' width={40} height={40} />} className="border-b-2 px-20" />
      </div>
      <div className="py-[100px] px-[200px] border-b-2">
        <HeadCard
          titleStyle="text-[55px] font-semibold text-center text-center"
          subtitleStyle="text-center text-gray-500 px-20 text-[20px]"
          title="Choose a Plan to Grow Your Bussines"
          subtitle="Supporting statement for you headline that extends your value proposition and propmt users to select one of your plans."
        />
      </div>
      <div className="w-full flex justify-center items-center my-20">
        <Button
          className="px-4 py-2 bg-black text-white rounded-l-md"
          text="MONTHLY"
        />
        <Button
          className="border-2 border-black text-black px-4 py-[6.4px] rounded-r-md"
          text="ANNUALY"
        />
        <PolygonShape className='absolute ml-96 mb-8 flex justify-end pr-2 items-center w-[160px] h-[40px]  bg-slate-100'>
          <p className='text-sm'>Shape up to <b>20%!</b></p>
        </PolygonShape>
      </div>
      <div className="flex justify-center mb-20 items-center">
        <SubscibeItem
          className="flex md:flex-row flex-col gap-8 "
          styleHead="pt-10 pb-32 px-14"
          styleFooter="px-14 py-8 w-full border-t-2 border-gray-200"
          cardStyle="border-2 border-gray-200 rounded-md w-[300px]"
          data={data}
        />
      </div>
    </div>
  );
};
