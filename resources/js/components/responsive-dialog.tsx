import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ReactNode } from 'react';

interface ResponsiveDialogProps {
    title: string;
    description?: string;
    open: boolean;
    setOpen: (open: boolean) => void;
    children: ReactNode;
}

export default function ResponsiveDialog({ title, description, open, setOpen, children }: ResponsiveDialogProps) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    {description && <DialogDescription>{description}</DialogDescription>}
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    );
}
