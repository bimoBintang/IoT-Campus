const Icon = ({ className, ...rest }: any) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={className}
        {...rest}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
      </svg>
    );
};
Icon.displayName = "Icon"

const AceternityIcon = ({ order }: { order: string }) => {
    return (
        <div>
            {/* this btn is from https://ui.aceternity.com/components/tailwindcss-buttons border magic */}
            {/* change rounded-lg, text-purple px-5 py-2 */}
            {/* remove focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cuz we don't need to focus */}
            {/* remove text-sm font-medium h-12 , add font-bold text-2xl */}
            <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
                <span
                    className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
                bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
                />
                <span
                    className="inline-flex h-full w-full cursor-pointer items-center 
                justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
                >
                    {order}
                </span>
            </button>
        </div>
    );
};
AceternityIcon.displayName = "AceternityIcon"

export { Icon, AceternityIcon };