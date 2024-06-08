import { ReportAbandonedAnimalAddType } from "@/api/models/reportAbandonedAnimal";
import ReportAbandonedAnimalService from "@/api/services/reportAbandonedAnimalService";
import { ReportAnimalsForm } from "@/components/forms/ReportAnimalsForm";
import { FormProps } from "antd";

const onFinish: FormProps<ReportAbandonedAnimalAddType>['onFinish'] = async (values) => {
  const data: ReportAbandonedAnimalAddType = {
    animals: values.animals,
    reporting_user: values.reporting_user,
    title: values.title,
    description: values.description,
    image: values.image,
    abandonment_location: values.abandonment_location,
    abandonment_status: values.abandonment_status,
  };
  try {
    const response = await ReportAbandonedAnimalService.post(data);
    console.log(response);
  } catch (error) {
    console.error('Error:', error);
  }
};

const ReportAbandonedAnimal = () => {


  return (
    <ReportAnimalsForm/>
  )
}

export default ReportAbandonedAnimal;
