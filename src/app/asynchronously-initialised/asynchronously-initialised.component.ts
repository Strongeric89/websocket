import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';


export class AsynchronouslyInitialisedComponent {
  loadedState: Subject<boolean> = new Subject<boolean>();
  loadedState$ = this.loadedState.asObservable();


  constructor() {
  }
  protected componentLoaded() {

      this.loadedState.next(true);
 
  }
}
