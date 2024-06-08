import { Animal } from "./animal";

export interface ReportAbandonedAnimal {
    id: number;
    title: string;
    description: string;
    image: string;
    status: string;
    abandonment_location: string;
    abandonment_status: string;
    abandonment_date?: string;
    report_date: string;
    alert: number;
    rescue_date?: string;
    rescue_observations?: string;
    response_time?: string;
    animals: Animal[];
}
export interface ReportAbandonedAnimalResponse {
    success: boolean;
    message: string;
    data:   ReportAbandonedAnimal[];
}