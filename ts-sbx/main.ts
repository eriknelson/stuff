import {
  ClientFactory,
} from './client';

import {
  MigResource
} from './resources';

interface IAnyAction {
  type: string;
  payload: any;
}

function setMigPlans(plans: any): IAnyAction {
  return {
    type: 'SET_MIG_PLANS',
    payload: plans,
  }
}

function alertAction(err: Error): IAnyAction {
  return {
    type: 'ALERT_ACTION',
    payload: err.message,
  }
}

function fetchMigPlans(namespace: string) {
  return dispatch => clientFactory => {
    clientFactory.hostCluster()
      .list(new MigResource(MigResource.Kind.MigPlan, namespace))
      .then(plans => dispatch(setMigPlans(plans)))
      .catch(err => dispatch(alertAction(err)))
  }
}
  clientFactory => {
    try {
      clientFactory.hostCluster()
        .list(new MigResource(MigResource.Kind.MigPlan, namespace))
    } catch(err) {
      // handle error
    }
  }

import { MigResourceGroup } from './resource_groups'

export enum MigResource {
  MigPlan = 'migplans',
  MigAssetCollection = 'migassetcollections',
  MigStorage = 'migstorage',
  MigStage = 'migstages',
  MigMigration = 'migmigrations',
}

console.log(`MigResource type: ${MigResource.MigPlan.constructor.toString()}`);
//interface IKind {
  //kind: string;
  //plural: string;
//}

//interface IResourceGroup {
  //kinds: IKind[];
  //group: string;
  //version: string;
//}

//interface IMigClient {
  //migplans: (string?) => Promise<any>;
//}

//export enum MigResource {
  //MigPlan = 'migplans',
  //MigAssetCollection = 'migassetcollections',
  //MigStorage = 'migstorage',
  //MigStage = 'migstages',
  //MigMigration = 'migmigrations',
//}

//export class ClusterClient {
  //private token: string;
  //private migResources: IResourceGroup = {
    //group: 'migration.openshift.io',
    //version: 'v1alpha1',
    //kinds: [
      //{ kind: 'migplan', plural: 'migplans' },
      //{ kind: 'migassetcollection', plural: 'migassetcollections' },
      //{ kind: 'migstorage', plural: 'migstorage' },
      //{ kind: 'migstage', plural: 'migstages' },
      //{ kind: 'migmigration', plural: 'migmigrations' },
    //]
  //};

  //constructor(token: string) {
    //this.token = token;
    //this.migResources.kinds.forEach(k => {
      //this[k.plural] = () => {
        //console.log(`Hello from ${k.plural}`);
      //}
    //})
  //}
//}

//const client = new ClusterClient('faux-token');
//client.migplans()
