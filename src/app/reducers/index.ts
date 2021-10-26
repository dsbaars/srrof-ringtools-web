import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { localStorageSync, rehydrateApplicationState } from 'ngrx-store-localstorage';
import { environment } from '../../environments/environment';
import { cbNodeOwnerFeatureKey, cbNodeReducer } from './cb-node-owner.reducer';
import { channelReducer } from './channel.reducer';
import { nodeInfoReducer } from './node-info.reducer';


export interface State {

}

export const reducers: ActionReducerMap<State> = {
  cbNodeOwner: cbNodeReducer,
  channel: channelReducer,
  nodeInfo: nodeInfoReducer
};

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync(
    {
      keys: [cbNodeOwnerFeatureKey],
      rehydrate: true
    })(reducer);
}

export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

//export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
