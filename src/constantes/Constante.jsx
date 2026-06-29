import Button from "../components/Button";
import ecouteur from "../assets/card1/ecouteur.png"
import ps4 from "../assets/card1/ps4.png"
import yellowAppleWatch from "../assets/card1/yellowAppleWatch.png"
import Laptop from "../assets/card1/Laptop.png"
import VRMan from "../assets/card1/VRMan.png"
import bluetooph from "../assets/card1/bluetooph.png"
import bus from "../assets/details/bus.svg"
import certifier from "../assets/details/certifier.svg"
import suppor from "../assets/details/suppor.svg"
import Wallet from "../assets/details/Wallet.svg"
import greenWatch from "../assets/card1/greenWatch.png"
import redHeadphone from "../assets/card1/redHeadphone.png"

import black2Headphone from "../assets/products/black2Headphone.jpg"
import blackGrayHeadphone from "../assets/products/blackGrayHeadphone.jpg"
import dorHeadphone from "../assets/products/dorHeadphone.jpg"
import lightBlueHeadphone from "../assets/products/lightBlueHeadphone.jpg"
import laptop2 from "../assets/products/laptop2.jpg"
import pinkWatch from "../assets/products/pinkWatch.jpg"
import whiteHeadphone from "../assets/products/whiteHeadphone.jpg"
import vrConsole from "../assets/products/vrConsole.jpg"

import adultBlur from "../assets/endSection/adultBlur.jpg"
import daniel from "../assets/endSection/daniel.jpg"
import billetto from "../assets/endSection/billetto.jpg"

