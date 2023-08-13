pipeline {
    agent any
    stages {
        stage('Build and test') {
            steps {
                sh 'docker build -t ldw.solutions/apps:latest .'
            }
        }
        stage('Cleaning up old containers') {
            steps {
                sh 'docker rm -f ldw-apps'
            }
        }
        stage('Run LDW solutions apps') {
            steps {
                sh 'docker run -d --network ldwsolutions --name ldw-apps ldw.solutions/apps:latest'
            }
        }
    }
}