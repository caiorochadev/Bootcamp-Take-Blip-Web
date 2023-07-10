CREATE TABLE pessoas (
    id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR (30) NOT NULL,
    nascimento DATE
)

INSERTO INTO pessoas(nome, nascimento) VALUES ('Nathally', '1990/05/22')
INSERTO INTO pessoas(nome, nascimento) VALUES ('Pedro', '1995/07/17')
INSERTO INTO pessoas(nome, nascimento) VALUES ('Caio', '1996/10/29')
