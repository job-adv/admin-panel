import {TableLazyLoadEvent} from "primeng/table";
import {DelayManager} from "./delay.manager";
import {GenericSearchRequest} from "../../models/shared/generic-search.request";
import {IdentifiableEntity} from "../../models/shared/identifiable-entity";
import {GenericServiceService} from "../../services/shared/generic-service.service";

export class TableSearchManager<T extends IdentifiableEntity, SearchRequest extends GenericSearchRequest> {

  private delayManager = new DelayManager();
  private pageSize = 15;
  private searchRequest: SearchRequest;
  private service: GenericServiceService<T, SearchRequest, any, any>;

  constructor(pageSize: number,
              searchRequest: SearchRequest,
              service: GenericServiceService<T, SearchRequest, any, any>,
  ) {
    this.pageSize = pageSize;
    this.searchRequest = searchRequest;
    this.service = service;
  }

  public first = 0;
  public items: T[] = [];
  public totalItemsCount = 0;

  public searching = false;

  private currentPageIndex = -1;
  private previousOffsetIndicatorsStack: (any[] | undefined)[] = [];

  private nextOffsetIndicators: any[] | undefined;
  private currentOffsetIndicators: any[] | undefined;

  public lockLongDelayAndRefreshItems() {
    this.searching = true;
    this.delayManager.delayThenOperate(() => this.refreshItems(), 1000);
  }

  public lockDelayAndRefreshItems() {
    this.searching = true;
    this.delayManager.delayThenOperate(() => this.refreshItems());
  }

  public refreshItems(): void {
    this.first = 0;
    this.currentPageIndex = 0;
    this.nextOffsetIndicators = undefined;
    this.currentOffsetIndicators = undefined;
    this.previousOffsetIndicatorsStack = [];

    this.search();
  }

  public search(event: TableLazyLoadEvent | undefined = undefined): void {
    const first = event?.first || 0;
    const pageSize = this.pageSize;
    const pageIndex = first / pageSize;

    const forward = pageIndex > this.currentPageIndex;
    let targetOffsetIndicator: any[] | undefined = undefined;

    if (forward) {
      // Move to the next page
      targetOffsetIndicator = this.nextOffsetIndicators;
    } else {
      // Move to the previous page
      targetOffsetIndicator = this.previousOffsetIndicatorsStack.pop() || undefined;
    }

    this.searchRequest.offsetIndicators = targetOffsetIndicator;
    this.searchRequest.pageIndex = 0;
    this.searchRequest.pageSize = this.pageSize;

    this.searching = true;
    this.service.search(this.searchRequest).subscribe(
      {
        next: response => {
          this.items = response.items;
          this.totalItemsCount = response.totalItemsCount;

          if (forward) {
            this.previousOffsetIndicatorsStack.push(this.currentOffsetIndicators);
            this.currentOffsetIndicators = targetOffsetIndicator;
            this.nextOffsetIndicators = response.nextOffsetIndicators;
          } else {
            this.currentOffsetIndicators = targetOffsetIndicator;
            this.nextOffsetIndicators = response.nextOffsetIndicators;
          }

          this.searching = false;
          this.currentPageIndex = pageIndex;
        },

        error: (e) => {
          this.searching = false;
          console.error(e);
        }
      }
    );
  }
}
