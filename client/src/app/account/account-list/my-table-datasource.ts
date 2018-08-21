import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface MyTableItem {
  displayName: string;
  username: string;
  password: string;
  role: string;
  active: boolean;
  id: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: MyTableItem[] = [
  { id: 1, displayName: 'Hydrogen', username: 'abc', password: '******', role: 'user', active: true },
  { id: 2, displayName: 'Hydrogen', username: 'abc', password: '******', role: 'user', active: false },
  { id: 3, displayName: 'Hydrogen', username: 'abc', password: '******', role: 'user', active: false },
  { id: 4, displayName: 'Hydrogen', username: 'abc', password: '******', role: 'user', active: true },
  { id: 5, displayName: 'Hydrogen', username: 'abc', password: '******', role: 'user', active: true },
  { id: 6, displayName: 'Hydrogen', username: 'abc', password: '******', role: 'user', active: true },
  { id: 7, displayName: 'Hydrogen', username: 'abc', password: '******', role: 'user', active: true },
  { id: 8, displayName: 'Hydrogen', username: 'abc', password: '******', role: 'user', active: true },
  { id: 9, displayName: 'Hydrogen', username: 'abc', password: '******', role: 'user', active: true },
  { id: 10, displayName: 'Hydrogen', username: 'abc', password: '******', role: 'user', active: true }
];

/**
 * Data source for the MyTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class MyTableDataSource extends DataSource<MyTableItem> {
  data: MyTableItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<MyTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginators length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() { }

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: MyTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: MyTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'displayName': return compare(a.displayName, b.displayName, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/displayName columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
