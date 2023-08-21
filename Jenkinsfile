pipeline{
    agent any
      
    stages {
        stage('Build') {
            steps {
                git branch: 'prod', url: 'https://github.com/coderapsan/jamuntek-intern.git'
                sh 'ls -ltr'
            }
        }
    }
}
