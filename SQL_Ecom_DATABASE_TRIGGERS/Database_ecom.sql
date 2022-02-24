-- Database: ecom

-- DROP DATABASE IF EXISTS ecom;

CREATE DATABASE ecom
    WITH 
    OWNER = og
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_IN'
    LC_CTYPE = 'en_IN'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
	
	--creating customers table
	create table customers(
		c_id serial primary key,
		c_name varchar(50),
		c_address varchar(50)
	)
	
	--creating orders table
	create table orders(
		o_id serial primary key,
		o_amount int,
		o_details varchar(100),
		c_id serial references customers(c_id)
	)
	
	--creating products table
	create table products(
		p_id serial primary key,
		p_name varchar(100),
		p_price int,
		p_available int
	)
	
	--creating a relationship table between orders and products table
	create table mtm_op(
		o_id serial references orders(o_id),
		p_id serial references products(p_id)
	)
	
	---inserting data into customers table
	
	insert into customers(c_name,c_address) values ('nitin','pune'),
	('aditya','noida'),('vikram','delhi'),('tushar','mumbai')
	
	--to see the data in customers table
	select * from customers
	
	--inserting data in orders table
	insert into orders(o_amount,o_details,c_id) values(1000,'electrical app',2),
	(2000,'mobile devices',3)
	
	--to see the data in orders table
	select * from orders
	
	--inserting data into products table
	insert into products(p_name,p_price,p_available) values('mi 5 mobile',5000,10),
	('vivo 10 mobile',6000,5),('washing machine',20000,20)
	
	--to see the data in products table
	select * from products
	
	--inserting data into mtm_op table
	insert into mtm_op (o_id,p_id) values(1,2)
	insert into mtm_op (o_id,p_id) values(2,3)
	
	--to see the data in mtm_op table
	select * from mtm_op
	
	
	
	--function to perform update operation in products table using trigger
	create or replace function update_prod_insert_mtm_op()
	returns trigger
	language PLPGSQL
	as
	$$
		begin
		update products set p_available=p_available-1 where p_id=new.p_id;
		return new;
		end;
		
	
	$$
										 
	--function to perform update operation in orders table using trigger							 
	create or replace function update_ord_insert_mtm_op()
	returns trigger
	language PLPGSQL
	as
	$$
		begin
		update orders set o_amount=o_amount+(select p_price from products where p_id=new.p_id);
		return new;
		end;
		
	
	$$
	
	--trigger to update products table before inserting in mtm_op table
	create trigger insert_mtm_op_update_products
	before insert on mtm_op 
	for each row
	execute procedure update_prod_insert_mtm_op()
	
	
	--trigger to update orders table before inserting in mtm_op table
	create trigger insert_mtm_op_update_orders
	before insert on mtm_op 
	for each row
	execute procedure update_ord_insert_mtm_op()
	
	
	
	
	