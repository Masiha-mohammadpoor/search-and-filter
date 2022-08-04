import sansevieria from "../utils/img/Sansevieria.jpg";
import echino from "../utils/img/Echino cactus.jpg";
import peperomia from "../utils/img/Peperomia.jpg";
import bigBonsy from "../utils/img/big bonsy.jpeg";
import Monstera from "../utils/img/Monstera deliciosa.jpg";
import zamofilia from "../utils/img/zamofilia.jpg";
import Araucaria from "../utils/img/Araucaria heterophylla.jpg";
import aloeVera from "../utils/img/aloe vera.jpg";
import ficus from "../utils/img/ficus.jpg";
import petus from "../utils/img/petus.jpg";
import benjamin from "../utils/img/benjamin.jpeg";
import miniBonsy from "../utils/img/mini bonsy.jpg";
import noto from "../utils/img/noto cactus.jpg";
import philodendron from "../utils/img/philodendron.jpg";
import opuntia from "../utils/img/opuntia cactus.jpg";
import Callistemon from "../utils/img/Callistemon.jpg";
import shefflera from "../utils/img/shefflera.jpg";


const Data = () => { 
    
    const productsData = [
    {
        id : 1,
        name : "sansevieria",
        category : "apartment",
        price : 12.0,
        quantity : 9,
        image : sansevieria
    },
    {
        id : 2,
        name : "echino cactus",
        category : "cactus",
        price : 8.3,
        quantity : 4,
        image : echino
    },
    {
        id : 3,
        name : "Peperomia",
        category : "apartment",
        price : 6.9,
        quantity : 11,
        image : peperomia
    },
    {
        id : 4,
        name : "big bonsy",
        category : "shrub",
        price : 23.8,
        quantity : 8,
        image : bigBonsy
    },
    {
        id : 5,
        name : "Monstera",
        category : "apartment",
        price : 15.2,
        quantity : 3,
        image : Monstera
    },
    {
        id : 6,
        name : "zamofilia",
        category : "apartment",
        price : 12.5,
        quantity : 6,
        image : zamofilia
    },
    {
        id : 7,
        name : "heterophylla",
        category : "tree",
        price : 9.7,
        quantity : 13,
        image : Araucaria
    },
    {
        id : 8,
        name :"aloe vera",
        category : "cactus",
        price : 5.5,
        quantity : 3,
        image : aloeVera
    },
    {
        id : 9,
        name :"ficus",
        category : "shrub",
        price : 6.0,
        quantity : 7,
        image : ficus
    },
    {
        id : 10,
        name :"petus",
        category : "apartment",
        price : 3.8,
        quantity : 2,
        image : petus
    },
    {
        id : 11,
        name :"benjamin",
        category : "tree",
        price : 7.0,
        quantity : 10,
        image : benjamin
    },
    {
        id : 12,
        name :"mini bonsy",
        category : "shrub",
        price : 18.3,
        quantity : 1,
        image : miniBonsy
    },
    {
        id : 13,
        name :"noto cactus",
        category : "cactus",
        price : 3.6,
        quantity :18,
        image : noto
    },
    {
        id : 14,
        name :"philodendron",
        category : "apartment",
        price : 5.2,
        quantity :9,
        image : philodendron
    },
    {
        id : 15,
        name :"opuntia cactus",
        category : "cactus",
        price : 3.0,
        quantity :14,
        image : opuntia
    },
    {
        id : 16,
        name :"Callistemon",
        category : "tree",
        price : 8.2,
        quantity :6,
        image : Callistemon
    },
    {
        id : 17,
        name :"shefflera",
        category : "shrub",
        price : 16.0,
        quantity :2,
        image : shefflera
    },
    

]

    return localStorage.setItem("products" , JSON.stringify(productsData));
}

export default Data;


