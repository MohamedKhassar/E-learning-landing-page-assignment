import {  StaticImageData } from "next/image";
import { JSX } from "react";

export type DataItem = {
  name: string;
  value: number;
};

export type ServicesType = {
  text: string;
  icon: JSX.Element;
  bgColor: string;
  textColor: string;
  delay: number;
};
export type CoursesType = {
    title:string
    price:number
    category:string
    textColor:string
    bgColor:string,
    image:StaticImageData,
    delay:number
};
 export type AboutType = {
    section: string;
    description: string;
  };