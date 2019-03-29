import ClusterClient from './client';

export class ClientFactoryUnknownClusterError extends Error {
  constructor() {
    super();
    Object.setPrototypeOf(this, ClientFactoryUnknownClusterError.prototype);
  }
}

export class ClientFactoryMissingUserError extends Error {
  constructor() {
    super();
    Object.setPrototypeOf(this, ClientFactoryMissingUserError.prototype);
  }
}

export class ClientFactory {
  private getState: () => any;

  constructor(getState: () => any) {
    this.getState = getState;
  }

  public hostCluster() {
    const state = this.getState();
    if(!!state.auth.user) {
      throw new ClientFactoryMissingUserError();
    }
    return this.genClient(state.auth.user.token);
  }

  public forCluster(clusterName: string) {
    const state = this.getState();
    const clusters = state.kube.clusterregistry_k8s_io.clusters;
    const clusterNotFound = !(clusterName in clusters);
    if(clusterNotFound) {
      throw new ClientFactoryUnknownClusterError();
    }
    const cluster = clusters[clusterName];
    return this.genClient(cluster.token);
  }

  private genClient(token: string) ClusterClient {
    const client = new ClusterClient(token);
    return client;
  }
}
