pipeline{
    agent any
      
    stages {
        stage('pre Build') {
            steps {
                git branch: 'prod', url: 'https://github.com/coderapsan/jamuntek-intern.git'
                sh 'ls -ltr'
                sh 'cat intern.pem'
                sh 'chmod 400 intern.pem'
                sh 'id'
            }
        }
        stage('Build') {
            steps {
              sh 'mkdir ~/tmp'
                 sh 'cp -r . ~/tmp'
            }
        }
    }
}
