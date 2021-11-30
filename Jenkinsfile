node {
    def app

    stage('Clone repository') {
        echo 'repository'
        checkout scm
    }

    stage('Build image') {
        echo 'test'
        // app = docker.build("brandonjones085/test")
    }

    stage('Test image') {

        // app.inside {
        //     sh 'echo "Tests passed"'
        // }
    }

    // stage('Push image') {
        
    //     docker.withRegistry('https://registry.hub.docker.com', 'git') {
    //         app.push("${env.BUILD_NUMBER}")
    //         app.push("latest")
    //     }
    // }
}