import React, {Suspense} from 'react';
import LoadingWheel from '@/components/loading/LoadingWheel';
import {View} from '@/components/webgl/View';
import MiniScene from '@/components/webgl/scenes/MiniScene';

const Page = async () => {
  return (
    <Suspense fallback={<LoadingWheel />}>
      <header>
        <div className="w-full h-16 flex justify-center items-center">Hello World!</div>
      </header>
      <View orbit className="fixed left-0 top-0 w-full h-full flex justify-center items-center z-0">
        <Suspense fallback={null}>
          <MiniScene />
        </Suspense>
      </View>
    </Suspense>
  );
};

export default Page;
