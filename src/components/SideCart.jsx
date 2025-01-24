import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../slices/cartSlice';
import toast from 'react-hot-toast';
import Receipt from './Receipt'; // Receipt modal component
import Details from './Modal';

const SideCart = () => {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleClick = (item) => {
    dispatch(remove(item));
    toast.success('Item Removed');
  };

  // modal handlers for user details
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [showReceipt, setShowReceipt] = useState(false);

  const proceedToPay = () => {
    setShowModal(true); // Open the modal to collect user details
  };

  const handleClose = () => {
    setShowModal(false); // Close the modal
  };

  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-semibold text-xl">Order Details</h1>
      <div className="w-full border my-2"></div>

      <div className="flex flex-col gap-2 no-scrollbar overflow-y-scroll h-[calc(90vh-200px)] pb-10">
        {
          items.length > 0 ? (
            items.map((item, index) => (
              <div
                className="flex flex-col bg-white shadow-sm border gap-2 py-2 px-2 rounded-md"
                key={index}
              >
                <div className="flex gap-2">
                  <img
                    src={item.image}
                    alt="imageurl"
                    width={100}
                    className="rounded-sm"
                  />
                  <div className="flex flex-col justify-between w-full">
                    <h2 className="font-medium text-sm">{item.name}</h2>
                    <p className="text-grey text-xs">
                      {item.desc.length > 20 ? item.desc.substring(0, 20) + '...' : item.desc}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-blue">${item.price}</span>
                      <button
                        className="p-1 bg-blue text-white w-fit rounded-full"
                        onClick={() => handleClick(item)}
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className='text-center'>No Item Added</p>
          )
        }
      </div>

      <div className="relative bottom-0 fixed py-2 flex-col w-full">
        <div className="flex justify-between py-2 border border-blue mb-2 px-4 rounded-md">
          <span className="font-medium text-blue">Total Amount : </span>
          <span className="text-blue font-medium">${totalPrice}</span>
        </div>
        <button
          className="bg-blue text-white font-medium text-md py-2 w-full rounded-md"
          onClick={proceedToPay}
        >
          Proceed To Pay
        </button>
      </div>

      {/* Pass the state and handlers to the Details modal */}
      <Details
        show={showModal}
        onHide={handleClose}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        mobile={mobile}
        setMobile={setMobile}
        setShowReceipt={setShowReceipt}
        showReceipt={showReceipt}
      />

      {/* Show the Receipt modal with the user details */}
      {showReceipt && (
        <Receipt
          show={showReceipt}
          name={name}
          email={email}
          mobile={mobile}
          onHide={() => setShowReceipt(false)}
          totalPrice= {totalPrice}
        />
      )}
    </div>
  );
};

export default SideCart;
