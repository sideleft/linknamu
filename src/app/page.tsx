import LinkList from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";
import ThemeToggle from "@/components/ThemeToggle";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-6 py-8 sm:py-14">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>
      <div className="mt-4 flex flex-col gap-12">
        <ProfileHeader profile={profile} />
        <LinkList links={links} />
      </div>
    </main>
  );
}
