"use client"
import React, { useEffect, useState } from 'react';
import { Avatar, Table, Tooltip } from 'antd';
import { Animal } from '@/api/models/animal';
import { ReportAbandonedAnimalResponse } from '@/api/models/reportAbandonedAnimal';
import ReportAbandonedAnimalService from '@/api/services/reportAbandonedAnimalService';


const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Titulo',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Descripción',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Animales relacionados',
    dataIndex: 'animals',
    key: 'animals',
    render: (animals: Animal[]) => (
      <Avatar.Group>
        {animals.map((animal) =>
          <Avatar key={animal.id} src={animal.image} />
        )}
      </Avatar.Group>
    ),
  },
  {
    title: 'Lugar del Abandono',
    dataIndex: 'abandonment_location',
    key: 'abandonment_location',
  },
  {
    title: 'Estado del Abandono',
    dataIndex: 'abandonment_status',
    key: 'abandonment_status',
  },
  {
    title: 'Fecha del Reporte',
    dataIndex: 'report_date',
    key: 'report_date',
  },
];

const PendingRescue: React.FC = () => {
  const [data, setData] = useState<ReportAbandonedAnimalResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sr = await ReportAbandonedAnimalService.fetch();
        if(sr.status()){
          setData(sr.data ?? null)
        }else {
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
      {data && data.success && <Table columns={columns} dataSource={data.data} loading={loading} rowKey="id" />}
    </div>
  );
};

export default PendingRescue;
