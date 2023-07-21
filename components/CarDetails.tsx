import { Fragment } from "react";
import Image from "next/image";

import { Dialog, Transition } from "@headlessui/react";
import { CarProps } from "@/types";
//import { generateCarImageUrl } from "@utils";


interface CarDetailsProps{
    isOpen:boolean,
    closeModal:()=>void;
    car:CarProps
}

function CarDetails({isOpen,closeModal,car}:CarDetailsProps) {
  return (
    <div>CarDetails</div>
  )
}

export default CarDetails