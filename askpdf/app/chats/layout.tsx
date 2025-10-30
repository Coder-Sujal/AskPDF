import { SidebarDemo } from "@/components/Sidebar";
import { cn } from "@/lib/utils";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto flex w-full max-w-[1764px] flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800",
        "h-screen"
      )}
    >
      {/* Sidebar for chat list */}
      <SidebarDemo />
      {/* Main chat area */}
      <section className="flex flex-1">{children}</section>
    </div>
  );
}
