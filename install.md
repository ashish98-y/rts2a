# install terraform

  # get wget and unzip
  
      sudo apt-get update

      sudo apt-get install wget unzip
      
  # get terraform zip
  
      wget https://releases.hashicorp.com/terraform/0.11.13/terraform_0.11.13_linux_amd64.zip
      
  # unzip to usr/local/bin
  
      sudo unzip ./terraform_0.11.13_linux_amd64.zip -d /usr/local/bin/
  
  # verify terraform 
  
      terraform -v
      
      
      
# install Ansible

  # search and install ansible
  
    apt search ansible
    
    apt-cache search ansible
    
    sudo apt install ansible
