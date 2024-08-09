# Password Manager

Password Manager is a web application developed to securely store and manage user passwords. It uses Docker containers to manage and separate the different components of the system, ensuring a modular and scalable architecture.

## Installation and Configuration

### Pre-requisites
- Have Docker and Docker Compose installed.

### Initialization
1. Clone the repository from GitHub:
    bash
    git clone https://github.com/Duartini/password-manager.git
    
2. Navigate to the project directory:
    bash
    cd password-manager
    
3. Build and start the Docker containers:
    bash
    docker compose up -d --build
    

### Create the database
1. Access the database container:
    bash
    docker exec -it <name container>-db-1 /bin/sh
    
2. Connect to PostgreSQL:
    bash
    psql -U user -d password_manager
    
3. Create the users table:
    sql
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    
4. Create the passwords table:
    sql
    CREATE TABLE passwords (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        name VARCHAR(255) NOT NULL,
        value TEXT NOT NULL,
        iv TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    

### Data display
1. List all tables:
    sql
    \dt
    
2. Display all users:
    sql
    SELECT * FROM users;
    
3. Display all passwords:
    sql
    SELECT * FROM passwords;
    
