import { ResourceMember } from './common';
 
export class MigResourceGroup {
  private resources = new Set();
  private group: string =  'migration.openshift.io';
  private version: string = 'v1alpha1';

  construcctor() {
    this.resources = new Set();
    this.resources.add(ResourceMember('migrationplan'))
  }
}