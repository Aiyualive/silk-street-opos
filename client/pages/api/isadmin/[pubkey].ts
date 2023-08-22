import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const query = req.query;
        const pubKey = query.pubkey! as string;
        const admins = process.env.ADMINS!;
        const isAdmin = admins.includes(pubKey);
        res.status(200).json(isAdmin);
    } catch (e) {
        // is there a difference from using .send?
        res.status(500).json({error: e});
    }
}
