Start minikube with auditing enabled:

`mk start --feature-gates=Auditing=true`

Should add the following options to the apiserver:

```
--audit-policy-file=/etc/kubernetes/audit/audit.yaml
--audit-log-path=/var/log/kubernetes/audit/audit.log
--audit-log-maxage=2
```

Output to file:

`minikube ssh -- cat /var/log/kubernetes/audit/audit.log > /git/stuff/audit2rbac/example-asb-audit.log`

Output directly into audit2rbac:

`minikube ssh -- cat /var/log/kubernetes/audit/audit.log | audit2rbac -f- --serviceaccount automation-broker:automation-broker > /git/stuff/audit2rbac/broker-rbac.yml`
