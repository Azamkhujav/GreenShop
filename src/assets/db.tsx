import flow1 from "./icons/1flower.png";
import flow2 from "./icons/flower2.png";
import flow3 from "./icons/flower3.png";
import flow4 from "./icons/flower4.png";
import flow5 from "./icons/flower5.png";
import flow6 from "./icons/flower6.png";
import flow7 from "./icons/flower7.png";
import flow8 from "./icons/flower8.png";
import flow9 from "./icons/flower1.png";
import blog1 from "./icons/blog1.png";
import blog2 from "./icons/blog2.png";
import blog3 from "./icons/blog3.png";
import blog4 from "./icons/blog4.png";

import garder from './icons/GardenCareIcon.png'
import plant from './icons/PlantRenovationIcon.png'
import watering from './icons/WateringGradenIcon.png'


import { IProducts,PlantCard ,BlogCard, CardProps, Contact} from "../types";
import Location from "./icons/Location";
import Message from "./icons/Message";
import Calling from "./icons/Calling";

export const products:IProducts[] = [
    {
        id:1,
        name:'Barberton Daisy',
        price:'$119.00',
        sale:0,
        img:flow1
    },
    {
        id:2,
        name:'Angel Wing Begonia',
        price:'$$169.00',
        sale:0,
        img:flow2
    },
    {
        id:3,
        name:'African Violet',
        price:'$119.00',
        sale:13,
        img:flow3
    },
    {
        id:4,
        name:'Beach Spider Lily',
        price:'$179.00',
        sale:0,
        img:flow4
    },
    {
        id:5,
        name:'Blushing Bromeliad',
        price:'$119.00',
        sale:0,
        img:flow5
    },
    {
        id:6,
        name:'Aluminum Plant',
        price:'$179.00',
        sale:10,
        img:flow6
    },
    {
        id:7,
        name:"Bird's Nest Fern",
        price:'$179.00',
        sale:0,
        img:flow7
    },
    {
        id:8,
        name:'Broadleaf Lady Palm',
        price:'$119.00',
        sale:10,
        img:flow8
    },
    {
        id:9,
        name:'Chinese Evergreen',
        price:'$119.00',
        sale:0,
        img:flow9
    },
]
export const plantCard:PlantCard[] = [
    {
        id:1,
        title:'SUMMER CACTUS & SUCCULENTS',
        text:'We are an online plant shop offering a wide range of cheap and trendy plants',
        img:flow8
    },
    {
        id:2,
        title:'TYLING TRENDS & MUCH MORE',
        text:'We are an online plant shop offering a wide range of cheap and trendy plants',
        img:flow5
    }
]
export const blogCards:BlogCard[] = [
    {
        id:1,
        date:'September 12 | Read in 6 minutes',
        title:'Cactus & Succulent Care Tips',
        text:'Cacti are succulents and are easy-care plants for any home or patio.',
        img:blog1
    },
    {
        id:2,
        date:'September 12 | Read in 6 minutes',
        title:'Top 10 Succulents for Your Home',
        text:'Best in hanging baskets. Prefers medium to high light.',
        img:blog2
    },
    {
        id:3,
        date:'September 12 | Read in 6 minutes',
        title:'Cacti & Succulent Care Tips',
        text:'Cacti and succulents thrive in containers and because most are.',
        img:blog3
    },
    {
        id:4,
        date:'September 12 | Read in 6 minutes',
        title:'Best Houseplants Room by Room',
        text:'The benefits of houseplants are endless. In addition to.',
        img:blog4
    },
]
export const footerCards:CardProps[]= [
    {
        id:1,
        iconUrl:garder,
        title:'Garden Care',
        description:'We are an online plant shop offering a wide range of cheap and trendy plants.'
    },
    {
        id:2,
        iconUrl:plant,
        title:'Plant Renovation',
        description:'We are an online plant shop offering a wide range of cheap and trendy plants.'
    },
    {
        id:3,
        iconUrl:watering,
        title:'Watering Graden',
        description:'We are an online plant shop offering a wide range of cheap and trendy plants.'
    },
]
export const contact:Contact[]=[
    {
        id:1,
        title:'70 West Buckingham Ave. Farmingdale, NY 11735',
        icon:<Location/>
    },
    {
        id:2,
        title:'contact@greenshop.com',
        icon:<Message/>
    },
    {
        id:3,
        title:'+88 01911 717 490',
        icon:<Calling/>
    },
]