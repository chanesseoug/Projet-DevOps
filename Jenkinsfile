pipeline {
    agent any

    environment {
        DOCKER_USERNAME = credentials('chanesse03')
        DOCKER_PASSWORD = credentials('Chanesseogn05@')
        IMAGE_NAME = "chanesse03/jenkins-pipeline"
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/chanesseoug/Projet-DevOps'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Login to Docker Hub') {
            steps {
                sh 'echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin'
            }
        }

        stage('Push Docker Image') {
            steps {
                sh 'docker push $IMAGE_NAME'
            }
        }
    }
}
