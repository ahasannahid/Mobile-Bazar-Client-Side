import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyer = () => {

    const {data:Buyers = [], refetch, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res =await fetch(`http://localhost:5000/role/Buyer`)
            const data = await res.json();
            return data;
        }
    });
    // console.log(seller);
    return (
        <div>
            <h3 className="text-3xl text-center mb-5">My Appointments</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Buyers && 
                            Buyers?.map((Buyer, i) => <tr className="hover" key={Buyer._id}>
                            <th>{i+1}</th>
                            <td>{Buyer?.name}</td>
                            <td>{Buyer?.email}</td>
                            <td>{Buyer?.phone}</td>
                            <td><button className='btn-sm btn-primary'>Delete Seller</button></td>
                            
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default AllBuyer;