import { useState, useEffect, useRef } from 'react';

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
    const [value, setValue] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let start = 0;
                    const end = target;
                    const duration = 2000;
                    const startTime = performance.now();

                    const animate = (now: number) => {
                        const elapsed = now - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 4);
                        start = Math.floor(eased * end);
                        setValue(start);
                        if (progress < 1) requestAnimationFrame(animate);
                    };

                    requestAnimationFrame(animate);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 },
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [target]);

    return (
        <div ref={ref} className="stat-value">
            {value.toLocaleString()}{suffix}
        </div>
    );
}

export default function Stats() {
    const stats = [
        { label: 'Active Partners', value: 500, suffix: '+' },
        { label: 'Orders Fulfilled', value: 10000, suffix: '+' },
        { label: 'Cities Covered', value: 50, suffix: '+' },
        { label: 'Products Delivered', value: 25000, suffix: '+' },
    ];

    return (
        <section className="stats">
            <div className="container">
                <div className="reveal">
                    <div className="section-tag" style={{ color: 'rgba(255,255,255,0.7)' }}>Impact Numbers</div>
                    <h2 className="section-title" style={{ color: '#fff' }}>
                        Growing Stronger Every Day
                    </h2>
                </div>

                <div className="stats-grid">
                    {stats.map((s) => (
                        <div key={s.label} className="stat-item reveal">
                            <AnimatedCounter target={s.value} suffix={s.suffix} />
                            <div className="stat-label">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
