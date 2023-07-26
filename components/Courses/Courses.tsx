import getCourses from "@/utils/getProduct";

export default async function Courses(category: string): Promise<JSX.Element> {
  const courses = await getCourses(category);

  return <ul>{courses && <p>{courses.length}</p>}</ul>;
}
