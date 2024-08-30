import React, {BaseHTMLAttributes, DetailedHTMLProps, forwardRef, ForwardRefRenderFunction,} from 'react';

interface IProps
    extends DetailedHTMLProps<BaseHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    type: 'next' | 'prev';
    id: string;
}

const ButtonSliderRef: ForwardRefRenderFunction<HTMLButtonElement, IProps> = (
    {type, id, ...restProps},
    ref,
) => (
    <button {...restProps} id={id} ref={ref}>
        {type === 'next' ? (
            <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" rx="5.5" stroke="#0297D4"/>
                <path d="M21 14L33 26L21 38" stroke="#0297D4" strokeWidth="2" strokeLinecap="round"/>
            </svg>
        ) : (
            <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" rx="5.5" stroke="#0297D4"/>
                <path d="M21 14L33 26L21 38" stroke="#0297D4" strokeWidth="2" strokeLinecap="round"/>
            </svg>
        )}
    </button>
);

export const ButtonSlider = forwardRef(ButtonSliderRef);
