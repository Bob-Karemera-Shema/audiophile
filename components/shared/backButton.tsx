'use client';

import { useRouter } from 'next/navigation';

const BackButton = () => {
    const router = useRouter();

    return (
        <button
            className='mt-6 sm:mt-8 lg:mt-20 text-font-gray text-[15px]/3 tracking-wider cursor-pointer hover:border-b-[1px]'
            onClick={() => router.back()}
        >
            Go Back
        </button>
    );
};

export default BackButton;