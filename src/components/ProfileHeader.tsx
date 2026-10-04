import Image from "next/image";
import type { Profile } from "@/data/profile";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={profile.image}
        alt={`${profile.name} 프로필 사진`}
        width={128}
        height={128}
        priority
        className="h-32 w-32 rounded-full object-cover shadow-[0_12px_32px_-8px_rgba(120,72,40,0.35)] ring-4 ring-white/80 dark:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.6)] dark:ring-white/10"
      />
      <h1 className="mt-6 text-2xl font-bold tracking-tight">{profile.name}</h1>
      <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-stone-500 dark:text-stone-400">
        {profile.bio}
      </p>
    </header>
  );
}
