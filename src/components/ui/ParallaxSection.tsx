import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ParallaxSectionProps extends React.HTMLAttributes<HTMLDivElement> {
    backgroundImage: string;
    children?: React.ReactNode;
    speed?: number;
    overlay?: boolean;
    overlayColor?: string;
    overlayOpacity?: number;
}

const ParallaxSection = ({
    backgroundImage,
    children,
    className,
    speed = 0.5,
    overlay = true,
    overlayColor = "black",
    overlayOpacity = 0.4,
    ...props
}: ParallaxSectionProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return;
            const { top } = ref.current.getBoundingClientRect();
            // Only animate if visible or close to viewport could be an optimization, 
            // but for simple parallax, calculating based on scroll position relative to element is key.
            // A simple approach:
            const scrollY = window.scrollY;
            // We want the background to move at a different speed than the scroll.
            // We can use the element's position relative to the viewport.

            // However, a simpler parallax effect often just uses window.scrollY
            // But for a section that might be further down, we should consider its offset.

            // Let's stick to a simple window scroll based offset for now, but refined.
            // Actually, for a background image parallax, we usually translate the background position.

            setOffset(window.scrollY * speed);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [speed]);

    return (
        <div
            ref={ref}
            className={cn("relative overflow-hidden w-full", className)}
            {...props}
        >
            <div
                className="absolute inset-0 w-full h-[120%] -top-[10%] bg-cover bg-center pointer-events-none will-change-transform"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    transform: `translateY(${offset * 0.1}px)`, // Subtle movement
                }}
            />
            {overlay && (
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ backgroundColor: overlayColor, opacity: overlayOpacity }}
                />
            )}
            <div className="relative z-10 h-full">{children}</div>
        </div>
    );
};

export default ParallaxSection;
