import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function AllUserTable({ data }) {

    if (!data || data.length === 0) {
        return (
            <div className="w-full h-[300px] mt-12 text-center">
                <p className="text-xl font-semibold text-gray-500">
                    No users found.
                </p>
            </div>
        );
    }

    return (
        <section className="my-10">
            <h1 className="text-center text-4xl font-extrabold mb-8">
                All Users
            </h1>

            <div className="w-11/12 mx-auto rounded-xl bg-white shadow-lg">
                <div className="overflow-x-auto rounded-xl">
                    <table className="table w-full">

                        {/* TABLE HEAD */}
                        <thead className="bg-gray-100 sticky top-0 z-10 text-gray-700">
                            <tr>
                                <th className="py-4">User</th>
                                <th>Email</th>
                                <th>Provider</th>
                                <th>Role</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>

                        {/* TABLE BODY */}
                        <tbody>
                            {data.map((user) => (
                                <tr key={user._id} className="hover:bg-gray-50">

                                    {/* IMAGE + NAME */}
                                    <td className="flex items-center gap-3 py-4">
                                        <Image
                                            src={user.image ? user.image : "/assets/images/user/user.png"}
                                            alt={user.name}
                                            width={60}
                                            height={60}
                                            className="rounded-full h-14 w-14 object-cover"
                                        />
                                        <span className="font-semibold">{user.name}</span>
                                    </td>

                                    {/* EMAIL */}
                                    <td>{user.email}</td>

                                    {/* PROVIDER */}
                                    <td className="capitalize">{
                                        user.provider ? user.provider : "Email "
                                    }</td>

                                    

                                    {/* ROLE */}
                                    <td className="font-semibold">
                                        {
                                            user.role === "admin" ? (
                                                <span className="text-red-500">Admin</span>
                                            ) : (
                                                <span className="text-blue-600">User</span>
                                            )
                                        }
                                    </td>

                                    {/* ACTION BUTTONS */}
                                    <td className="flex items-center justify-center gap-5">

                                        {/* EDIT */}
                                        <button className="p-3 rounded-full bg-blue-100 hover:bg-blue-200 transition">
                                            <FaRegEdit className="text-blue-600 text-xl" />
                                        </button>

                                        {/* DELETE */}
                                        <button className="p-3 rounded-full bg-red-100 hover:bg-red-200 transition">
                                            <MdDelete className="text-red-600 text-xl" />
                                        </button>

                                    </td>

                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            </div>
        </section>
    );
}
