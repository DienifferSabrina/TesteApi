
create table tb_usuario (
    id 			int auto_increment,
    nome		varchar(50) not null,
    login		varchar(50) not null,
    senha		varchar(30) not null,
    email		varchar(50) not null,
    
	PRIMARY KEY (id)    
);

create table tb_fornecedor (
    id 				int auto_increment,
    nome			varchar(60) not null,
    razaoSocial		varchar(60) not null,
    cnpj			varchar(30) not null,
    telefone		varchar(20),
    endereco		varchar(50),
    numero			int,
    bairro			varchar(30),
    cidade			varchar(30),
    estado			varchar(30),

	PRIMARY KEY (id)    
);

create table tb_produto (
    id 				int auto_increment,
    nome			varchar(50) not null,
    valor			numeric(6,2), 
    saldo			int,
    id_fornecedor	int,
    
	PRIMARY KEY (id), 
    FOREIGN KEY (id_fornecedor) REFERENCES tb_fornecedor(id)
);


select * from tb_usuario;

select * from tb_fornecedor;

select * from tb_produto;
