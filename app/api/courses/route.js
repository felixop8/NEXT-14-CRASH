import { NextResponse } from "next/server";
import courses from "./data.json";
import { v4 as uuid4 } from "uuid";

export const GET = async () => {
  return NextResponse.json(courses);
};

export const POST = async (request) => {
  const { title, description, level, link } = await request.json();
  const newCourse = {
    id: uuid4(),
    title,
    description,
    level,
    link,
  };
  courses.push(newCourse);
  return NextResponse.json(courses);
};
