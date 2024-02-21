import { NextResponse } from "next/server";
import dbConnection from './../../db/connection';
import User from './../../model/model';

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

    await dbConnection();

    const data = await User.create(reqBody)

    return NextResponse.json(data, { status: 201 });
}