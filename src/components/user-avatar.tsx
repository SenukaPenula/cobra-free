"use client";

import { User } from "firebase/auth";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { User as UserIcon } from "lucide-react";

interface UserAvatarProps {
  user: User;
}

const UserAvatar = ({ user }: UserAvatarProps) => {
  return (
    <Avatar>
      {user.photoURL ? (
        <AvatarImage src={user.photoURL} alt={user.displayName ?? ""} />
      ) : (
        <AvatarFallback>
            <span className="sr-only">{user.displayName}</span>
            <UserIcon className="h-5 w-5" />
        </AvatarFallback>
      )}
    </Avatar>
  );
};

export default UserAvatar;
