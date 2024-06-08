import { ApiResources } from "@/config/api"
import FetchService from "./fetchService";
import { ReportAbandonedAnimal, ReportAbandonedAnimalAddType, ReportAbandonedAnimalResponse } from "../models/reportAbandonedAnimal";
import { ServiceResponse } from "../models/fetch";

class ReportAbandonedAnimalService {
    static url = process.env.API_LARAVEL_URL + ApiResources.REPORT_ABANDONED_ANIMAL;

    public static async fetch() {
        return await FetchService.get<ReportAbandonedAnimalResponse>({url: this.url});
    }

    public static async post(body: ReportAbandonedAnimalAddType): Promise<ServiceResponse<ReportAbandonedAnimal>> {
        return await FetchService.post<ReportAbandonedAnimal>({
            url: this.url,
            body
        });
    }

}

export default ReportAbandonedAnimalService;