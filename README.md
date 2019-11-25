# Deployment with very less/no human intervention
# rts2a :deploy to a ubuntu machine
so far we used SCM git,
# PLAN

check in (GIT) > build(npm install in buildserver/JENKINS) > test (run unit/integration/etc tests in JENKINS) > release (package and artifact NA) > provision (have an ubuntu machine -TERRAFORM) > deploy (run our code in provisioned machine -ANSIBLE)> end user /customer

ie in simpler words

GIT > JENKINS >TERRAFORM > ANSIBLE

GIT -> scm

JENKINS > build,test ,release and any other automation.

TERRAFORM > Infrastructure provision

ANSIBLE > Deploy our application with all required dependencies.

NOTE: Jenkins will run ansible and terraform and at this phase,  creation of ami if required will be manual.
lets try to minimise manual effort as much as possible. we will write code wherever possible and automate.



