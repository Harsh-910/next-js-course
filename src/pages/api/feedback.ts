import fs  from "fs";
import path from "path";

function handler(req: any, res: any) {
    if(req.method==='POST'){
        const msg=req.body.msg;

        const filePath=path.join(process.cwd(),'Data','Test.json');
        const fileData=fs.readFileSync(filePath);
        const data=JSON.parse(fileData);
        data.push({msg:msg});
        fs.writeFileSync(filePath,JSON.stringify(data))
        res.status(200).json({message:'done'})
    }
}

export default handler;