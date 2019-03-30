import {
  ClientFactory,
} from './client/client_factory';

import { MigResource } from './resources/mig';

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
