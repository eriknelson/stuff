import { MigResourceGroup as Mig } from 'resource_groups';

// 1) Dynamically add methods directly onto object, requires prototype magic,
// and you still need to define intefaces for all of the methods. Moving away
// from this idea in favor of a more strongly typed option.
//
// 2) More generic interface, but want to use stronger types instead of accepting
// something like a string. This means possibly using enums. Want some kind of
// function that can take the specified enum, and based on that, return a
// function or object that then as the verbs on it.
function fetchMigrationClusters() {
  return dispatch => clientFactory => {
    try {
      const client = clientFactory.hostCluster();
      client.resource(MigResourceGroup.Resource)
    } catch(err) {
      // handle error
    }
  }
}
