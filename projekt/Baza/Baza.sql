create database sklep;

use sklep;

create table model(
id_modelu int auto_increment primary key,
model varchar(100)
);

create table kategoria(
id_kategoria int auto_increment primary key,
kategoria varchar(100)
);


create table uzytkownicy(
id_uzytkownika int auto_increment primary key,
imie varchar(100),
nazwisko varchar(100),
login varchar(100),
haslo varchar(100),
email varchar(100),
plec varchar(100)
);

create table przedmioty(
id_przedmiotu int auto_increment primary key,
id_kategoria int(5),
id_modelu int(5),
rozmiar varchar(100),
kolor varchar(100),
foreign key (id_kategoria) references kategoria(id_kategoria),
foreign key (id_modelu) references model(id_modelu)
);

create table zamowienia(
id_zamowienia int auto_increment primary key,
id_uzytkownika int(100),
datazamowienia date,
cenazamowoenia int(100),
foreign key (id_uzytkownika) references uzytkownicy(id_uzytkownika)
);

create table zamowienie_przedmiot(
id_zamowienie_przedmiot int auto_increment primary key,
id_zamowienia int(100),
id_przedmiot int(100),
foreign key (id_zamowienia) references zamowienia(id_zamowienia),
foreign key (id_przedmiot) references przedmioty(id_przedmiotu)
);


create table zdjecia(
id_zdjecie int auto_increment primary key,
id_przedmiotu int(100),
nazwa_jpg varchar(100),
foreign key (id_przedmiotu) references przedmioty(id_przedmiotu)
); 
