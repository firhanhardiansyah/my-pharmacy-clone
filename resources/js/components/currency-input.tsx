import React from 'react';
import { NumericFormat } from 'react-number-format';

import { cn } from '@/lib/utils';

interface CurrencyInputProps {
    value: string;
    onValueChange: (value: string) => void;
    placeholder?: string;
    className?: string;
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({ value, onValueChange, placeholder = '', className = '' }) => {
    return (
        <>
            <NumericFormat
                value={value}
                thousandSeparator="."
                decimalSeparator=","
                decimalScale={0}
                allowNegative={false}
                onValueChange={(values) => {
                    onValueChange(values.value); // raw number (unformatted)
                }}
                placeholder={placeholder}
                className={cn(
                    'border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
                    'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
                    'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
                    className,
                )}
            />
        </>
    );
};

export default CurrencyInput;
