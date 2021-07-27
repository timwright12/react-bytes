import React from "react";

const List = (props) => {
  const { companies } = props;

  if (!companies || companies.length === 0) {
    return <p>No companies loaded yet.</p>;
  }

  return (
    <div>
      <ul>
        {companies.map((company) => {
          return (
            <li>
              <span>{company.name}</span>
              <span>{company.addresses[0].street}</span>
              <span>{company.addresses[0].city}</span>
              <span>{company.addresses[0].zipcode}</span>
              <span>{company.addresses[0].country}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;