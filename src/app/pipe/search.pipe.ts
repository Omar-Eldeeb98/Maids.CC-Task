import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(users: any[], id: number): any[] {
    if (!users || !id) {
      return users;
    }

    return users.filter((user) => user.id === id);
  }
}
