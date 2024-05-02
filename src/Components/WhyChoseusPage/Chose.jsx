import React from 'react';
import { assets } from '../../assets/assets';

function Choose() {
  return (
    <div className="container ml-10 py-8">
      <h1 className="text-3xl font-bold text-center text-5xl text-red-500 mb-8">Why Choose Us</h1>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2 px-4">
          <p className="text-gray-700 mb-4">
             . At perferendis adipisci nihil dicta excepturir magni! Vitae, quisquam. Asperiores, minus! Nobis at impedit necessitatibus saepe accusamus. Ex quaerat nihil fuga accusantium accusamus. Magnam sunt, minus necessitatibus, temporibus, animi dolor voluptatum nam ea quibusdam atque optio excepturi. Quibusdam, omnis! Quasi hic possimus rem iure vitae voluptates aliquid eaque, facere impedit maiores nihil doloremque aspernatur perferendis enim est quos corporis itaque? Nesciunt quos cumque quam voluptates corporis saepe dolore neque. Veritatis reiciendis nihil molestias voluptatibus ea facere rerum non vero fugit corporis blanditiis quibusdam, laborum voluptas consectetur mollitia unde totam cum recusandae sit at, officia id! Dolores deserunt blanditiis unde. Quod possimus provident at, illo architecto ex aspernatur dolor, deleniti, fuga recusandae harum libero cupiditate! Est doloremque rem a itaque, optio ut, sed alias labore architecto assumenda commodi rerum. Est! Reiciendis, dolores voluptatibus. Quas consequatur blanditiis aperiam, sint temporibus sunt mollitia voluptatibus quos eveniet corrupti dolor rem laudantium totam veniam! At atque, earum maiores saepe doloribus ratione et fugiat iusto. Culpa laborum excepturi fugit necessitatibus quam expedita quidem ipsa hic! Quisquam est nam quis quam ab? Doloremque tenetur, accusantium cum consectetur quidem exercitationem incidunt necessitatibus alias, veniam veritatis quis non. Qui vero asperiores velit voluptate cumque et vel sed eos repellat deleniti? Delectus sunt deserunt impedit sequi ea provident molestiae minima, molestias, nobis ducimus ipsum libero, aperiam neque distinctio vel.
          </p>
          <button className="text-red-500 mt-4">More Details</button>
        </div>
        <div className="md:w-1/2 px-4 mt-4 md:mt-0">
          <img src={assets.about} alt="Header" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default Choose;
