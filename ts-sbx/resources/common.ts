export interface IResource {
  listPath(): string;
  namedPath(name: string): string;
}

export interface IGroupVersionKindPlural {
  group: string;
  version: string;
  kindPlural: string
}

export abstract class NamespacedResource {
  protected abstract gvk(): IGroupVersionKindPlural;
  private namespace: string
  constructor(namespace: string) {
    this.namespace = namespace;
  }

  public listPath(): string {
    return [
      '/apis',
      this.gvk().group,
      this.gvk().version,
      'namespaces',
      this.namespace,
      this.gvk().kindPlural,
    ].join('/');
  }

  public namedPath(name): string {
    return namedPath(this.listPath(), name);
  }
}

export abstract class ClusterResource {
  protected abstract gvk(): IGroupVersionKindPlural;
  public listPath(): string {
    return [
      '/apis',
      this.gvk().group,
      this.gvk().version,
      this.gvk().kindPlural,
    ].join('/');
  }
  public namedPath(): string {
    return namedPath(this.listPath(), name);
  }
}

function namedPath(listPath, name) {
    return [listPath, name].join('/');
}