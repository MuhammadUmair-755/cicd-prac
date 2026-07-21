# Nexovate Technologies — React App with Full CI/CD on AWS

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Multi--stage-2496ED?logo=docker&logoColor=white)
![Jenkins](https://img.shields.io/badge/Jenkins-Pipeline-D24939?logo=jenkins&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-ECS%20%7C%20ECR%20%7C%20ALB-FF9900?logo=amazonwebservices&logoColor=white)

A production-style **CI/CD project**: a React website for a fictional software company
(Nexovate Technologies, Lahore, Pakistan), containerized with Docker and deployed to
**AWS ECS** through a fully automated **Jenkins pipeline** — every `git push` goes live
with zero manual steps.

> The React app is intentionally simple (static data, no backend). The real focus of
> this repository is the **DevOps pipeline around it**.

---

## 🏗️ Infrastructure Architecture

```mermaid
flowchart TB
    User(("👤 Users"))
    DNS["🌐 Duck DNS domain<br/>(cron-updated A record)"]

    subgraph AWS["☁️ AWS Cloud — ap-south-1"]
        subgraph CI["CI Server"]
            Jenkins["🔧 Jenkins on EC2<br/>Java 17 · Docker · AWS CLI<br/>IAM instance role"]
        end

        ECR[("📦 Amazon ECR<br/>nexovate-web<br/>:latest + :BUILD_NUMBER")]

        subgraph Runtime["Application Runtime"]
            ALB["⚖️ Application Load Balancer<br/>listener :80"]
            TG["🎯 Target Group<br/>health check GET /"]
            subgraph ECS["ECS Cluster — nexovate-cluster"]
                T1["🐳 Fargate Task<br/>Nginx + React build"]
                T2["🐳 Fargate Task<br/>(scales / replaces)"]
            end
        end
    end

    GitHub["🐙 GitHub<br/>MuhammadUmair-755/cicd-prac"]

    User --> DNS --> ALB
    ALB --> TG
    TG --> T1
    TG -.-> T2
    GitHub -- "webhook :8080" --> Jenkins
    Jenkins -- "docker push" --> ECR
    ECR -- "pull :latest" --> ECS
    Jenkins -- "ecs update-service" --> ECS
```

**Key design points**

- ECS tasks are **disposable** — every deployment replaces them and their IPs change.
  The ALB is the stable entry point; the ECS service auto-registers new tasks into the
  target group and drains old ones, giving **zero-downtime deploys**.
- The Jenkins EC2 instance uses an **IAM role** (ECR push + ECS deploy) — no AWS keys
  are stored anywhere in Jenkins or the repo.
- Duck DNS can only store IP addresses (no CNAME), so a small **cron script** on the
  EC2 instance re-resolves the ALB's IP every 5 minutes and updates the domain.

---

## 🔄 CI/CD Pipeline Flow

```mermaid
sequenceDiagram
    autonumber
    actor Dev as 👤 Developer
    participant GH as 🐙 GitHub
    participant JK as 🔧 Jenkins (EC2)
    participant ECR as 📦 Amazon ECR
    participant ECS as ☁️ ECS Service
    participant ALB as ⚖️ Load Balancer

    Dev->>GH: git push (main)
    GH->>JK: Webhook trigger
    JK->>GH: Checkout source
    JK->>JK: docker build (multi-stage)<br/>Node build → Nginx image
    JK->>ECR: Login via AWS CLI (IAM role)
    JK->>ECR: Push :BUILD_NUMBER and :latest
    JK->>ECS: update-service --force-new-deployment
    ECS->>ECR: Pull :latest image
    ECS->>ALB: Register new task in target group
    ALB->>ALB: Health checks pass ✅
    ECS->>ALB: Drain & stop old task
    ALB-->>Dev: 🌍 New version live (zero downtime)
```

### Pipeline stages (Jenkinsfile)

| Stage | What it does |
| --- | --- |
| **Checkout** | Pulls the latest code from GitHub |
| **Build Docker Image** | Multi-stage build: Node compiles the app, Nginx serves it |
| **Login to ECR** | Authenticates Docker to the private ECR registry via AWS CLI |
| **Push to ECR** | Pushes `:BUILD_NUMBER` (traceability) and `:latest` tags |
| **Deploy to ECS** | Forces a new deployment so ECS rolls out the fresh image |

---

## 🐳 Docker (multi-stage build)

```mermaid
flowchart LR
    subgraph S1["Stage 1 — node:20-alpine"]
        A["COPY package*.json"] --> B["npm ci"] --> C["COPY source"] --> D["npm run build<br/>→ /app/dist"]
    end
    subgraph S2["Stage 2 — nginx:alpine"]
        E["COPY nginx.conf<br/>(SPA fallback)"] --> F["COPY dist from Stage 1<br/>→ /usr/share/nginx/html"]
    end
    D -- "only the static bundle" --> F
    F --> G(["Final image ~50 MB<br/>no Node, no node_modules"])
```

The Nginx config includes an SPA fallback (`try_files ... /index.html`) so React Router
routes like `/about` survive a page refresh, plus long-lived caching for hashed assets.

---

## 🖥️ The Application

React 19 + Vite + React Router v7, plain CSS (no Tailwind, no TypeScript, no backend).
Seven routed pages — Home, About, Services, Projects, Team, Contact, custom 404 — with
all content driven by static data files in `src/data/`. Fully responsive with a mobile
hamburger menu. All company details are fictional; images load from royalty-free URLs.

## 🚀 Run Locally

```bash
# Development
npm install
npm run dev            # http://localhost:5173

# Production build
npm run build
npm run preview

# Docker (same image the pipeline ships)
docker build -t nexovate-web .
docker run -p 8080:80 nexovate-web   # http://localhost:8080
```

## 📁 Repository Structure

```
├── Dockerfile          # Multi-stage build (Node → Nginx)
├── nginx.conf          # SPA fallback + asset caching
├── .dockerignore
├── Jenkinsfile         # CI/CD pipeline definition
├── index.html
├── vite.config.js
└── src/
    ├── main.jsx        # App bootstrap (React + Router)
    ├── App.jsx         # Layout shell + routes
    ├── components/     # Navbar, Footer, cards, shared UI
    ├── pages/          # One component per route
    ├── data/           # All static content (no hardcoding in components)
    └── styles/         # Global CSS variables & shared styles
```

## 🔮 Possible Improvements

- HTTPS via ACM certificate on the ALB (requires a CNAME-capable DNS provider)
- Infrastructure as Code (Terraform) instead of console-built resources
- Pipeline test stage (lint + unit tests) before the Docker build
- Slack/email notifications on pipeline success or failure
- Blue/green deployments with CodeDeploy

---

*Built as a hands-on DevOps learning project — React → Docker → Jenkins → AWS.*
