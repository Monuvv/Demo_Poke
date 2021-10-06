import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAbility'
})
export class FilterAbilityPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      let hit = false;
      console.log("se:"+it.ability.name);
      console.log("seTEXT:"+searchText);
      const keys = Object.keys(it.ability);
      for (const key of keys) {
        if (typeof it.ability[key] === 'string') {
          const property = it.ability[key] as string;

          if (property.toLowerCase().includes(searchText)) {
            hit = true;
            break;
          }
        }
      }
      return hit;
    });
  }

}


