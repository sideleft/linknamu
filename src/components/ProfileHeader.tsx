import Image from "next/image";
import type { Profile } from "@/data/profile";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={profile.image}
        alt={`${profile.name} 프로필 사진`}
        width={112}
        height={112}
        priority
        className="h-28 w-28 rounded-full border-2 border-gray-200 object-cover dark:border-gray-700"
      />
      <h1 className="mt-4 text-2xl font-bold">{profile.name}</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">{profile.bio}</p>
    </header>
  );
}
