import { IMG_1, IMG_2, IMG_3, IMG_4, IMG_5, IMG_6, IMG_7, IMG_8, IMG_9, LOGO_URL } from "./constants";

const DressList = [
    {
        id:"1", dressName: "Blue Summer wear", brand:"Guess", rating : 3.9, color : 'blue', price : 15,
        dressimg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEXqZpktcgVy-Z4LNpJFxEu8OApBNjSkbT7Q&usqp=CAU",
    },
    {
        id:"2",dressName:"Green Casual Top", brand:"Forever 21", rating : 4.5, color : 'green', price : 12,
                dressimg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsNnPMPhCNPFNW6-mlk9I8sgAyyITwY41q_A&usqp=CAU",         
    },
    {
        id:"3",dressName: "White Top", brand:"Forever 21", rating : 5.0, color: 'white', price : 9,
        dressimg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc6HHIo5d96GRQAZJfrG8GS0j3yhPi_Jq817uF18BiFGVzHtIZ74k-KMpMp6m_SpfGI64&usqp=CAU",
    },
    {
        id:"4",dressName: "Red Party wear", brand:"Shein", rating : 4.7, color: 'red', price : 25,
        dressimg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDcuSEOnvcE0UgaNiMndOXSWLeQjyzAguOfA&usqp=CAU",
    },
    {
        id:"5",dressName: "Yellow crop top", brand:"Forever 21", rating :   3.5, color: 'yellow', price: 16,
        dressimg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWx94iIF0o62QdZEwE8EnUjoANDSlT7G7DCA&usqp=CAU",
    },
    {
        id:"6",dressName: "Red Top", brand:"Banana Republic", rating : 4.9, color : 'red', price : 30,
        dressimg : "data:image/jpeg;base64,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",
    },
    {
        id:"7",dressName: "White Casual wear", brand:"Zara", rating : 4.3, color: 'white', price : 14,
        dressimg : "data:image/jpeg;base64,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",
    },
    {
        id:"8",dressName: "Black Party Wear", brand:"Guess", rating : 4.5, color: 'black', price : 35,
        dressimg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTqLr09PsA42ektld6vKTSq8O1spKr1YdfAQ&usqp=CAU",
    },
    {
        id:"9", dressName: "Pink Tank Top", brand:"Aeropostale", rating : 4.6, color : 'pink', price : 25,
        dressimg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjFPFMW9HOnbVo99b6VV7DkD5iR3CkfNx9qg&usqp=CAU",
    },
];

export default DressList;