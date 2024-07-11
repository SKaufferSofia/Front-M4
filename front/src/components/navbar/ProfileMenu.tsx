"use client";
import useCart from "@/hook/useCart";
import useUserData from "@/hook/useUserData";
import { alertQuestion } from "@/utils/utils";
import {
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import Link from "next/link";
export default function ProfileMenu() {
  const { logout } = useUserData();
  const { clearCart } = useCart();

  const handleLogout = async () => {
    const alert = await alertQuestion(
      "question",
      "Log Out",
      "Are you sure you want to log out?",
      "orange",
      "Yes, log out!"
    );
    if (alert.isConfirmed) {
      logout();
      clearCart();
      window.location.href = "/";
    }
  };

  return (
    <Menu placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="white"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-white p-0.5"
            src={"https://cdn-icons-png.flaticon.com/512/149/149071.png"}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1 bg-black border-black">
        <Link href="/profile/dashboard">
          <MenuItem className="flex items-center gap-2 rounded poppins-semibold text-white">
            My Profile
          </MenuItem>
        </Link>
        <Link href="/profile/orders">
          <MenuItem className="flex items-center gap-2 rounded poppins-semibold text-white">
            My Orders
          </MenuItem>
        </Link>
        <MenuItem
          className="flex items-center gap-2 rounded poppins-semibold text-red-400"
          onClick={handleLogout}
        >
          Log Out
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
