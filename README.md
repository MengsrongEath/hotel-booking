# Hotel Booking System

A full-stack hotel booking application with React frontend, Spring Boot backend, and MySQL database, all containerized with Docker.

## Project Structure

```
hotel-booking/
├── frontend/          # React frontend application
├── backend/           # Spring Boot backend API
├── dashboard/         # Admin dashboard (React)
├── database/          # MySQL database with init scripts
├── docker-compose.yml # Docker orchestration
└── README.md         # This file
```

## Quick Start

### Prerequisites
- [Docker](https://www.docker.com/get-started) installed on your machine
- [Git](https://git-scm.com/) for version control
- Code editor (VS Code recommended)

### 1. Clone the Repository
```bash
git clone <repository-url>
cd hotel-booking
```

### 2. Build and Run the Application
```bash
docker-compose up --build
```

### 3. Access the Applications
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8080
- **Dashboard**: http://localhost:3000 (admin panel)
- **Database**: MySQL on port 3306

## Development Workflow

### Starting Development
1. **Pull latest changes**:
   ```bash
   git pull origin main
   ```

2. **Start the application**:
   ```bash
   # Run in foreground (see logs)
   docker-compose up --build
   
   # Or run in background
   docker-compose up -d --build
   ```

3. **Check running containers**:
   ```bash
   docker-compose ps
   ```

### Making Changes

#### Frontend Development
- Navigate to `/frontend` directory
- Make your React components changes
- The container will auto-reload on file changes

#### Backend Development
- Navigate to `/backend` directory
- Make your Spring Boot changes
- Rebuild container after major changes:
  ```bash
  docker-compose up --build backend
  ```

#### Database Changes
- Update `/database/data.sql` for schema changes
- Rebuild database container:
  ```bash
  docker-compose down
  docker-compose up --build database
  ```

### Stopping the Application
```bash
# Stop all containers
docker-compose down

# Stop and remove volumes (WARNING: deletes database data)
docker-compose down -v
```

## Team Git Workflow

### Before Starting Work
```bash
# 1. Switch to main branch
git checkout main

# 2. Pull latest changes
git pull origin main

# 3. Create a new feature branch
git checkout -b feature/your-feature-name
```

### Working on Features
```bash
# 1. Make your changes
# 2. Add files to staging
git add .

# 3. Commit with descriptive message
git commit -m "Add: hotel room booking functionality"

# 4. Push to your feature branch
git push origin feature/your-feature-name
```

### Commit Message Conventions
Use clear, descriptive commit messages:
- `Add: new feature or functionality`
- `Fix: bug fixes`
- `Update: modifications to existing features`
- `Remove: deleted files or features`
- `Refactor: code improvements without functional changes`

**Examples:**
```bash
git commit -m "Add: user authentication system"
git commit -m "Fix: booking date validation error"
git commit -m "Update: hotel room search filters"
```

### Merging Changes
1. **Create Pull Request** on GitHub/GitLab
2. **Code Review** by team members
3. **Merge** after approval
4. **Delete feature branch** after merge

### Staying Up to Date
```bash
# Regularly sync with main branch
git checkout main
git pull origin main

# Update your feature branch
git checkout feature/your-feature-name
git merge main
```

**Happy Coding!**

*Last updated:22 July 2025*