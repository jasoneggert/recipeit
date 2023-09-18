import { useState } from "react";
import "./App.css";
import { useQuery, gql } from "@apollo/client";

function App() {
  const GET_USERS = gql`
    query GET_USERS {
      users {
        id
        username
        email
        password
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_USERS);
  console.log("🚀 ~ file: App.jsx:13 ~ data:", data);

  return (
    <>
      <p>hi</p>
    </>
  );
}

export default App;
