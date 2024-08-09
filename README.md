# Password Manager

**Password Manager** is a web application developed to securely store and manage user passwords. It uses Docker containers to manage and separate the different components of the system, ensuring a modular and scalable architecture.

## Advantages

- **Token Verification**: Uses tokens to verify user identity, adding an extra layer of security.
- **AES Encryption**: Passwords are encrypted using the Advanced Encryption Standard (AES), ensuring data protection.
- **Backend Encryption and Decryption**: All encryption and decryption processes are performed on the backend, ensuring passwords are never transmitted in plain text.
- **Divided Infrastructure**: The infrastructure is divided into multiple containers, providing greater scalability and robustness.
- **Modular Architecture**: The separation of components allows for easy updates and maintenance of the system.
- **Scalability**: Thanks to Docker, it is easy to scale the different components according to demand.
- **Enhanced Security**: By using containers, each component is isolated, reducing the risk of vulnerabilities.

## Installation and Configuration

### Pre-requisites
- Have Docker and Docker Compose installed.

### Initialization
1. Clone the repository from GitHub:
    ```bash
    git clone https://github.com/Duartini/password-manager.git
    ```
    
2. Navigate to the project directory:
    ```bash
    cd password-manager
    ```
    
3. Build and start the Docker containers:
    ```bash
    docker compose up -d --build
    ```

### Access the database
1. Access the database container:
    ```bash
    docker exec -it <container_name>-db-1 /bin/sh
    ```
    
2. Connect to PostgreSQL:
    ```bash
    psql -U user -d password_manager
    ```
    

### Data display
1. List all tables:
    ```sql
    \dt
    ```
    
2. Display all users:
    ```sql
    SELECT * FROM users;
    ```
    
3. Display all passwords:
    ```sql
    SELECT * FROM passwords;
    ```