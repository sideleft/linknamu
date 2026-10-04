import LinkList from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";
import ThemeToggle from "@/components/ThemeToggle";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-4 py-6 sm:py-10">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>
      <div className="mt-4 flex flex-col gap-10">
        <ProfileHeader profile={profile} />
        <LinkList links={links} />
      </div>
    </main>
  );
}
