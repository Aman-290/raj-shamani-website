import { VerifiedIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ReplyProps {
    authorName: string;
    authorHandle: string;
    authorImage: string;
    content: string;
    isVerified?: boolean;
    timestamp: string;
}

interface XCardProps {
    link?: string;
    authorName: string;
    authorHandle: string;
    authorImage: string;
    content: string[];
    isVerified?: boolean;
    timestamp: string;
    reply?: ReplyProps;
}

function XCard({
    link = "https://x.com/",
    authorName = "Raj Shamani",
    authorHandle = "rajshamani",
    authorImage = "/raj-shamni.png",
    content = [
        "Growth doesn't happen when you are comfortable.",
        "You need to step out, figure things out, and start building."
    ],
    isVerified = true,
    timestamp = "Today",
    reply,
}: XCardProps) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="block w-full max-w-xl mx-auto"
        >
            <div
                className={cn(
                    "w-full p-1.5 rounded-2xl relative isolate overflow-hidden",
                    "bg-[#0a0a0a]/90 text-white",
                    "bg-gradient-to-br from-[#d8b068]/10 to-transparent",
                    "backdrop-blur-xl backdrop-saturate-[180%]",
                    "border border-white/10",
                    "shadow-[0_8px_16px_rgb(216_176_104_/_0.1)]",
                    "will-change-transform translate-z-0 transition-transform duration-300 hover:scale-[1.02]"
                )}
            >
                <div
                    className={cn(
                        "w-full p-5 rounded-xl relative",
                        "bg-[#050505]/80",
                        "backdrop-blur-md backdrop-saturate-150",
                        "border border-white/5",
                        "text-white",
                        "shadow-sm",
                        "will-change-transform translate-z-0",
                        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:opacity-0 before:transition-opacity before:pointer-events-none",
                        "hover:before:opacity-100"
                    )}
                >
                    <div className="flex gap-3">
                        <div className="flex-shrink-0">
                            <div className="h-12 w-12 rounded-full overflow-hidden border border-white/10 bg-[#111]">
                                <img
                                    src={authorImage}
                                    alt={authorName}
                                    className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                        </div>

                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-1">
                                        <span className="font-bold text-white hover:underline cursor-pointer">
                                            {authorName}
                                        </span>
                                        {isVerified && (
                                            <VerifiedIcon className="h-4 w-4 text-[#d8b068]" />
                                        )}
                                    </div>
                                    <span className="text-gray-400 text-sm font-medium">
                                        @{authorHandle}
                                    </span>
                                </div>
                                <button
                                    type="button"
                                    className="h-8 w-8 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg p-1 flex items-center justify-center transition-colors"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1200"
                                        height="1227"
                                        fill="none"
                                        viewBox="0 0 1200 1227"
                                        className="w-4 h-4"
                                    >
                                        <title>X</title>
                                        <path
                                            fill="currentColor"
                                            d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4">
                        {content.map((item, index) => (
                            <p
                                key={index}
                                className="text-white/90 text-[15px] leading-relaxed mb-2"
                            >
                                {item}
                            </p>
                        ))}
                        <span className="text-gray-500 text-xs mt-3 block font-medium uppercase tracking-wider">
                            {timestamp}
                        </span>
                    </div>

                    {reply && (
                        <div className="mt-5 pt-4 border-t border-white/10 text-white">
                            <div className="flex gap-3">
                                <div className="flex-shrink-0">
                                    <div className="h-10 w-10 rounded-full overflow-hidden border border-white/10">
                                        <img
                                            src={reply.authorImage}
                                            alt={reply.authorName}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-1">
                                        <span className="font-semibold text-white hover:underline cursor-pointer">
                                            {reply.authorName}
                                        </span>
                                        {reply.isVerified && (
                                            <VerifiedIcon className="h-4 w-4 text-[#d8b068]" />
                                        )}
                                        <span className="text-gray-400 text-sm ml-1">
                                            @{reply.authorHandle}
                                        </span>
                                        <span className="text-gray-600 text-sm mx-1">
                                            &middot;
                                        </span>
                                        <span className="text-gray-400 text-sm">
                                            {reply.timestamp}
                                        </span>
                                    </div>
                                    <p className="text-white/80 text-sm mt-1 leading-relaxed">
                                        {reply.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </a>
    );
}

export { XCard }