import fastline from "../assets/company/fastline.png"
import golden from "../assets/company/golden.png"
import jack from "../assets/company/jack.png"
import might from "../assets/company/might.png"
import sweety from "../assets/company/sweety.png"
import logo from '../assets/logo.png'
import { FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";


export const navLinks =[
    'Home',
    'Shop',
    'About Us',
    'Blog',
    'Contact Us'
]

export const card1 = [
    {
        head:'Enjoy',
        middle: 'With',
        product: 'earphone',
        boutton: <Button text={'Browse'} col="bg-red-500 text-white"/>,
        image: ecouteur,
        backgroud : 'bg-linear-to-br from-black from-70% to-slate-600  flex p-4 rounded-xl w-full  sm:w-[45%] lg:w-1/4 mb-20  relative'
    },
    {
        head:'New',
        middle: 'Wear',
        product: 'gadget',
        boutton: <Button text={'Browse'} col="bg-white text-yellow-400"/>,
        image: yellowAppleWatch,
        backgroud : 'bg-yellow-400 flex p-4 rounded-xl w-full sm:w-[45%] lg:w-1/4 mb-20 relative'
    },
    {
        head:'Trend',
        middle: 'Device',
        product: 'laptop',
        boutton: <Button text={'Browse'} col="bg-white text-red-500 lg:w-1/4 sm:w-1/4"/>,
        image: Laptop,
        backgroud : 'bg-red-500 flex flex-col p-4 rounded-xl w-full sm:w-full lg:w-1/2 mb-20  justify-center lg:flex lg:gap-3'
    }
]

export const card2 = [
    {
        head:'Best',
        middle: 'Gaming',
        product: 'console',
        boutton: <Button text={'Browse'} col="bg-red-500 text-white sm:w-full"/>,
        image: ps4,
        backgroud : 'bg-slate-400 flex flex-col pl-4 pb-0 pt-4 rounded-xl w-full lg:w-1/2 mb-3 sm:flex-row sm:justify-between sm:items-center relative',
        position: 'relative top-5 z-50 sm:top-0'
    },
    {
        head:'Play',
        middle: 'Game',
        colorText : 'text-white',
        product: 'oculus',
        boutton: <Button text={'Browse'} col="bg-white text-green-400 sm:w-full sm:mb-2"/>,
        image: VRMan,
        backgroud : 'bg-green-600 flex flex-col  pl-4 pb-0 pt-4 rounded-xl w-full sm:w-[45%] lg:w-1/4 mb-3 sm:flex-row sm:justify-between relative',
        position: "lg:absolute lg:top-35 lg:w-50 lg:h-40 lg:right-0 z-50 sm:absolute sm:top-1 sm:right-0 sm:h-40"
    },
    {
        head:'New',
        middle: 'Amazone',
        product: 'speaker',
        colorText : 'text-white',
        boutton: <Button text={'Browse'} col="bg-white text-blue-500 sm:w-full sm:mb-2"/>,
        image: bluetooph,
        backgroud : 'bg-blue-500 flex flex-col  pl-4 pb-0 pt-4 rounded-xl w-full sm:w-[45%] mb-3 lg:w-1/4 sm:flex-row sm:justify-between relative',
        position: "lg:absolute lg:top-37 lg:w-50 lg:h-40 lg:right-0"
    }
]

export const productIcon= [
    {
        icon: bus,
        title: 'Free Shipping',
        description: 'Free Shipping On All Order'
    },
    {
        icon: certifier,
        title: 'Money Guarantee',
        description: '30 Day Money Back'
    },
    {
        icon: suppor,
        title: 'Online Support 24/7',
        description: 'Technical Support 24/7'
    },
    {
        icon: Wallet,
        title: 'Secure Payment',
        description: 'All Cards Accepted'
    }
]

export const promotion1 = 
    {
        id: 1,
        reduction : '20 % off',
        head: 'fine',
        middle: 'smile',
        date: '15 Nov To 7 Dec',
        title: 'Beats Solo Air',
        temps: 'Summer Sale',
        description: "Company that's grown from 210 to 480 employees in the last 12 months.",
        boutton: <Button text='Shop' col="bg-white text-red-500"/>,
        image: redHeadphone,
        backgroud: 'bg-red-700 flex flex-col  sm:flex-row justify-between p-12 items-center mt-20 rounded-xl '
    }


export const promotion2 = 
    {
        id: 2,
        reduction : '20 % off',
        head: 'happy',
        middle: 'house',
        date: '15 Nov To 7 Dec',
        title: 'Beats Solo Air',
        temps: 'Summer Sale',
        description: "Company that's grown from 210 to 480 employees in the last 12 months.",
        boutton: <Button text='Shop' col="bg-white text-green-500"/>,
        image: greenWatch,
        backgroud: 'bg-green-500 flex flex-col  sm:flex-row justify-between p-12 items-center mt-20 rounded-xl '
    }

    export const sellerProducts = [
        {
            image:black2Headphone,
            title:'Beats',
            price:'$995'
        },
        {
            image:dorHeadphone,
            title:'Rocky Mountain',
            price:'$8,250'
        },
        {
            image:vrConsole,
            title:'Game Console Controller Cable',
            price:'$8,250'
        },
        {
            image:laptop2,
            sale: 'Sale!',
            position: "rounded-full p-2  w-15 h-15 absolute top-2 left-2 inline-flex justify-center items-center bg-red-600 text-white",
            title:'White EliteBook Tablet 810',
            prevPrice: '$11,950',
            price:'$9,950'
        },
        {
            image:lightBlueHeadphone,
            title:'Gore Wear C7',
            price:'$499'
        },
        {
            image:whiteHeadphone,
            title:'Wireless Audio System Multiroom 360',
            price:'$8,250'
        },
        {
            image:blackGrayHeadphone,
            sale: 'Sale!',
            position: "rounded-full p-2  w-15 h-15 absolute top-2 left-2 inline-flex justify-center items-center bg-red-600 text-white",
            prevPrice: '$11,950',
            title:'Beats',
            price:'$9,950'
        },
        {
            image:pinkWatch,
            title:'Smartwatch 2.0 LTE Wifi',
            price:'$499'
        }
    ]

    export const endSection = [
        {
            image:adultBlur,
            date: <p className="font-normal text-lg- my-2">October 5 2019 <span className="font-bold text-xl text-gray-400 ml-4 mr-2 inline-flex justify-center items-center">.</span>   by Paul</p>,
            title: 'How Well Are You Funnelling',
            description:'When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper s ...'
        },
        {
            image:daniel,
            date: <p className="font-normal text-lg- my-2">October 5 2019 <span className="font-bold text-xl text-gray-400 ml-4 mr-2 inline-flex justify-center items-center">.</span>   by Paul</p>,
            title: 'How to Automate Visual',
            description:'When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper ...'
        },
        {
            image:billetto,
            date: <p className="font-normal text-lg- my-2">October 5 2019 <span className="font-bold text-xl text-gray-400 ml-4 mr-2 inline-flex justify-center items-center">.</span>   by Paul</p>,
            title: 'Regression Testing in WordPress',
            description:'There are many variations passages of Lorem Ipsum available, but the majority have suffered alterat ...'
        }
    ]

    export const companyItems = [
        golden, sweety, fastline, might, jack
    ]

    export const footer = [
        {
            image: logo,
            description:'There are many variations passages of Lorem Ipsum available, but the majority have',
            insta :FaInstagram,
            linked: FaLinkedinIn,
            facebook: FaFacebookF,
            twitter: FaTwitter
        },
        {
            title:'Quick Links',
            links : navLinks
        },
        {
            title: 'Contact',
            contact:[
                "+99 (0) 101 0000 888", " Patricia C. Amedee 4401","Waldeck Street Grapevine", "Nashville, Tx 76051"
            ]
        },
        {
            title:'Subscribe To Our Email',
            update: 'For Latest News & Updates',
            formulaire: <label htmlFor="email" className="flex justify-between px-2">
                <input type="email" required placeholder="Enter your Email" className="p-2 lg:w-[80%] focus:border-0 focus:outline-0"/>
                <Button text='Subscribe' col="bg-red-500 text-white lg:w-[27%]"/>
            </label>
        }
    ]