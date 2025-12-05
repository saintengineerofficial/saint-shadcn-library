import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const filePath = searchParams.get("path");

  if (!filePath) {
    return NextResponse.json({ error: "path is required" }, { status: 400 });
  }

  const resolved = path.resolve(process.cwd(), filePath);
  const workspaceRoot = path.resolve(process.cwd(), "src");

  // 防止越权访问，仅允许读取 src 下的文件
  if (!resolved.startsWith(workspaceRoot)) {
    return NextResponse.json({ error: "invalid path" }, { status: 400 });
  }

  try {
    const code = await fs.promises.readFile(resolved, "utf-8");
    return NextResponse.json({ code });
  } catch (error) {
    return NextResponse.json({ error: "file not found" }, { status: 404 });
  }
}
