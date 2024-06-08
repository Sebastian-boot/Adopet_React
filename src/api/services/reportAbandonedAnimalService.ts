import { ApiResources } from "@/config/api"
import FetchService from "./fetchService";
import { ReportAbandonedAnimalResponse } from "../models/reportAbandonedAnimal";

class ReportAbandonedAnimal {
    static url = process.env.API_URL + ApiResources.REPORT_ABANDONED_ANIMAL;

    public static async fetch() {
        return await FetchService.get<ReportAbandonedAnimalResponse>({url: this.url});
    }

}

export default ReportAbandonedAnimal;