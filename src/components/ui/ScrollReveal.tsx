import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    animation?: "fade-up" | "fade-in" | "scale-in" | "slide-in-right" | "slide-in-left";
    delay?: number;
    duration?: number;
    threshold?: number;
    once?: boolean;
}

const ScrollReveal = ({
    children,
    className,
    animation = "fade-up",
    delay = 0,
    duration = 0.6,
    threshold = 0.1,
    once = true,
    ...props
}: ScrollRevealProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (once && ref.current) {
                        observer.unobserve(ref.current);
                    }
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            { threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold, once]);

    const getAnimationClass = () => {
        switch (animation) {
            case "fade-up":
                return "animate-fade-up";
            case "fade-in":
                return "animate-fade-in";
            case "scale-in":
                return "animate-scale-in";
            case "slide-in-right":
                return "animate-slide-in-right";
            case "slide-in-left":
                return "animate-slide-in-left";
            default:
                return "animate-fade-up";
        }
    };

    return (
        <div
            ref={ref}
            className={cn(
                "transition-all duration-1000",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                isVisible && getAnimationClass(),
                className
            )}
            style={{
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                animationFillMode: "both",
            }}
            {...props}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
