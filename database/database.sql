create table fym;

use fym;

create table managers(
    id int(11) auto_increment,
    primary key(id),
    managerName varchar(255),
    managerEmail varchar(255),
    managerPassword varchar(255),
    companyName varchar(255),
    createdAt date,
    updatedAt date
);

create table customers(
    id int(11) auto_increment,
    primary key(id),
    customerName varchar(255),
    customerPersonalId varchar(255),
    customerPhone varchar(255),
    customer_id int references manager(id),
    createdAt date,
    updatedAt date,
    amount float default 0,
    weeks float default 13,
    totalPayment float default 0,
    amountPaid float default 0,
    amountNotPaid float default 0,
    weeksPaid  float default 0,
    weeksNotPaid float default 0,
    advance float default 0,
    weeksDue float default 0,
    mora float default 0,
    paymentWeek float default 0,
    countWeek int default 0,
    status varchar(255) default "active"

);


alter table customers add foreign key(customer_id) references managers(id)
on delete cascade
on update cascade;

create table customerdetails(
    id int(11) auto_increment,
    primary key(id),
    customerName varchar(255),
    customerPersonalId varchar(255),
    customerPhone varchar(255),
    createdAt date,
    updatedAt date,
    amount float default 0,
    weeks float default 13,
    totalPayment float default 0,
    amountPaid float default 0,
    amountNotPaid float default 0,
    weeksPaid  float default 0,
    weeksNotPaid float default 0,
    advance float default 0,
    weeksDue float default 0,
    mora float default 0,
    paymentWeek float default 0,
    details_id int references customers(id)

);

alter table customerdetails add foreign key(details_id) references customers(id)
on delete cascade
on update cascade;




