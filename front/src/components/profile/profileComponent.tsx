"use client";
import useUserData from "@/hook/useUserData";

const ProfileComponent = () => {
  const { userData } = useUserData();

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <p>Address: {userData.address}</p>
      <p>Phone: {userData.phone}</p>
      {/* <p>Orders: {JSON.stringify(userData.orders)}</p> */}
    </div>
  );
};

export default ProfileComponent;
