SELECT * FROM pi_meninadossapatos.produto;

ALTER TABLE produto CHANGE descricao nome VARCHAR(30);
alter table produto add column descricao varchar(200) after nome;


update produto set descricao = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper in mauris vel posuere. Cras laoreet maximus imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit" where id_produto=1;
update produto set descricao = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper in mauris vel posuere. Cras laoreet maximus imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit" where id_produto=2;
update produto set descricao = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper in mauris vel posuere. Cras laoreet maximus imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit" where id_produto=3;
update produto set descricao = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper in mauris vel posuere. Cras laoreet maximus imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit" where id_produto=4;
update produto set descricao = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper in mauris vel posuere. Cras laoreet maximus imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit" where id_produto=5;
update produto set descricao = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper in mauris vel posuere. Cras laoreet maximus imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit" where id_produto=6;
update produto set descricao = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper in mauris vel posuere. Cras laoreet maximus imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit" where id_produto=7;
update produto set descricao = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper in mauris vel posuere. Cras laoreet maximus imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit" where id_produto=8;
update produto set descricao = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper in mauris vel posuere. Cras laoreet maximus imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit" where id_produto=9;
update produto set descricao = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper in mauris vel posuere. Cras laoreet maximus imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit" where id_produto=27;
update produto set descricao = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper in mauris vel posuere. Cras laoreet maximus imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit" where id_produto=29;
update produto set descricao = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper in mauris vel posuere. Cras laoreet maximus imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit" where id_produto=40;
update produto set descricao = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper in mauris vel posuere. Cras laoreet maximus imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit" where id_produto=41;
update produto set descricao = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper in mauris vel posuere. Cras laoreet maximus imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit" where id_produto=81;
