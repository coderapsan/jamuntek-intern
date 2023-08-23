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
             sh 'rm -Rf ~/tmp'
                sh 'mkdir ~/tmp'
                 sh 'cp -r . ~/tmp'
                sh 'ls -ltr ~/tmp'
                sh 'ssh  -o StrictHostKeyChecking=no -i "intern.pem" ec2-user@43.205.143.89'
                sh 'scp -i "intern.pem" One.js ec2-user@43.205.143.89:/home/ec2-user/'
                sh 'npm -v'
            }
        }
    }
}
