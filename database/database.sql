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
    customerPhone float default 0,
    customer_id int references manager(id),
    createdAt date,
    updatedAt date
);


alter table customers add foreign key(customer_id) references managers(id)
on delete cascade
on update cascade;

create table customerDetails(
    id int(11) auto_increment,
    primary key(id),
    amount float default 0,
    weeks float default 13,
    totalPayment float default 0,
    paymentWeek float default 0,
    createdAt date,
    amountPaid float default 0,
    weeksPaid float default 0,
    weeksNoPaid float default 0,
    amountNoPaid float default 0,
    advance float default 0,
    weeksDue float default 0,
    countWeeks float default 0,
    mora float default 0,
    details_id int references customers(id)
);

alter table customerDetails add foreign key(details_id) references customers(id)
on delete cascade
on update cascade;



