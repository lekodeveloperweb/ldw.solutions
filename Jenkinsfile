pipeline {
    agent any
    stages {
        stage('Build and test') {
            steps {
                sh 'docker build -t ldw.solutions/site:latest .'
            }
        }
        stage('Cleaning up old containers') {
            steps {
                sh 'docker rm -f ldw-site'
            }
        }
        stage('Run LDW solutions site') {
            steps {
                sh 'docker run -d --network ldwsolutions --name ldw-site ldw.solutions/site:latest'
            }
        }
    }
}
