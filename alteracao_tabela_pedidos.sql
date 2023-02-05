ALTER TABLE `pi_meninadossapatos`.`pedido` 
CHANGE COLUMN `endereço_entrega` `codigo_sku` VARCHAR(45) NULL DEFAULT NULL ,
CHANGE COLUMN `opcao_entrega` `quantidade` VARCHAR(45) NULL DEFAULT NULL ,
CHANGE COLUMN `forma_pagamento` `numero` VARCHAR(45) NULL DEFAULT NULL ;
