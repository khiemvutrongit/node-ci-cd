def gitRrl = 'https://github.com/khiemvutrongit/node-ci-cd.git'
def branch  = 'main'
def defaultTag = 'latest'
def dockerUrl = 'https://hub.docker.com'
def imageName = 'dannykvrepo/node-ci-cd'
def tokenAccess = '6f6d1c16-5886-4f58-b19c-941f6da40fb6'
def ansibleUrl = 'hosts'
def ansibleHostUrl = './ansible.yml'

pipeline{
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
                git branch: branch, credentialsId: 'git', url: gitRrl
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

        stage('Docker Build, Push'){
            steps {
                dir('./') {
                    withDockerRegistry(credentialsId: 'dockerhub', url: "") {
                        sh "docker build -t ${imageName} ."
                        sh "docker tag ${imageName}:latest ${imageName}:${GIT_TAG}"
                        sh "docker push ${imageName}:${defaultTag}"
                    }
                }
            }
        }

        stage('Run Ansible'){
            steps {
                ansiblePlaybook inventory: ansibleUrl, playbook: ansibleHostUrl
            }
        }
    }

}