// components/MetricRing.tsx
'use client';

interface MetricRingProps {
    value: string;
    label: string;
}

export function MetricRing({ value, label }: MetricRingProps) {
    const percentage = parseInt(value.replace('%', ''), 10);
    const radius = 42;
    const stroke = 8;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="relative w-[110px] h-[110px]">
                <svg
                    width="110"
                    height="110"
                    className="-rotate-90"
                >
                    <circle
                        cx="55"
                        cy="55"
                        r={radius}
                        stroke="#e5e7eb"
                        strokeWidth={stroke}
                        fill="none"
                    />
                    <circle
                        cx="55"
                        cy="55"
                        r={radius}
                        stroke="#6ECB63"
                        strokeWidth={stroke}
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        className="transition-all duration-700 ease-out"
                    />
                </svg>

                <div className="absolute inset-0 flex items-center justify-center text-2xl font-semibold text-green-700">
                    {value}
                </div>
            </div>

            <p className="text-lg font-medium text-gray-900 text-center">
                {label}
            </p>
        </div>
    );
}
