import { writable } from 'svelte/store'

export const FeedbackStore = writable([
    {
        id: 1,
        rating: 10,
        comment: "Cillum sint tempor sit reprehenderit aliquip labore tempor pariatur cupidatat cillum cillum enim et enim.",
    },
    {
        id: 2,
        rating: 8,
        comment: "Cillum sint tempor sit reprehenderit aliquip labore tempor pariatur cupidatat cillum cillum enim et enim.",
    },
    {
        id: 3,
        rating: 9.5,
        comment: "Cillum sint tempor sit reprehenderit aliquip labore tempor pariatur cupidatat cillum cillum enim et enim.",
    },
    {
        id: 4,
        rating: 7.5,
        comment: "Cillum sint tempor sit reprehenderit aliquip labore tempor pariatur cupidatat cillum cillum enim et enim.",
    },
])