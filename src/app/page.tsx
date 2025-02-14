import { Website } from "@/types/website";

async function getWebsiteData(): Promise<Website> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`);
    if (!res.ok) throw new Error("Failed to fetch website data");
    return res.json();
}

export default async function Home() {
    const website = await getWebsiteData();

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <div className="text-center sm:text-left">
                    <h1 className="text-2xl font-bold mb-2">{website.name}</h1>
                    <p className="text-gray-600 dark:text-gray-300">
                        {website.url}
                    </p>
                </div>
            </main>
        </div>
    );
}
