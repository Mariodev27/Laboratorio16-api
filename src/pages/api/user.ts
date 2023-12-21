import { NextApiRequest, NextApiResponse } from 'next';

export const users = [
    {
        name: 'Mario',
        email: 'mario@example.com',
        country: 'England',
    },
    {
        name: 'Leonel',
        email: 'leonel@example.com',
        country: 'United States',
    },
    {
        name: 'Yadhira',
        email: 'yadhira@example.com',
        country: 'France',
    },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(users);
}