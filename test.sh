#!/bin/bash
_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

~/bin/oc cluster up \
  --routing-suffix='172.17.0.1.nip.io' \
  --public-hostname='172.17.0.1' \
  --base-dir='/var/tmp/openshift.local.clusterup' \
  --tag=latest \
  --image='docker.io/openshift/origin-${component}:${version}' \
  --enable='router,service-catalog,web-console'
