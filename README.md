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


## Instalación y Configuración

### Pre-requisitos
- Tener Docker y Docker Compose instalados.

### Inicialización
1. Clonar el repositorio desde GitHub:
    ```bash
    git clone https://github.com/Duartini/password-manager.git
    ```
    
2. Navegar al directorio del proyecto:
    ```bash
    cd password-manager
    ```
    
3. Construir y arrancar los contenedores Docker:
    ```bash
    docker compose up -d --build
    ```

### Acceder a la base de datos
1. Acceder al contenedor de la base de datos:
    ```bash
    docker exec -it <nombre_contenedor>-db-1 /bin/sh
    ```
    
2. Conectarse a PostgreSQL:
    ```bash
    psql -U user -d password_manager
    ```
    


### Visualización de datos
1. Listar todas las tablas:
    ```sql
    \dt
    ```
    
2. Mostrar todos los usuarios:
    ```sql
    SELECT * FROM users;
    ```
    
3. Mostrar todas las contraseñas:
    ```sql
    SELECT * FROM passwords;
    ```
