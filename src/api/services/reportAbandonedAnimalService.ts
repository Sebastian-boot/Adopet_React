import { ApiResources } from "@/config/api"
import FetchService from "./fetchService";
import { ReportAbandonedAnimalResponse } from "../models/reportAbandonedAnimal";

class ReportAbandonedAnimalService {
    static url = process.env.NEXT_PUBLIC_API_LARAVEL_URL + ApiResources.REPORT_ABANDONED_ANIMAL;

    public static async fetch() {
        return await FetchService.get<ReportAbandonedAnimalResponse>({url: this.url});
    }

    public static async post<Fie>() {
        return await FetchService.get<ReportAbandonedAnimalResponse>({url: this.url});
    }

}

export default ReportAbandonedAnimalService;