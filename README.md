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

# JENKINS
 # install jenkins in a vm/ec2 (ubuntu)
  # install java/jdk
  
  sudo apt update
  
  sudo apt install openjdk-8-jdk
  
  # Jenkins Debian repository
  
  wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key | sudo apt-key add -
  
  sudo sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
  
  # Install Jenkins
  
  sudo apt update
  
  a basic pipeline will have a trigger followed by pipeline script with multiple stages like build, test, release etc.
  to check what more can be present in a pipeline refer https://jenkinsci.github.io/job-dsl-plugin/#path/pipelineJob
  
  sudo apt install jenkins
  
  # Verify installation
  
  systemctl status jenkins
  
  # install job dsl

  manage jenkins > available > job dsl



