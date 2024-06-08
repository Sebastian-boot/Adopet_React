import ReportAbandonedAnimalService from "@/api/services/reportAbandonedAnimalService";
import { ReportAnimalTable } from "./ReportAnimalTable"

export const ReportAnimalContainerTable = async() => {
  const { response } = await ReportAbandonedAnimalService.fetch();

  return (
    <section>
     {response && (<ReportAnimalTable data={response.data} />)}
    </section>
  )
}
