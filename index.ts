screenLog.init(); // affiche le log de la console
// Cliquez sur la flèche de rafraichissement dans la fenêtre de droite, juste à gauche de l'url pour relancer.

import { Observable, interval } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
const source = Observable.create( observer => {
  observer.next(0);
  setTimeout(() => {
    observer.next(1);
  }, 2000);
});

const exemple = source
  .pipe(switchMap((val: number) => 
    interval(500).pipe(map(el => el * val * 10))
  ));
const subscribe = exemple.subscribe(val => console.log(val));

setTimeout(() => subscribe.unsubscribe(), 8000);