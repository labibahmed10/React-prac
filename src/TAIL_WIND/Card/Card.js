import { ArrowRightIcon, CheckIcon } from "@heroicons/react/solid";
import React from "react";

const Card = ({ item }) => {
  const { name, pricing, benefits } = item;
  return (
    <div className="bg-cyan-700 text-white p-3 my-5 rounded-md ">
      <h2 className="text-2xl bg-slate-400 py-5 rounded">Name:{name}</h2>
      <p>
        <span className="text-5xl font-mono font-bold">{pricing}</span>
        <span className="font-bold">\Month</span>
      </p>

      <p className="text-3xl font-bold text-left my-4">Benfits:</p>

      {benefits.map((p, i) => (
        <p key={i} className="bg-slate-400 p-1 rounded-sm flex items-center">
          <CheckIcon className="w-4 h-5 bg-green-500 rounded-lg m-1"></CheckIcon> {p}
        </p>
      ))}

      <button className="flex items-center justify-center my-3 bg-slate-200 py-2 px-4 text-cyan-800 border-0 rounded-lg  w-full  ">
        Order Now <ArrowRightIcon className="w-4 ml-1 "></ArrowRightIcon>
      </button>
    </div>
  );
};

export default Card;
