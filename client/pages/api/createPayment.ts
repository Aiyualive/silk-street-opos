import { NextApiRequest, NextApiResponse } from "next";
import { backendService } from "../../service/backend";

type Data = {
    message: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === "POST") {
        const {data} = req.body;
        const result = await backendService.createPayment(data);
        res.status(200).json({ message: result });
    } else {
        res.status(405).json({ message: "Only do POST" });
    }
}
