import { NextResponse } from "next/server";

export const url = 'https://reqres.in/api/users'
export async function GET() {


    const response = await fetch(url)
    const data = await response.json();
    return NextResponse.json({ users: data })
}


export async function POST(request: Request) {
    const reqBody = await request.json();
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(reqBody)
    })


    const jsonRes = await response.json();



    return NextResponse.json(jsonRes, { status: 201 });
}