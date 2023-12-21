// src/mock/routes.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { users } from '../pages/api/user';

export function GET(req: NextApiRequest, res: NextApiResponse) {
    return res.status(200).json(users);
}