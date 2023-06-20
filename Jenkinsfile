pipeline {

  agent any
  
  stages {
    stage('Checkout-code') {
        steps {
          git 'https://github.com/VijayKeerthan/product-management-frontend-app.git'
        }
    }
    stage('Run') {
        steps {
          sh 'npm install'
          sh 'npm start'
        }
    }
  }
  
  post {
    success {
      echo 'SUCCESSFULL'
    }
    
    failure {
      echo 'FAILED'
    }
  }
}
