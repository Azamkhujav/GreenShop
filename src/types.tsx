import { ReactElement } from "react";

export type Category = {
  name: string;
  count: number;
};
export type IProducts = {
    id:number,
    name:string,
    price:string,
    img:string
    sale:number
}
export type PlantCard ={
    id:number,
    title:string,
    text:string,
    img:string
}
export type BlogCard ={
  id:number,
  date:string
  title:string,
  text:string,
  img:string
}
export interface CardProps {
  id?:number
  iconUrl: string;
  title: string;
  description: string;
}
export interface Contact {
  id?:number,
  title:string,
  icon:ReactElement
}