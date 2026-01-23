# Code Craft

Code Craft is a modern web application for sharing, executing, and collaborating on code snippets. Built with Next.js, Convex, and integrated with Clerk for authentication, it provides a seamless experience for developers to create, share, and run code in multiple languages.

## Features

- **Code Execution**: Run code snippets in various programming languages including JavaScript, Python, Java, C++, and more.
- **Snippet Sharing**: Share code snippets with the community, add comments, and star favorites.
- **User Profiles**: Manage personal profiles with saved snippets and execution history.
- **Real-time Collaboration**: Powered by Convex for real-time updates.
- **Authentication**: Secure login with Clerk integration.
- **Responsive Design**: Built with Tailwind CSS for a modern, mobile-friendly interface.

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Backend**: Convex
- **Authentication**: Clerk
- **Styling**: Tailwind CSS
- **Code Editor**: Monaco Editor
- **Monitoring**: Prometheus with prom-client
- **Containerization**: Docker
- **Orchestration**: Kubernetes

## Prerequisites

- Node.js 18+
- Docker
- Kubernetes cluster (for deployment)
- kubectl configured

## Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/Ayushkaranth/Vox.git
   cd Vox
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file with the following:
   ```
   NEXT_PUBLIC_CONVEX_URL=your-convex-url
   CONVEX_DEPLOYMENT=your-convex-deployment
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
   CLERK_SECRET_KEY=your-clerk-secret-key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Docker

### Building the Docker Image

To containerize the application, use the provided Dockerfile:

```bash
docker build -t code-craft .
```

### Running Locally with Docker

```bash
docker run -p 3000:3000 code-craft
```

The Dockerfile is optimized for production builds and includes:
- Node.js 18 Alpine base image for smaller size
- Multi-stage build for efficient caching
- Exposed port 3000 for the Next.js app
- Development command for local testing

### Pushing to Registry

```bash
docker tag code-craft ayushkaranth/code-craft:latest
docker push ayushkaranth/code-craft:latest
```

## Kubernetes Deployment

The application is configured for deployment on Kubernetes using the manifests in the `k8/` directory.

### Key Components

- **Deployment**: Manages the application pods with rolling updates
- **Service**: Exposes the application internally
- **ConfigMap**: Stores non-sensitive configuration
- **Secret**: Stores sensitive data like API keys

### Deploying to Kubernetes

1. Apply the Kubernetes manifests:
   ```bash
   kubectl apply -f k8/
   ```

2. Check deployment status:
   ```bash
   kubectl get pods
   kubectl get services
   ```

3. Access the application:
   ```bash
   kubectl port-forward svc/codecraft-service 3000:80
   ```

The deployment includes:
- Environment variable injection from ConfigMap and Secret
- Health checks and resource limits
- Rolling update strategy for zero-downtime deployments

## Prometheus Monitoring

The application exposes metrics via the `/api/metrics` endpoint using the `prom-client` library.

### Prometheus Setup

1. Deploy Prometheus using the provided configuration:
   ```bash
   kubectl apply -f k8/prometheus.yaml
   ```

2. Access Prometheus dashboard:
   ```bash
   kubectl port-forward svc/prometheus-service 9090:9090
   ```

3. Open [http://localhost:9090](http://localhost:9090) in your browser.

### Metrics Configuration

The Prometheus configuration scrapes metrics from:
- The Next.js application at `/api/metrics`
- Scraping interval: 15 seconds
- Service discovery via Kubernetes service

### Available Metrics

- HTTP request counts and durations
- Application performance metrics
- Custom business metrics (code executions, user interactions)

## API Endpoints

- `GET /api/metrics`: Prometheus metrics endpoint
- Convex functions for data operations
- Authentication endpoints via Clerk

## Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

## License

This project is licensed under the MIT License.
