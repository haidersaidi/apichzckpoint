
import { Route, Routes, Navigate } from "react-router-dom";
import UserList from "./components/userlist";
import User from "./components/user";
import { Fragment } from "react";

export default function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Navigate to="/users" />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </Fragment>
  );
}
