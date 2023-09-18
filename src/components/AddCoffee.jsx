import React from 'react';

const AddCoffee = () => {
    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const testy = form.testy.value;
        const category = form.category.value;
        const details = form.details.value;
        const coffee = {name,quantity,supplier,testy,category,details};
        console.log(coffee);

    }
    return (
       
            <div className='p-24 bg-gray-200'>
                <h1 className='text-5xl'>Add Coffee</h1>
                <form onSubmit={handleAddCoffee}>
                   <div className='md:flex '>
                   <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                           
                            <input type="text" placeholder="Coffee Name" name='name' className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4 mb-8 ">
                        <label className="label">
                            <span className="label-text">Coffee Quantity Avilable</span>
                        </label>
                        <label className="input-group">
                           
                            <input type="text" placeholder="Coffee Quantity" name='quantity' className="input input-bordered w-full" />
                        </label>
                    </div>
                   </div>

                   {/* supplier and testy */}
                   <div className='md:flex'>
                   <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Coffee Supplier</span>
                        </label>
                        <label className="input-group">
                           
                            <input type="text" placeholder="Coffee Supplier" name='supplier' className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4 mb-8 ">
                        <label className="label">
                            <span className="label-text">Coffee Testy</span>
                        </label>
                        <label className="input-group">
                           
                            <input type="text" placeholder="Coffee Testy" name='testy' className="input input-bordered w-full" />
                        </label>
                    </div>
                   </div>

                   {/* category and details */}
                   <div className='md:flex '>
                   <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Coffee Category</span>
                        </label>
                        <label className="input-group">
                           
                            <input type="text" placeholder="Coffee Category" name='category' className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4 mb-8 ">
                        <label className="label">
                            <span className="label-text">Coffee Details</span>
                        </label>
                        <label className="input-group">
                           
                            <input type="text" placeholder="Details" name='details' className="input input-bordered w-full" />
                        </label>
                    </div>
                   </div>
             
                   <input className="btn btn-block bg-amber-700 text-white" type="submit" value="Add Coffee" />
                </form>
            </div>
      
    );
};

export default AddCoffee;