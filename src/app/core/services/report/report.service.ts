import { Injectable } from "@angular/core";
import { ReportRepository } from "../../repositories/report/report.repository";
import { Observable } from "rxjs";

@Injectable()
export class ReportService {
    constructor(private report: ReportRepository) {}

    get(): Observable<any> {
        return this.report.get();
    }

    delete(id: string): Observable<any> {
        return this.report.delete(id);
    }
}