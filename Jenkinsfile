pipeline{
    agent any
    tools {nodejs "node"}
    
    stages{
        stages('Build'){
            steps {
                git branch: 'prod', url: 'https://github.com/coderapsan/jamuntek-intern.git'
                bat 'nvm -v'
            }
        }
    }
}
