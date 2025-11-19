import { cn } from "@/lib/utils";
import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

const GlassCard = ({ children, className, hoverEffect = true, ...props }: GlassCardProps) => {
    return (
        <div
            className={cn(
                "relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-xl",
                "dark:bg-black/20 dark:border-white/10",
                hoverEffect && "transition-all duration-300 hover:bg-white/20 hover:scale-[1.02] hover:shadow-2xl",
                className
            )}
            {...props}
        >
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">{children}</div>
        </div>
    );
};

export default GlassCard;
