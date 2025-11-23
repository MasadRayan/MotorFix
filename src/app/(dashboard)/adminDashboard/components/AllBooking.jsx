import React from "react";

const AllBooking = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="w-full h-[300px] mt-12 text-center">
        <p className="text-xl font-semibold text-gray-500">
          No bookings found.
        </p>
      </div>
    );
  }



  return (
    <section className="my-10">
      <h1 className="text-center text-4xl font-extrabold mb-8">
        All Bookings
      </h1>

      <div className="w-11/12 mx-auto rounded-xl bg-white shadow-lg">
        <div className="overflow-x-auto rounded-xl">
          <table className="table w-full">

            {/* HEAD */}
            <thead className="bg-gray-100 sticky top-0 z-10 text-gray-700">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Service</th>
                <th>Price</th>
                <th>Date</th>
                <th>Status</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody>
              {data.map((booking) => (
                <tr key={booking._id} className="hover:bg-gray-50">

                  <td className="font-semibold py-4">{booking.name}</td>

                  <td>{booking.email}</td>

                  <td className="font-semibold">{booking.serviceName}</td>

                  <td className="text-green-600 font-semibold">
                    ${booking.servicePrice}
                  </td>

                  <td>{booking.date}</td>

                  <td>
                    {booking.status === "Pending" && (
                      <span className="badge badge-warning px-4 py-2">
                        Pending
                      </span>
                    )}
                    {booking.status === "Accepted" && (
                      <span className="badge badge-success px-4 py-2">
                        Accepted
                      </span>
                    )}
                    {booking.status === "Rejected" && (
                      <span className="badge badge-error px-4 py-2">
                        Rejected
                      </span>
                    )}
                  </td>

                  <td className="flex items-center justify-center gap-3 py-4">

                    {/* ACTION BUTTONS (only if pending) */}
                    {booking.status === "Pending" ? (
                      <>
                        <button
                          
                          className="btn btn-success text-white px-5"
                        >
                          Accept
                        </button>

                        <button
                          
                          className="btn btn-error text-white px-5"
                        >
                          Reject
                        </button>
                      </>
                    ) : (
                      <button
                        disabled
                        className="btn btn-outline px-6 text-gray-500"
                      >
                        Done
                      </button>
                    )}
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </section>
  );
};

export default AllBooking;
