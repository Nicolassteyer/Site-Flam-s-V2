const restaurants = [
  { city: "Paris Centre", address: "12 rue Exemple, Paris" },
  { city: "Lille", address: "8 place Exemple, Lille" },
  { city: "Strasbourg", address: "4 rue Exemple, Strasbourg" },
];

export default function RestaurantsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-5xl font-black uppercase">Nos restaurants</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {restaurants.map((restaurant) => (
          <article
            key={restaurant.city}
            className="rounded-[1.5rem] bg-white p-8 shadow-sm"
          >
            <h2 className="text-2xl font-black uppercase">
              {restaurant.city}
            </h2>
            <p className="mt-3 text-neutral-700">{restaurant.address}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
