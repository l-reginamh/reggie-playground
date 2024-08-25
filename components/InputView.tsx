import { Input } from './ui/input';
import { Button } from './ui/button';

interface InputViewProps {
    onClick?: () => void
}

export function InputView() {
    return (
        <>
            <Input type='text' placeholder='Input items' />
        </>
    )
}