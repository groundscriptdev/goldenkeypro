import { redirect } from "next/navigation";

// Suppress dynamic render warnings for static export

export default function AboutPage({ params }: { params: { locale: string } }) {
  redirect(`/${params.locale}/about-us`);
}
