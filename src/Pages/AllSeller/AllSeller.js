import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSeller = () => {

    const {data:sellers = [], refetch, isLoading } = useQuery({
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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers && 
                            sellers?.map((seller, i) => <tr className="hover" key={seller._id}>
                            <th>{i+1}</th>
                            <td>{seller?.name}</td>
                            <td>{seller?.email}</td>
                            <td>{seller?.phone}</td>
                            
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;