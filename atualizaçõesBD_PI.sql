ALTER TABLE produto ADD genero varchar(50) AFTER codigo_sku;

UPDATE produto SET descricao = 'Sticky Tenis Verde Hospitalar Feminino' where id_produto = 3;

UPDATE produto SET genero = 'Feminino' WHERE descricao LIKE '%feminino%';
UPDATE produto SET genero = 'Masculino' WHERE descricao LIKE '%masculino%';
UPDATE produto SET genero = 'Unissex' WHERE descricao LIKE '%unissex%';

