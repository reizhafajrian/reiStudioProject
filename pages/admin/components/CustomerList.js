import React from "react";

function CustomerList({
  customers,
  customerIsLoading,
  selectedCustomer,
  state,
}) {
  if (customerIsLoading) {
    return (
      <div className="col-xl-12 my-auto text-center">
        {/* <MDSpinner size="72" /> */}
      </div>
    );
  } else {
    // simple mapping of array from props
    return (
      <ul className="list-group list-group-flush w-100">
        {customers.map((customer) => (
          <li
            key={customer.uid}
            className={`list-group-item ${
              customer.uid === selectedCustomer ? "active" : ""
            }`}
            onClick={() => {
              selectedCustomer({
                ...state,
                selectedCustomer: customer.uid,
              });
              console.log(state);
            }}
          >
            {customer.name}
          </li>
        ))}
      </ul>
    );
  }
}
export default CustomerList;
