"use strict";
exports.__esModule = true;
var MigResource;
(function (MigResource) {
    MigResource["MigPlan"] = "migplans";
    MigResource["MigAssetCollection"] = "migassetcollections";
    MigResource["MigStorage"] = "migstorage";
    MigResource["MigStage"] = "migstages";
    MigResource["MigMigration"] = "migmigrations";
})(MigResource = exports.MigResource || (exports.MigResource = {}));
console.log("MigResource type: " + MigResource.MigPlan.constructor.toString());
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
