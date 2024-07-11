import { Pipe, PipeTransform } from '@angular/core';
import { Posts } from "../pipes.component";

@Pipe({
  name: 'filter',
  standalone: true,
  pure: false
})

export class FilterPipe implements PipeTransform {
  transform(
    posts: Posts[],
    search: string = "",
    searchField: string = "title",
  ): Posts[]
  {
    if (!search.trim()) {
      return posts;
    }

    return posts.filter((post: Posts): boolean => {
      return post[searchField].toLowerCase().includes(search.toLowerCase());
    })
  }
}
