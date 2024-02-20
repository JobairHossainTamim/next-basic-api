import { NextResponse } from "next/server";
import { url } from './../route';

export async function GET(req: Request, context: any) {

    const response = await fetch(`${url}/${context.params.id}`)
    const data = await response.json();
    return NextResponse.json({ users: data })

}






export async function PUT(req: Request, context: any) {

    // console.log(context)
    const reqBody = await req.json()
    // console.log(req.body);
    const response = await fetch(`${url}/${context.params.id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(reqBody)
    })


    const jsonRes = await response.json();
    return NextResponse.json(jsonRes, { status: 201 });
}


export async function DELETE(req: Request, context: any) {

    // console.log(context)

    // console.log(req.body);
    await fetch(`${url}/${context.params.id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        },

    })



    return NextResponse.json({ msg: " Success Delete" });
}