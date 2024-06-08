"use client"

import { Animal } from "@/api/models/animal";
import { ReportAbandonedAnimal } from "@/api/models/reportAbandonedAnimal";
import { Avatar, Table } from "antd";

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

interface Props {
  data: ReportAbandonedAnimal[]
}

export const ReportAnimalTable: React.FC<Props> = ({ data }) => {
  return (
    <Table columns={columns} dataSource={data} rowKey="id" />
  )
}