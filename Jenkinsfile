node {
    def app

    stage('Clone repository') {
        checkout scm
    }

    stage('Build image') {
        app = docker.build("dannykvrepo/node-ci-cd")
    }

    stage('Test image') {
        app.inside {
            sh 'echo "Tests passed"'
        }
    }

    stage('Push image') {
        
        docker.withRegistry('', 'dockerhub') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }

    stage('Deploy') {
        docker.withServer('tcp://54.254.115.199:2376', 'swarm-certs') {
            docker.image('dannykvrepo/node-ci-cd').withRun('-p 3000:80') {
                sh "curl -i http://${hostIp(c)}:3000/"
            }
        }
    }
}