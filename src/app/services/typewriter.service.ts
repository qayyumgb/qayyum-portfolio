import { Injectable } from '@angular/core';
import { concat, from, interval, of } from 'rxjs';
import {
  concatMap,
  delay,
  ignoreElements,
  map,
  repeat,
  take,
} from 'rxjs/operators';

interface TypeParams {
  word: string;
  speed: number;
  color?: string;
  backwards?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TypewriterService {
  private type({ word, speed, color = 'black', backwards = false }: TypeParams) {
    return interval(speed).pipe(
      map((x) => ({
        text: backwards
          ? word.substring(0, word.length - x -1)
          : word.substring(0, x + 1),
        color: color,
      })),
      take(word.length)
    );
  }

  typeEffect(word: string, color: string = 'black') {
    return concat(
      this.type({ word, speed: 50, color: color }),
      of('').pipe(delay(1200), ignoreElements()),
      this.type({ word, speed: 30, color: color, backwards: true }),
      of('').pipe(delay(300), ignoreElements())
    );
  }

  getTypewriterEffect(titles: { word: string, color: string }[]) {
    return from(titles).pipe(
      concatMap(({ word, color }) => this.typeEffect(word, color)),
      repeat()
    );
  }
}
