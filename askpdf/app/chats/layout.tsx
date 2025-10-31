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
      <section className="flex flex-1">
        <div className="relative flex h-full w-full items-center justify-center bg-white dark:bg-black">
          <div
            className={cn(
              "absolute inset-0 z-0 opacity-50",
              "[background-size:40px_40px]",
              "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
              "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
            )}
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
          {children}
        </div>
      </section>
    </div>
  );
}
