"use client";
import React, { useEffect, useState } from 'react';
import ReportAbandonedAnimal from '@/api/services/reportAbandonedAnimalService';
import { ReportAbandonedAnimalResponse } from '@/api/models/reportAbandonedAnimal';

const PendingRescue: React.FC = () => {
  const [data, setData] = useState<ReportAbandonedAnimalResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sr = await ReportAbandonedAnimal.fetch();
        if(!sr.status()){
          setError(sr.errors[0] as Error)
        }
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data ? <div>{JSON.stringify(data)}</div> : <div>No data available</div>}
    </div>
  );
};

export default PendingRescue;
