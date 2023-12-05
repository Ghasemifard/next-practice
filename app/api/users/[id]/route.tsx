import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";
import { use } from "react";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: { id: params.id },
  });

  if (!user)
    return NextResponse.json({ error: "user not found" }, { status: 404 });

  return NextResponse.json(user);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // validate the request body
  const body = await request.json();
  // if invalid, return 400
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  // If dosent exist, return 404

  const user = await prisma.user.findUnique({
    where: { id: params.id },
  });

  if (!user)
    return NextResponse.json({ error: "user not found" }, { status: 404 });
  // else : Update the user and return the updated user
  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return NextResponse.json(updatedUser);
}

export async function  DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Fetch user from db
  // If not found, return 404
  // Delete the user
  // Return 200
const user = await prisma.user.findUnique({
  where: {id:params.id}
})

if (!user)
return NextResponse.json({ error: "user not found" }, { status: 404 });


await prisma.user.delete({
  where:{id: user.id}
})
  return NextResponse.json({});
}
