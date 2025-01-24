import React, { useEffect, useState } from 'react'
import { services } from '../data';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../slices/cartSlice';
import toast, { Toaster } from 'react-hot-toast';
import SideCart from '../components/SideCart';
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5';
import { IoMdAdd} from 'react-icons/io';
import { FaStar } from 'react-icons/fa';

const MainPage = () => {

  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  console.log("Items:", items);

  // Search functionality
  const [searchQuery, setSearchQuery] = React.useState('');

  // Filter categories
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filtered services state
  const [filteredServices, setFilteredServices] = useState(services);

  // Effect to handle filtering
  useEffect(() => {
    let filtered = services;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(
        (service) => service.category === selectedCategory
      );
    }

    // Apply search query filter
    if (searchQuery.trim() !== '') {
      filtered = filtered.filter((service) =>
        service.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredServices(filtered);
  }, [selectedCategory, searchQuery]);

  // Function to add items to the store
  const handleClick = (service) => {
    dispatch(add(service));
    toast.success("Item Added!");
  };

  
  return (
    <div className='lg:pl-10 lg:pr-0 md:px-8 px-5 flex gap-10 lg:my-0 md:my-10 my-5 h-fit'>
      {/* Left Side */}
      <div className='w-full my-10 flex flex-col gap-10 overflow-y-auto h-full'>
        {/* Search bar & filter button */}
        <div className='flex flex-col sm:flex-row justify-between gap-4'>
          <div className='flex flex-1 gap-2'>
            <input
              type="text"
              placeholder="Search Services.."
              className='flex-1 px-4 py-2 bg-white text-black outline-none border-2 rounded-md w-40'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className='px-4 py-2 bg-blue text-white font-semibold rounded-md hover:bg-hoverBlue'>
              Search
            </button>
          </div>
          <select
            className='bg-white outline-none text-blue font-medium px-4 py-2 border rounded-md sm:ml-4'
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Therapy Sessions">Therapy</option>
            <option value="Fitness Classes">Fitness</option>
            <option value="Personal Development">Personal</option>
            <option value="Education Programs">Education</option>
          </select>
        </div>

        {/* Categories-wise services */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {filteredServices.map((service, index) => (
            <div
              key={index}
              className='border flex flex-col md:gap-2 gap-1 lg:gap-2 p-3 rounded-md hover:bg-lightGrey transition'
            >
              {/* Image */}
              <div className='h-[150px] flex items-center justify-center mb-2'>
                <img
                  src={service.image}
                  alt="service"
                  className='w-full h-full object-cover rounded-md'
                />
              </div>
              <h3 className='text-md font-medium'>{service.name}</h3>
              <span className='text-sm font-medium text-grey'>
                {service.desc.length > 25
                  ? service.desc.substring(0, 25) + '...'
                  : service.desc}
              </span>
              <div className='flex justify-between items-center'>
                <span className='flex gap-2 items-center font-medium'>
                  {service.rating} <FaStar />
                </span>
                <span className='font-medium'>${service.price}</span>
              </div>
              <div className='flex justify-between items-center mt-1'>
                <span className='text-xs text-blue font-medium'>
                  {service.category}
                </span>
                {items.find((item) => item.name === service.name) ? (
                  <button
                    className='p-1 bg-white rounded-full text-sm text-white font-medium'
                    disabled
                  >
                    <IoCheckmarkDoneCircleSharp size={20} color='#00a3ac' />
                  </button>
                ) : (
                  <button
                    className='p-1 bg-blue rounded-full text-sm text-white font-medium'
                    onClick={() => handleClick(service)}
                  >
                    <IoMdAdd size={20} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side */}
      <div className='lg:w-[40%] xl:w-[30%] lg:block hidden shadow-[rgba(0,0,0,0.15)_-5px_0px_10px_-5px] p-6 h-fit sticky top-10'>
        <SideCart />
      </div>

      <Toaster />
    </div>

  )
}

export default MainPage
