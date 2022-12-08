import { Component } from '@angular/core';
import { ConfigSmartTable } from '@brisanet/ion';
import { ConfigTable } from '@brisanet/ion/lib/table/utilsTable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  public config: ConfigTable<any> = {
    columns: [
      { key: 'id', label: 'ID', desc: true, sort: true, width: 1 },
      { key: 'name', label: 'Nome', sort: true, width: 50 },
    ],
    data: [
      { id: '123', name: 'Pedro' },
      { id: '789', name: 'José' },
      { id: '456', name: 'João' },
      { id: '741', name: 'João' },
      { id: '852', name: 'João' },
      { id: '123', name: 'Pedro' },
      { id: '789', name: 'José' },
      { id: '456', name: 'João' },
      { id: '741', name: 'João' },
      { id: '852', name: 'João' },
      { id: '123', name: 'Pedro' },
      { id: '789', name: 'José' },
      { id: '456', name: 'João' },
      { id: '741', name: 'João' },
      { id: '852', name: 'João' },
    ],
    pagination: { total: 50, itemsPerPage: 10, offset: 0 },
  };
  public configSmart: ConfigSmartTable<any> = {
    data: [
      { id: '123', name: 'Pedro' },
      { id: '789', name: 'José' },
      { id: '456', name: 'João' },
      { id: '741', name: 'João' },
      { id: '852', name: 'João' },
      { id: '123', name: 'Pedro' },
      { id: '789', name: 'José' },
      { id: '456', name: 'João' },
      { id: '741', name: 'João' },
      { id: '852', name: 'João' },
      { id: '123', name: 'Pedro' },
      { id: '789', name: 'José' },
      { id: '456', name: 'João' },
      { id: '741', name: 'João' },
      { id: '852', name: 'João' },
    ],
    columns: [
      {
        key: 'id',
        label: 'Código',
        sort: true,
      },
      {
        key: 'name',
        label: 'Nome',
        sort: false,
      },
    ],
    pagination: { total: 3, itemsPerPage: 1 },
  };
  public events(event: any) {
    console.log(event);
    console.log('event');
  }
}
