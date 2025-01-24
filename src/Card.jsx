

  
  const Card =(props) => {
    return (
      <>
      <h1>List</h1>
      
      <div className="bg-slate-950	">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2> */}
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
           {/* // traversing through data of coffee */}
            {
                props.coffee.map((ele)=> (
                 // return console.log(ele.name, ele.id, ele.price, ele.image, ele.votes, ele.rating);

                    // id here for list rendering
                    <div key={ele.id} className="group relative">
      
                    {/* //image goes here */}
                      <img
                        alt={ele.imageAlt}
                        src={ele.image}
                        className="aspect-square w-full rounded-lg bg-gray-200 object-fit group-hover:opacity-75 lg:aspect-auto lg:h-80"
                      />
                      <div className="mt-4 flex justify-between">
                        <div>
      
                          {/* //names go here */}
                          <h3 className="text-sm text-gray-700">
                            <a href={ele.href}>
                              <span aria-hidden="true" className="absolute inset-0" />
                              {ele.name}
                            </a>
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">⭐{ele.rating} Stars {ele.votes} Votes </p>
                          {/* <p className="mt-1 text-sm text-gray-500">{ele.votes} Votes</p> */}
                        </div>
      
                        {/* price goes here */}
                        <p className="text-sm font-medium">{ele.price}</p>
                      </div>
                    </div> )
                  
                   
                 )
            }

          </div>
        </div>
      </div>
      </>

    )
  }

  export default Card;
  