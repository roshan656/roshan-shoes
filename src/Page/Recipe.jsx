import React from "react";


const Recipe = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header Section */}
      <div className="bg-darkBlue text-white p-6 rounded-lg flex flex-col md:flex-row items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Discover Simple, Delicious, And{" "}
            <span className="text-pink-400">Fast Recipes!</span>
          </h1>
          <p className="mt-2">
            A recipe is soulless. The essence of the recipe must come from you,
            the cook.
          </p>
          <button className="mt-4 flex items-center gap-2">
            Read More
          </button>
        </div>
        <img src="/chef.png" alt="Chef" className="w-48 md:w-64 mt-4 md:mt-0" />
      </div>

      {/* Recipes Section */}
      <div className="mt-6">
        <h2 className="text-2xl font-bold">Recipes</h2>
        <div className="flex gap-4 mt-4">
          <button variant="outline">Pizza</button>
          <button variant="outline">Dessert</button>
          <button variant="outline">Salad</button>
          <button variant="outline">Noodles</button>
          <button variant="outline">Mocktail</button>
        </div>
      </div>

      {/* Search & Sort */}
      {/* <div className="mt-4 flex justify-between items-center">
        <div className="flex items-center border px-4 py-2 rounded-lg bg-white">
          <Search size={16} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search recipe and more..."
            className="ml-2 outline-none"
          />
        </div>
        <select className="border p-2 rounded-lg bg-white">
          <option>Sort by: Newest</option>
          <option>Sort by: Popular</option>
        </select>
      </div> */}

      Recipe List
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {/* <Card>
          <CardContent>
            <h3 className="text-lg font-bold">Avocado Salad</h3>
            <p>Serving: 1 | Cook Time: 1h 30min</p>
          </CardContent>
        </Card> */}
        {/* <Card>
          <CardContent>
            <h3 className="text-lg font-bold">Russian Salad</h3>
            <p>Serving: 1 | Cook Time: 1h 45min</p>
          </CardContent>
        </Card> */}
      </div>

      {/* Blog Section */}
      <div className="mt-6">
        <h2 className="text-2xl font-bold">Our Blog</h2>
        <div className="mt-4 bg-white p-4 rounded-lg">
          <h3 className="text-lg font-bold">This salad is food for family</h3>
          <p>Eating well every day is a balance while going to a...</p>
          <button className="mt-2">More Blogs</button>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="mt-6">
        <h2 className="text-2xl font-bold">Gallery</h2>
        <div className="grid grid-cols-3 gap-2 mt-4">
          <img src="/dish1.jpg" alt="Dish 1" className="rounded-lg" />
          <img src="/dish2.jpg" alt="Dish 2" className="rounded-lg" />
          <img src="/dish3.jpg" alt="Dish 3" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Recipe;
