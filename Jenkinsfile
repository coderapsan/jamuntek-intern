pipeline{
    agent any
      
    stages {
        stage('pre Build') {
            steps {
                // git branch: 'prod', url: 'https://github.com/coderapsan/jamuntek-intern.git'
                // sh 'ls -ltr'
                // sh 'cat intern.pem'
                // sh 'chmod 400 intern.pem'
                // sh 'id'
                 sh 'git branch 'prod' '''
                 sh 'ls -ltr'

            }
        }
        stage('Build') {
            steps {
            
                 sh 'cp -r . ~/tmp'
            }
        }
    }
}
