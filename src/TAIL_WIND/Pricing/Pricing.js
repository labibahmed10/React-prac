import React from "react";
import Card from "../Card/Card";

const Pricing = () => {
  const PricingOption = [
    {
      id: 1,
      name: "Free",
      pricing: 0,
      benefits: ["Limited edition", "One month free", "No full time service"],
    },
    {
      id: 2,
      name: "Regular",
      pricing: 50.99,
      benefits: ["Special edition", "Six month access", "18hrs service"],
    },
    {
      id: 3,
      name: "Premium",
      pricing: 99.99,
      benefits: ["Premium edition", "Lifetime access", "Special Support at any time"],
    },
  ];
  return (
    <section className="bg-slate-400 p-10">
      <h1 className="text-5xl text-center  text-white">Best deal of the town</h1>
      <p className="text-justify my-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, alias quos libero maiores a ipsum,
        iste corrupti amet fuga autem deserunt ducimus accusamus cumque soluta nostrum aperiam id? Quam,
        repellat est? At, cupiditate maxime commodi alias consequatur non adipisci nobis itaque libero tempora
        tempore numquam! Unde dolorem impedit amet temporibus.
      </p>

      <div className="grid md:grid-cols-3 text-center   gap-3">
        {PricingOption.map((item) => (
          <Card key={item.id} item={item}></Card>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
