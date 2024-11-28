## SQL Questions
1. SELECT - Retrieving Data. Write a query to list the titles and release years of all movies in the film table.

select title, release_year from film;


2. WHERE - Filtering Data. Write a query to find all customers whose last name starts with the letter 'S'.

select last_name from customer where last_name like 'S%';


3. ORDER BY - Sorting Results. List all films titles and their durations, sorted by their rental duration in descending order. If two films have the same rental duration, sort them alphabetically by title.

select title, rental_duration from film order by rental_duration DESC, title;


4. JOIN - Combining Tables. Write a query to list all films along with their categories. Show the film title and category name.

select 
    film.title, category.name 
from 
    film 
inner join 
    film_category on film.film_id = film_category.film_id 
inner join 
    category on film_category.category_id = category.category_id;


5. AGGREGATE FUNCTIONS - Summarizing Data. Write a query to find the average rental duration for movies in each category.

select category.name, avg(film.rental_duration) as average_rental from film inner join film_category on film.film_id = film_category.film_id inner join category on film_category.category_id = category.category_id group by category.category_id, category.name order by category.name;

select
    category.name, 
    avg(film.rental_duration) as average_rental
from 
    film 
inner join 
    film_category on film.film_id = film_category.film_id 
inner join 
    category on film_category.category_id = category.category_id
group by
    category.category_id, catergory.name
order by
    category.name;


6. COUNT - Counting Rows. Write a query to count how many films are in the Action category.

select category.name,  count(film.film_id) as film_count from film inner join film_category on film.film_id = film_category.film_id inner join category on film_category.category_id = category.category_id where category.name= 'Action' group by category.category_id, category.name order by category.category_id, category.name;

select
    category.name,  count(film.film_id) as film_count
from 
    film
inner join 
    film_category on film.film_id = film_category.film_id 
inner join 
    category on film_category.category_id = category.category_id
where
    category.name='Action'
group by
    category.category_id, category.name
order by
    category.category_id, category.name;


7. INSERT - Adding Data. Insert a new customer into the customer table. The new customer should have a first name, last name, email, and be linked to an existing store.
 store ids are 1 or 2
  jared.ely@sakilacustomer.org example email

insert into customer(first_name, last_name, email, store_id,address_id) values ( 'Jane', 'Doe', 'ridethecyclone@sakilacustomer.org',1,52) returning *;

insert into customer(first_name, last_name, email, store_id,address_id)
values ( 'Jane', 'Doe', 'ridethecyclone@sakilacustomer.org',1,52)
returning *;

select last_name from customer where last_name like 'Doe';

had to add address_id for it to work because its required to be not null
also bonus points if you get the reference


8. UPDATE - Modifying Data. Update the rental rate of all films in the Comedy category, increasing it by 10%.

update film set rental_rate= rental_rate * 1.10 where film_id in (select film_id from film_category where category_id = 5);

update film
set rental_rate= rental_rate * 1.10
where film_id in (
    select film_id
    from film_category
    where category_id = 5
);

select category.category_id from category where category.name = 'Comedy';
 comedy catagory_id is 5

9. DELETE - Removing Data. Write a query to delete all films that have never been rented. Make sure to use a subquery to identify the films that haven't been rented.

delete from film where film.rental_rate = 4.99 returning film.title;


delete from film
where film.rental_rate = 4.99
returning film.title;

i put 4.99 because that is the default value


10. CREATE TABLE & ALTER TABLE - Managing Database Structure. Create a new table called movie_reviews with columns for review_id, film_id, reviewer_name, rating, and comments. Then, add a foreign key constraint linking film_id to the film table.

create table if not exists movie_reviews(review_id serial primary key, film_id integer not null, reviewer_name varchar(50) not null, rating smallint not null, comments varchar(255), constraint movie_review_film_id_fkey foreign key(film_id) references film(film_id) on update cascade on delete restrict);

create table if not exists movie_reviews (
    review_id serial primary key,
    film_id integer not null,
    reviewer_name varchar(50) not null,
    rating smallint not null,
    comments varchar(255), 
    constraint movie_review_film_id_fkey
        foreign key(film_id)
            references film(film_id)
            on update cascade
            on delete restrict
);



## SQLAlchemy Questions

1. Understanding SQLAlchemy Automap: How do you think the `AutoModels` class works to dynamically generate SQLAlchemy ORM models from the database schema?

(133,"Chamber Italian","A Fateful Reflection of a Moose And a Husband who must Overcome a Monkey in Nigeria",2006,1,7,4.99,117,14.99,NC-17,"2013-05-26 14:50:58.951",{Trailers},"'chamber':1 'fate':4 'husband':11 'italian':2 'monkey':16 'moos':8 'must':13 'nigeria':18 'overcom':14 'reflect':5")

this is the raw film from the film table 
i think that automodels is taking the row information and turning it into a object class almost. like its taking the film data from the table and making a model or object class that has all the same properties of the row and then 
it writes methods basically to get out the information to the user without it being mutable 

im going to write a java psudocode class object to try and explain it better

    public film(){
        int film_id= 113;
        String title="Chamber Italian"
        String description= "A Fateful Reflection of a Moose And a Husband who must Overcome a Monkey in Nigeria";
        int realese year= 2006;
        //you get the idea

        public String getTitle(){
            return title;
        }
    }

    thats basically what i think automodels is doing just in python



2. Async Database Operations: Explain the use of asynchronous database sessions in this script. Why does the script use AsyncSession instead of a regular Session, and how does this improve the efficiency of database operations?

async makes it so it doesnt have to currently talking to the database server when it makes the models, it prepares them so that once the database has finished whatever it may have been doing before they can just be inputed in right away decreasing any potential wait time and causing less of a bottle neck on the server trying to do everything at once. 


3. SQLAlchemy Query Construction: In the `model_examples` function, there is a query that selects all customers whose last names start with the letter "P". See if you can write another questy that selects customers whose first name ends with the letters "n" or "a" using SQLAlchemy syntax.

from sqlalchemy import or_

async with AsyncSession(engine) as session:
        customers = await session.execute(
            select(Customer).where(or_(Customer.last_name.endswith("n"),(Customer.last_name.endswith("a"))))
        )
        for customer in customers.scalars().all():
            print(customer.last_name)


4. In the `raw_sql_examples` function, there are two ways to execute SQL queries: directly via the engine using conn.execute() and using an ORM session with session.execute(). Discuss the pros and cons of executing raw SQL directly compared to using SQLAlchemy’s ORM methods.
Hint: Consider the trade-offs in terms of readability, safety (e.g., SQL injection risks), and flexibility when using raw SQL versus ORM abstractions.

the aorm session is less vulnurble to sql injections because you are not directly interteraction with the database as you have to go through the orm file. the raw sql requires less setup compared to a orm file and is faster because your directly connected. the orm session takes advantage of little qualities of life features that mgiht be added via sqlalchemy which you wouldnt really get if you just do raw sql. and because orm is run by  sqlalchemy it also probuly runs the models better than if you were to try and run them directly. 