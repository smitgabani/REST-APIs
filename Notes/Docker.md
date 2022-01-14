# Docker Notes

> "Containerization involves encapsulating or packaging up software code and all its dependencies so that it can run uniformly and consistently on any infrastructure."

### What Docker lets us do / Why we need Docker?
- Develop and run the application inside an isolated environment (known as a container) that matches your final deployment environment.
- Put your application inside a single file (known as an image) along with all its dependencies and necessary deployment configurations.
- And share that image through a central server (known as a registry) that is accessible by anyone with proper authorization.

The idea behind containerization is putting your applications inside a self-contained package, making it portable and reproducible across various environments.

> ### Docker is a open-source containerization platform that allows you to containerize your applications, share them using public or private registries, and also to orchestrate them.

```
> docker run hello-world
> docker ps -a                      // all the containers currently running or have in the past.
```

## Key Terms and Concepts

### Container 

A container is an abstraction at the application layer that packages code and dependencies together. Instead of virtualizing the entire physical machine, containers virtualize the host operating system only.


### Image
Images are multi-layered self-contained files that act as the template for creating containers. They are like a frozen, read-only copy of a container. Images can be exchanged through registries.
They are multi-layered read-only files carrying your application in a desired state inside them.

### Registry
An image registry is a centralized place where you can upload your images and can also download images created by others.

## Docker Architecture

**Docker Daemon**: The daemon (dockerd) is a process that keeps running in the background and waits for commands from the client. The daemon is capable of managing various Docker objects.

**Docker Client**: The client  (docker) is a command-line interface program mostly responsible for transporting commands issued by users.

**REST API**: The REST API acts as a bridge between the daemon and the client. Any command issued using the client passes through the API to finally reach the daemon.

> "Docker uses a client-server architecture. The Docker client talks to the Docker daemon, which does the heavy lifting of building, running, and distributing your Docker containers".

### Publish at a Port

Containers are isolated environments. Your host system doesn't know anything about what's going on inside a container.