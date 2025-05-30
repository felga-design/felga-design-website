// app/api/services/route.ts
import { NextResponse } from "next/server";
import { getServicesPageData } from "@/lib/fetchUslugiData";

export async function GET() {
  const data = await getServicesPageData();
  return NextResponse.json(data.services); // tylko lista usług
}
