export const rupiahFormat = (value: number): string => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(value);
};

/**
 * Formats a numeric string into Indonesian Rupiah format (e.g., "1000000" -> "1.000.000").
 */
export const formatCurrencyInput = (value: string): string => {
    // Remove all non-digit and non-comma characters
    const numericValue = value.replace(/[^,\d]/g, '');
    const [integerPart = '', decimalPart] = numericValue.split(',');

    // Reverse for grouping thousands
    const reversed = integerPart.split('').reverse().join('');
    const grouped = reversed.match(/\d{1,3}/g)?.join('.') || '';
    const formattedInt = grouped.split('').reverse().join('');
    return decimalPart !== undefined ? `${formattedInt},${decimalPart}` : formattedInt;
};
