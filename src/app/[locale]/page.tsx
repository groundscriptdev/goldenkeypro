import { redirect } from "next/navigation";

// Suppress dynamic render warnings for static export

export default function LocalePage({ params }: { params: { locale: string } }) {
  // Redirect to the homepage for the locale
  redirect(`/${params.locale}/homepage`);
}
