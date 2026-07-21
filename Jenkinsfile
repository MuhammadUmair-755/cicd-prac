pipeline {
    agent any

    environment {
        AWS_REGION     = 'ap-south-1'                 // change to your region, e.g. ap-south-1
        AWS_ACCOUNT_ID = '058416978522'              // your 12-digit AWS account ID
        ECR_REPO       = 'nexovate-web'              // ECR repository name
        ECR_REGISTRY   = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com"
        IMAGE          = "${ECR_REGISTRY}/${ECR_REPO}"
        ECS_CLUSTER    = 'nexovate-cluster'          // ECS cluster name
        ECS_SERVICE    = 'nexovate-service'          // ECS service name
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                // Tag with both the unique build number and "latest"
                sh 'docker build -t $IMAGE:$BUILD_NUMBER -t $IMAGE:latest .'
            }
        }

        stage('Login to ECR') {
            steps {
                sh '''
                    aws ecr get-login-password --region $AWS_REGION \
                      | docker login --username AWS --password-stdin $ECR_REGISTRY
                '''
            }
        }

        stage('Push to ECR') {
            steps {
                sh 'docker push $IMAGE:$BUILD_NUMBER'
                sh 'docker push $IMAGE:latest'
            }
        }

        stage('Deploy to ECS') {
            steps {
                // Task definition points at :latest, so a forced new
                // deployment makes ECS pull the image we just pushed
                sh '''
                    aws ecs update-service \
                      --cluster $ECS_CLUSTER \
                      --service $ECS_SERVICE \
                      --force-new-deployment \
                      --region $AWS_REGION
                '''
            }
        }
    }



    post {
        success {
            echo "Deployed build #${BUILD_NUMBER} to ECS."
        }
        always {
            // Keep the Jenkins EC2 disk from filling up with old images
            sh 'docker image prune -f'
        }
    }
}
