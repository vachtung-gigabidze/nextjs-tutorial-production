import { NextResponse } from "next/server"

export function middleware(request: Request){
   // console.log('middleware')
//    return Response.json({
//     msg: 'привет'
//    });
    return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
    matcher: ['/about/:path*']
}