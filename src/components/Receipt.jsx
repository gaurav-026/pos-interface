import jsPDF from 'jspdf';
import React from 'react';

const Receipt = ({ show, onHide, name, email, mobile, totalPrice }) => {
    if (!show) return null;
    // to download the reciept 
    const download = () => {
        const doc = new jsPDF();

        // Add content to the PDF
        doc.text('Receipt', 20, 20);
        doc.text(`Name: ${name}`, 20, 30);
        doc.text(`Email: ${email}`, 20, 40);
        doc.text(`Mobile: ${mobile}`, 20, 50);
        doc.text(`Total Price: $${totalPrice}`, 20, 60);

        // Add today's date
        const date = new Date().toLocaleDateString();
        doc.text(`Date: ${date}`, 20, 70);

        // Save the generated PDF with a file name
        doc.save(`receipt_${name}_${date}.pdf`);

        onHide(); // Close the receipt modal after download
    }
    return (
        // display user details with date and amount paid 
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50">
             <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Receipt</h2>
                    <button onClick={onHide} className="text-gray-500 hover:text-gray-700">
                        &times;
                    </button>
                </div>

                <div className="mt-4 flex flex-col">
                    <p className='text-md'>Name: {name ? name : 'Unknown Customer'}</p>
                    <p className='text-md'>Email: {email ? email : 'Unknown Email'}</p>
                    <p className='text-md'>Mobile: {mobile ? mobile : 'Unknown Number'}</p>
                    <p className='text-md'>Amount Paid: ${totalPrice}</p>
                </div>

                <div className="mt-6 flex justify-end space-x-4">
                    <button
                        onClick={onHide}
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
                    >
                        Close
                    </button>
                    <button
                        onClick={download}
                        className="px-4 py-2 text-sm font-medium text-white bg-blue rounded-md focus:outline-none hover:bg-hoverBlue"

                    >
                        Download
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Receipt;
