pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'git submodule init && git submodule update --recursive'
                sh 'docker compose -f docker-compose.site.yml build'
            }
        }
        stage('Cleaning up old containers') {
            steps {
                sh 'docker compose -f docker-compose.site.yml down --remove-orphans'
            }
        }
        stage('Run LDW solutions site') {
            steps {
                sh 'docker compose -f docker-compose.site.yml up -d'
            }
        }
    }
}