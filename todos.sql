CREATE TABLE todos (
    id UUID PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP NOT NULL,
    important BOOLEAN NOT NULL,
    dueDate TIMESTAMP,
    done BOOLEAN NOT NULL
);