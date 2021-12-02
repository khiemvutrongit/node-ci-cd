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
        docker.image('dannykvrepo/node-ci-cd').withRun('-p 3306:3306') { c ->
            /* Wait until mysql service is up */
            sh 'while ! mysqladmin ping -h0.0.0.0 --silent; do sleep 1; done'
            /* Run some tests which require MySQL */
            sh 'make check'

            sh "docker logs ${c.id}"
        }
    }
}