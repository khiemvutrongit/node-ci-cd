def branch = 'main'
def gitCommitRrl = 'https://bitbucket.org/roxwin/service-tracker/commits/'
def imageName = 'dannykvrepo/node-ci-cd'
def defaultTag = 'latest'

pipeline {
    agent any

    environment {
        GIT_COMMIT_ID = ""
        GIT_MESSAGE = ""
        GIT_USER = ""
        GIT_DATE = ""
        GIT_TAG = ""
    }

    stages{
        stage('Checkout'){
            steps {
                git branch: branch, credentialsId: 'bitbucket', url: gitRrl
                script {
                    GIT_COMMIT_ID = sh (
                        returnStdout: true, script: "git log -n 1 --pretty=format:'%H'"
                    ).trim()
                    
                    GIT_MESSAGE = sh (
                        returnStdout: true, script: "git log -n 1 --pretty=format:'%s'"
                    ).trim()
                    
                    GIT_USER = sh (
                        returnStdout: true, script: "git log -n 1 --pretty=format:'%an'"
                    ).trim()
                    
                    GIT_DATE = sh (
                        returnStdout: true, script: "git log -n 1 --pretty=format:'%ad'"
                    ).trim()

                    def gitTag = sh (
                        returnStdout: true, script: "git tag -l --points-at HEAD"
                    ).trim()

                    if (gitTag?.trim()) {
                        GIT_TAG = gitTag
                    } else {
                        GIT_TAG = defaultTag
                    }
                }
            }
        }
    }
}