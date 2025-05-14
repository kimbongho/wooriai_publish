node("build-agent-1") {
    checkout scm
    def repository = "registry.semyeongsoft.com"
    def version = "latest"
	stage("Build Docker File & push") {
		docker.build("${repository}/woori-ai-frontend:${version}", "-f docker/Dockerfile .").push()
	}
	stage("Swarm Deploy Stack") {
		docker.withServer("tcp://10.10.20.20:2375") {
			try {
				sh "docker stack rm woori-ai-frontend"
				sh "docker image prune -f"
			} catch (exc) {
				echo "not working!"
			}
			sh "sleep 3"
			sh "docker stack deploy --with-registry-auth --compose-file docker/docker-compose-swarm.yaml woori-ai-frontend"
		}
	}
}
