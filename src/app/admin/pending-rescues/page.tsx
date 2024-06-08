import React, { Suspense } from 'react';
import { Skeleton } from 'antd';
import { ReportAnimalContainerTable } from '@/components/reportAbandonedAnimal/ReportAnimalContainerTable';


const PendingRescue = () => {
  return (
    <main>
      <Suspense fallback={<Skeleton/>}>
        <ReportAnimalContainerTable/>
      </Suspense>
    </main>
  );
};

export default PendingRescue;
